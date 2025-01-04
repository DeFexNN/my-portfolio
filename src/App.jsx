import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="bg-blue-500 p-4 shadow-md text-white">
          <h1 className="text-3xl font-semibold text-center">My Portfolio</h1>
        </header>

        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white p-3">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="container mt-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
          <p>© 2025 My Portfolio</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
