import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PageTransition from './PageTransition';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';
import { LayoutGroup } from 'framer-motion';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Базовий запит репозиторіїв
        const reposResponse = await axios.get(
          'https://api.github.com/users/DeFexNN/repos',
          {
            params: {
              sort: 'pushed',
              direction: 'desc',
              per_page: 6,
              type: 'owner'
            },
            headers: {
              'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        );

        // Отримуємо детальну інформацію для кожного репозиторію
        const detailedProjects = await Promise.all(
          reposResponse.data.filter(repo => !repo.fork).map(async (repo) => {
            try {
              // Отримуємо мови програмування
              const languagesResponse = await axios.get(
                `https://api.github.com/repos/DeFexNN/${repo.name}/languages`,
                {
                  headers: {
                    'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`
                  }
                }
              );

              // Отримуємо статистику комітів
              const commitsResponse = await axios.get(
                `https://api.github.com/repos/DeFexNN/${repo.name}/stats/contributors`,
                {
                  headers: {
                    'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`
                  }
                }
              );

              // Рахуємо статистику мов
              const totalBytes = Object.values(languagesResponse.data).reduce((a, b) => a + b, 0);
              const languages = Object.entries(languagesResponse.data).map(([name, bytes]) => ({
                name,
                percentage: ((bytes / totalBytes) * 100).toFixed(1),
                bytes
              }));

              // Рахуємо загальну кількість комітів
              const totalCommits = commitsResponse.data
                ?.find(contributor => contributor.author?.login === 'DeFexNN')
                ?.total || 0;

              return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                languages,
                totalBytes,
                commits: totalCommits,
                created_at: repo.created_at,
                updated_at: repo.pushed_at, // використовуємо pushed_at для актуальної дати
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                homepage: repo.homepage,
                default_branch: repo.default_branch,
                size: repo.size
              };
            } catch (error) {
              console.error(`Error fetching details for ${repo.name}:`, error);
              return null;
            }
          })
        );

        const validProjects = detailedProjects.filter(Boolean);
        
        if (validProjects.length === 0) {
          throw new Error('No projects data available');
        }

        setProjects(validProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(
          error.response?.status === 403
            ? 'API rate limit exceeded. Please try again later.'
            : 'Failed to load projects. Please try again later.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Функція для ручного оновлення даних
  const handleRefresh = () => {
    localStorage.removeItem('githubProjects');
    localStorage.removeItem('githubProjectsTimestamp');
    window.location.reload();
  };

  const handleProjectClick = (project, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({
      x: rect.left,
      y: rect.top
    });
    setSelectedProject(project);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    exit: {
      y: -20,
      opacity: 0
    }
  };

  return (
    <PageTransition>
      <section className="modern-card overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            className="text-3xl font-bold text-yellow-500 text-center flex-1"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            My Recent Projects
          </motion.h2>
          {error && (
            <motion.button
              onClick={handleRefresh}
              className="text-yellow-500 hover:text-yellow-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🔄 Refresh
            </motion.button>
          )}
        </div>
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 p-4">{error}</div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="projects-grid"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="flex flex-col"
                  style={{ margin: '0.5rem 0' }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          position={modalPosition}
        />
      </section>
    </PageTransition>
  );
}

export default Projects;