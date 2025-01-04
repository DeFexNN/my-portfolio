import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function NavigationLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={to}>
        <motion.button
          className={`nav-button ${isActive ? 'active' : ''}`}
          whileHover={{
            textShadow: "0 0 8px rgb(255,204,0)",
          }}
        >
          {children}
        </motion.button>
      </Link>
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div 
            className="title-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <motion.h1 
              className="animated-title"
              data-text="My Portfolio"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              drag
              dragConstraints={{
                top: -10,
                left: -100,
                right: 100,
                bottom: 10,
              }}
              dragElastic={0.05}
            >
              My Portfolio
            </motion.h1>
          </motion.div>
        </motion.header>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glassmorphism"
        >
          <div className="container">
            <ul className="flex justify-center items-center gap-12">
              <NavigationLink to="/">About</NavigationLink>
              <NavigationLink to="/projects">Projects</NavigationLink>
              <NavigationLink to="/contact">Contact</NavigationLink>
            </ul>
          </div>
        </motion.nav>

        <main>
          <AnimatedRoutes />
        </main>

        <motion.footer
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="container">
            <p className="text-center">© 2025 My Portfolio</p>
          </div>
        </motion.footer>
      </div>
    </Router>
  );
}

export default App;