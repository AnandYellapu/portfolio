import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import Home from './pages/Home.js'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Education from './pages/Education';

function App() {
  const [wrap, updatewrap] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updatewrap(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {wrap ? (
        <Preloader />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education /> } />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}
export default App;

