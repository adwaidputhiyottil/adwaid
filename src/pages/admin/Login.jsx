import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    // Hardcoded Local Authentication
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('admin_session', 'authenticated');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-primary-100">
        <div className="bg-primary-900 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
          <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Admin Portal</h2>
          <p className="text-primary-300 text-sm relative z-10">Sign in to manage your portfolio</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100 font-medium text-center">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-900 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary-400">
                  <FiMail />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-primary-50 border border-primary-200 rounded-xl focus:ring-accent focus:border-accent transition-all text-sm outline-none hover:border-primary-300"
                  placeholder="admin@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-900 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary-400">
                  <FiLock />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-primary-50 border border-primary-200 rounded-xl focus:ring-accent focus:border-accent transition-all text-sm outline-none hover:border-primary-300"
                  placeholder="admin123"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-900 hover:bg-accent text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-primary-900/10 hover:shadow-accent/20"
            >
              Sign In to Dashboard
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm">
            <a href="/" className="text-primary-500 hover:text-accent font-medium transition-colors">
              &larr; Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
