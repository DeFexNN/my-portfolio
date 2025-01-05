import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 30
  };

  const expandAnimation = {
    initial: {
      height: 0,
      opacity: 0,
      scale: 0.95,
      transformOrigin: "top"
    },
    animate: {
      height: "auto",
      opacity: 1,
      scale: 1,
      transition: {
        height: { ...springConfig, duration: 0.4 },
        opacity: { duration: 0.3, delay: 0.1 },
        scale: { duration: 0.3, delay: 0.1 }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      scale: 0.95,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="relative">
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className="modern-card cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.h3 className="text-xl font-bold text-yellow-400 mb-3">
          {project.name}
        </motion.h3>

        <motion.p className="text-gray-200 mb-4 leading-relaxed">
          {project.description || 'This project is currently in development.'}
        </motion.p>

        <motion.div layout="position" className="min-h-[80px]">

        </motion.div>

        {/* Мови програмування */}
        <motion.div layout="position" className="mt-4">
          <h4 className="text-sm font-semibold text-yellow-500 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.languages.map(lang => (
              <span
                key={lang.name}
                className="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400"
              >
                 {lang.name} {lang.percentage}% 
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div layout="position" className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Updated: {formatDate(project.updated_at)}</span>
            <span>{project.size ? `Size: ${(project.size / 1024).toFixed(1)} MB` : ''}</span>
          </div>
        </motion.div>

        <motion.div 
          className="mt-4 text-center text-yellow-500/70"
          layout="position"
        >
          {isExpanded ? '↑ Click to collapse' : '↓ Click to expand'}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            style={{ marginTop: '0.5rem' }} // Додаємо відступ зверху
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modern-card bg-gray-800/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Project Details</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-500 mb-2">Repository Info</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>Created: {formatDate(project.created_at)}</li>
                      <li>Last Push: {formatDate(project.updated_at)}</li>
                      <li>Size: {(project.size / 1024).toFixed(1)} MB</li>
                      {project.commits && <li>Total Commits: {project.commits}</li>}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-yellow-500 mb-2">Statistics</h5>
                    <ul className="space-y-2 text-gray-300">
                      {project.stars > 0 && <li>Stars: ⭐ {project.stars}</li>}
                      {project.forks > 0 && <li>Forks: 🔄 {project.forks}</li>}
                      <li>Main Language: {project.languages[0]?.name || 'Not specified'}</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                  {project.homepage && (
                    <motion.a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 text-yellow-500 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectCard;
