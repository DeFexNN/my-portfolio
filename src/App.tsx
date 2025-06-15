import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Biography from './pages/Biography.tsx';
import Contacts from './pages/Contacts.tsx';
import AnimatedPage from './components/AnimatedPage.tsx';
import './BackgroundParticles.css';
import './App.css';
import BackgroundParticles from './components/BackgroundParticles.tsx';
import { ProjectsSection } from './components/ProjectsSection';
import './styles/projects.css';

function App() {

  const AnimatedRoutes = () => {
    const location = useLocation();
    return (
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Biography /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><ProjectsSection /></AnimatedPage>} />
          <Route path="/contacts" element={<AnimatedPage><Contacts /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <BrowserRouter>
      {/* Background particle effect */}
      <BackgroundParticles />
      <LayoutGroup>
        <motion.div
          className="header_style"
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Navbar />
        </motion.div>
        <motion.div
          className="container"
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatedRoutes />
        </motion.div>
      </LayoutGroup>
    </BrowserRouter>
  );
}

export default App
