import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PageLoader from './components/PageLoader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <AnimatePresence mode="wait">
            {loading ? (
              <PageLoader key="loader" />
            ) : (
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
