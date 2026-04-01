import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';
import { supabase } from '../../supabase/client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!supabase) {
      if (email === 'admin@gmail.com' && password === 'admin123') {
        localStorage.setItem('admin_session', 'authenticated');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid local credentials');
      }
      setLoading(false);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
    } else {
      localStorage.setItem('admin_session', 'authenticated');
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4ebd0] px-4 font-body relative overflow-hidden">
      {/* Decorative brutalist shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-brutal-pink rounded-full brutal-border shadow-[4px_4px_0_rgba(0,0,0,1)] animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brutal-yellow brutal-border shadow-[8px_8px_0_rgba(0,0,0,1)] transform rotate-12 hidden md:block"></div>

      <div className="max-w-md w-full bg-white brutal-border shadow-[12px_12px_0_rgba(0,0,0,1)] z-10">
        <div className="bg-brutal-blue border-b-4 border-black p-8 text-center flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-white brutal-border flex items-center justify-center font-display font-bold shadow-[2px_2px_0_rgba(0,0,0,1)]">
            A
          </div>
          <h2 className="text-3xl font-display font-bold text-black uppercase tracking-widest mt-1">Admin</h2>
        </div>
        
        <div className="p-8 md:p-10">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-brutal-red text-white p-4 font-bold text-center brutal-border uppercase text-sm">
                {error}
              </div>
            )}
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase font-display text-black">Email Address</label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-4 stroke-[3]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-[#f4ebd0] brutal-border focus:shadow-brutal transition-shadow text-sm outline-none font-bold"
                  placeholder="admin@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase font-display text-black">Password</label>
              <div className="relative flex items-center">
                <FiLock className="absolute left-4 stroke-[3]" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-[#f4ebd0] brutal-border focus:shadow-brutal transition-shadow text-sm outline-none font-bold"
                  placeholder="admin123"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full brutal-button bg-brutal-green text-black font-display font-bold text-xl py-4 mt-6 tracking-widest uppercase hover:bg-brutal-yellow disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
          
          <div className="mt-8 text-center border-t-4 border-black pt-6">
            <a href="/" className="font-bold uppercase text-xs tracking-widest hover:bg-brutal-pink px-4 py-2 brutal-border inline-flex items-center justify-center gap-2 transition-colors">
              &larr; Return Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
