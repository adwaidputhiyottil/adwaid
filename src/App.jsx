import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import AdminDashboard from './pages/admin/AdminDashboard';
import Login from './pages/admin/Login';
import { PortfolioProvider } from './context/PortfolioContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <PortfolioProvider>
      <Router>
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {!isLoading && (
          <div className="min-h-screen font-body transition-opacity duration-700 animate-fade-in text-black bg-brutal-bg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
            </Routes>
          </div>
        )}
      </Router>
    </PortfolioProvider>
  );
}

export default App;
