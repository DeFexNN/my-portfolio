import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PageTransition from './PageTransition';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Використовуємо простіший запит з меншою кількістю даних
        const response = await axios.get(
          'https://api.github.com/users/DeFexNN/repos', {
          params: {
            sort: 'updated',
            direction: 'desc',
            per_page: 6
          },
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        const projectsData = response.data.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
          updated_at: repo.updated_at,
          homepage: repo.homepage,
          stars: repo.stargazers_count
        }));

        setProjects(projectsData);
      } catch (error) {
        console.error('Error details:', error.response || error);
        setError(
          error.response?.status === 403 
            ? 'GitHub API rate limit exceeded. Please try again later.'
            : 'Failed to load projects. Please try again later.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <PageTransition>
      <section className="modern-card">
        <motion.h2
          className="text-3xl font-bold text-yellow-500 mb-6 text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          My Recent Projects
        </motion.h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-4">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="modern-card backdrop-blur-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(255, 204, 0, 0.2)"
                }}
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 h-20 overflow-auto">
                  {project.description || 'No description available'}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="text-yellow-500">{project.language || 'N/A'}</span>
                    <span>{new Date(project.updated_at).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    {project.stars > 0 && (
                      <span className="text-yellow-500">★ {project.stars}</span>
                    )}
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  );
}

export default Projects;