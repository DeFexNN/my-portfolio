import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { getLanguageIcon, getLanguageColor } from '../utils/languageIcons';

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
        className="modern-card cursor-pointer repo-card"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Заголовок */}
        <div className="repo-header">
          <motion.h3 className="text-xl font-bold text-yellow-400 mb-2">
            {project.name}
          </motion.h3>
          <motion.p className="text-gray-200 leading-relaxed">
            {project.description || 'This project is currently in development.'}
          </motion.p>
        </div>

        {/* Ліва колонка */}
        <div className="repo-card-left">
          <div className="repo-stat-block">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fas fa-star text-yellow-500 text-lg"></i>
                <span className="text-gray-400">Stars</span>
              </div>
              <span className="text-yellow-400 font-semibold ml-2">{project.stars}</span> {/* Додано ml-2 */}
            </div>
          </div>

          <div className="repo-stat-block">
            <div className="flex items-center space-x-2">
              <i className="far fa-calendar-alt text-yellow-500"></i>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Created</span>
                <span className="text-sm text-gray-200">{formatDate(project.created_at)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Права колонка */}
        <div className="repo-card-right">
          <div className="repo-stat-block">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fas fa-code-commit text-yellow-500 text-lg"></i>
                <span className="text-gray-400">Commits</span>
              </div>
              <span className="text-yellow-400 font-semibold ml-2">{project.commits}</span> {/* Додано ml-2 */}
            </div>
          </div>

          <div className="repo-stat-block">
            <div className="flex items-center space-x-2">
              <i className="fas fa-hdd text-yellow-500"></i>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Size</span>
                <span className="text-sm text-gray-200">{(project.size / 1024).toFixed(1)} MB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Мови програмування (на всю ширину) */}
        <div className="repo-languages">
          <div className="text-sm text-yellow-500 font-medium mb-3 flex items-center">
            <i className="fas fa-code-branch mr-3"></i>
            <span>Languages Used:</span>
          </div>
          {project.languages
            .filter(lang => parseFloat(lang.percentage) >= 0.1) // Змінено мінімальний поріг
            .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
            .slice(0, 3)
            .map(lang => (
              <div key={lang.name} className="w-full mb-3">
                <div className="flex justify-between items-center text-sm mb-2 w-full">
                  <div className="flex items-center gap-3">
                    <div className="language-icon-wrapper p-2">
                      <i 
                        className={`${getLanguageIcon(lang.name)} language-icon`}
                        style={{ color: getLanguageColor(lang.name) }}
                      ></i>
                    </div>
                    <span className="text-gray-300 font-medium tracking-wide">{lang.name}</span>
                  </div>
                  <span className="text-yellow-500 font-semibold whitespace-nowrap px-3">
                    {lang.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden w-full backdrop-blur-sm">
                  <div 
                    className="h-full rounded-full transition-all duration-300"
                    style={{ 
                      width: `${lang.percentage}%`,
                      backgroundColor: getLanguageColor(lang.name),
                      opacity: 0.8,
                      boxShadow: `0 0 10px ${getLanguageColor(lang.name)}`
                    }}
                  />
                </div>
              </div>
          ))}
          {project.languages.length > 3 && (
            <div className="text-xs text-gray-400 mt-3 text-right italic flex items-center justify-end gap-2">
              <i className="fas fa-ellipsis-h"></i>
              <span>+{project.languages.length - 3} more languages</span>
            </div>
          )}
        </div>

        {/* Статус внизу */}
        <div className="repo-status">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <i className="fas fa-history text-yellow-500"></i>
              <span className="text-sm text-gray-400">Updated:</span>
              <span className="text-sm text-gray-400">{formatDate(project.updated_at)}</span>
            </div>
            <div className="flex items-center text-yellow-500 text-sm space-x-2">
              {isExpanded ? (
                <>
                  <span>Less details</span>
                  <i className="fas fa-chevron-up"></i>
                </>
              ) : (
                <>
                  <span>More details</span>
                  <i className="fas fa-chevron-down"></i>
                </>
              )}
            </div>
          </div>
        </div>

      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            style={{ marginTop: '0.5rem' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modern-card bg-gray-800/50 p-4"> {/* Зменшено padding з p-6 до p-4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4"> {/* Зменшено margin з mb-6 до mb-4 */}
                  <h4 className="text-2xl font-bold text-yellow-400">Project Details</h4>
                  <span className="text-sm text-gray-400 px-3 py-1 bg-gray-800/50 rounded-full border border-yellow-500/20">
                    ID: {project.id}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Зменшено gap з gap-8 до gap-4 */}
                  {/* Ліва колонка */}
                  <div className="space-y-4"> {/* Зменшено gap з space-y-6 до space-y-4 */}
                    <div className="details-block">
                      <h5 className="text-yellow-500 text-lg font-semibold mb-3 flex items-center"> {/* Зменшено margin з mb-4 до mb-3 */}
                        <i className="fas fa-info-circle mr-2"></i>Repository Info
                      </h5>
                      <div className="space-y-2 bg-gray-900/30 p-3 rounded-lg border border-yellow-500/10"> {/* Зменшено padding і gap */}
                        <div className="detail-item">
                          <i className="fas fa-calendar-alt text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Created:</span>
                          <span className="text-gray-200 ml-2">{formatDate(project.created_at)}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-clock text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Last Push:</span>
                          <span className="text-gray-200 ml-2">{formatDate(project.updated_at)}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-database text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Repository Size:</span>
                          <span className="text-gray-200 ml-2">{(project.size / 1024).toFixed(1)} MB</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-code-branch text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Default Branch:</span>
                          <span className="text-gray-200 ml-2">{project.default_branch}</span>
                        </div>
                      </div>
                    </div>

                    <div className="details-block">
                      <h5 className="text-yellow-500 text-lg font-semibold mb-3 flex items-center">
                        <i className="fas fa-chart-line mr-2"></i>Activity
                      </h5>
                      <div className="space-y-2 bg-gray-900/30 p-3 rounded-lg border border-yellow-500/10">
                        {project.commits && (
                          <div className="detail-item">
                            <i className="fas fa-code-commit text-yellow-500 mr-2"></i>
                            <span className="text-gray-400">Total Commits:</span>
                            <span className="text-gray-200 ml-2">{project.commits}</span>
                          </div>
                        )}
                        <div className="detail-item">
                          <i className="fas fa-clock text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Last Updated:</span>
                          <span className="text-gray-200 ml-2">{formatDate(project.updated_at)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Права колонка */}
                  <div className="space-y-4">
                    <div className="details-block">
                      <h5 className="text-yellow-500 text-lg font-semibold mb-3 flex items-center"> {/* Змінено з mb-4 на mb-3 */}
                        <i className="fas fa-chart-bar mr-2"></i>Statistics
                      </h5>
                      <div className="space-y-2 bg-gray-900/30 p-3 rounded-lg border border-yellow-500/10"> {/* Змінено padding і gap */}
                        <div className="detail-item">
                          <i className="fas fa-star text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Stars:</span>
                          <span className="text-gray-200 ml-2">{project.stars}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-code-branch text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Forks:</span>
                          <span className="text-gray-200 ml-2">{project.forks}</span>
                        </div>
                      </div>
                    </div>

                    <div className="details-block">
                      <h5 className="text-yellow-500 text-lg font-semibold mb-3 flex items-center"> {/* Змінено з mb-4 на mb-3 */}
                        <i className="fas fa-code mr-2"></i>Technologies
                      </h5>
                      <div className="space-y-2 bg-gray-900/30 p-3 rounded-lg border border-yellow-500/10"> {/* Змінено padding і gap */}
                        <div className="detail-item">
                          <i className="fas fa-language text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Primary Language:</span>
                          <span className="text-gray-200 ml-2">{project.languages[0]?.name || 'Not specified'}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-code text-yellow-500 mr-2"></i>
                          <span className="text-gray-400">Total Languages:</span>
                          <span className="text-gray-200 ml-2">{project.languages.length}</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-700">
                          <span className="text-sm text-gray-400">Language Distribution:</span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {project.languages.map(lang => (
                              <span
                                key={lang.name}
                                className="px-2 py-1 rounded-full text-xs"
                                style={{
                                  backgroundColor: `${getLanguageColor(lang.name)}20`,
                                  color: getLanguageColor(lang.name),
                                  border: `1px solid ${getLanguageColor(lang.name)}40`
                                }}
                              >
                                {lang.name} ({lang.percentage}%)
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex flex-col gap-4">
                    {/* URL Repository кнопка */}
                    <motion.a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-url-button group"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="button-icon">
                        <i className="fas fa-code-branch text-yellow-500 text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                      </div>
                      <div className="button-content">
                        <span className="button-label">Repository URL</span>
                        <span className="button-value">{project.html_url}</span>
                      </div>
                      <div className="button-action">
                        <i className="fas fa-external-link-alt text-yellow-500/50 group-hover:text-yellow-500 transition-colors"></i>
                      </div>
                    </motion.a>

                    {/* Кнопки дій */}
                    <div className="flex flex-wrap gap-4 justify-end"> {/* Змінено gap з 3 на 4 */}
                      {project.homepage && (
                        <motion.a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-button demo-button group"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="button-content">
                            <i className="fas fa-external-link-alt text-lg group-hover:rotate-12 transition-all duration-300"></i>
                            <span className="font-medium">Live Demo</span>
                          </div>
                          <div className="button-background"></div>
                        </motion.a>
                      )}
                      <motion.a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-button github-button group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="button-content">
                          <i className="fab fa-github text-lg group-hover:rotate-12 transition-all duration-300"></i>
                          <span className="font-medium">View Source</span>
                        </div>
                        <div className="button-background"></div>
                      </motion.a>
                    </div>
                  </div>
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
