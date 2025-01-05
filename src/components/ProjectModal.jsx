import { motion, AnimatePresence } from 'framer-motion';

function ProjectModal({ project, isOpen, onClose, position }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-xl p-6 max-w-lg w-full border border-yellow-500/20 shadow-xl"
          initial={{ y: position.y, x: position.x, scale: 0.5, opacity: 0 }}
          animate={{ 
            y: "50vh",
            x: "50%",
            scale: 1, 
            opacity: 1,
            translateX: "-50%",
            translateY: "-50%"
          }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <motion.button
              className="absolute top-2 right-2 text-gray-400 hover:text-yellow-500"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            <h3 className="text-2xl font-bold text-yellow-400 mb-4">{project.name}</h3>
            
            <div className="space-y-4">
              <p className="text-gray-300">{project.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">
                    <span className="text-yellow-500">Language:</span> {project.language || 'N/A'}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-yellow-500">Updated:</span>{' '}
                    {new Date(project.updated_at).toLocaleDateString()}
                  </p>
                </div>
                {project.stars > 0 && (
                  <p className="text-gray-400">
                    <span className="text-yellow-500">Stars:</span> {project.stars}
                  </p>
                )}
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                {project.homepage && (
                  <motion.a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-yellow-500 px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                )}
                <motion.a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
