import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import PageTransition from './PageTransition';

function About() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const calculateAge = () => {
    const birthDate = new Date('2007-04-03');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDownloadCV = () => {
    // Створіть посилання на ваш PDF файл резюме
    const cvUrl = './assets/'; // Замініть на реальний шлях до вашого PDF
    
    // Створюємо посилання для завантаження
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Denys_CV.pdf'; // Ім'я файлу при завантаженні
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    navigate('/projects');
  };

  return (
    <PageTransition>
      <section className="modern-card">
        <motion.div className="relative">
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <section className="bg-gray-900 p-12 rounded-lg shadow-2xl">
            <motion.h2 
              className="text-3xl font-bold text-yellow-500 mb-8 text-center"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              About Me
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Denys</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <span className="text-yellow-500">Age:</span> {calculateAge()} years old
                    <br />
                    <span className="text-yellow-500">Born:</span> April 3, 2007
                  </p>
                  <p className="text-lg">
                    Aspiring Cybersecurity Specialist studying at Khmelnytskyi National University
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Technical Skills</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Programming Languages: C, C++, Java</li>
                    <li>AI Implementation and Integration</li>
                    <li>Problem-Solving and Analysis</li>
                    <li>Cybersecurity Fundamentals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Key Strengths</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>High Stress Resistance</li>
                    <li>Quick Learning Ability</li>
                    <li>Adaptability to New Environments</li>
                    <li>Goal-Oriented Mindset</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-400 text-lg">
                As a young and ambitious cybersecurity student, I combine my technical knowledge with 
                a natural ability to adapt and learn. My expertise in programming and AI, coupled with 
                strong problem-solving skills, makes me well-equipped to tackle complex challenges in 
                the ever-evolving field of cybersecurity.
              </p>
            </motion.div>

            <motion.div 
              className="mt-8 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold"
              >
                Download CV
              </motion.button>
              <motion.button
                onClick={handleViewProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 text-yellow-500 px-6 py-2 rounded-lg font-semibold gradient-button"
              >
                View Projects
              </motion.button>
            </motion.div>
          </section>
        </motion.div>
      </section>
    </PageTransition>
  );
}

export default About;