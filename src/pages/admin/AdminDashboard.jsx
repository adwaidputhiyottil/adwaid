import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiSettings, FiGrid, FiMessageSquare } from 'react-icons/fi';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const navigate = useNavigate();

  useEffect(() => {
    // Check Local Storage for session
    const session = localStorage.getItem('admin_session');
    if (session !== 'authenticated') {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('admin_session');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-primary-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-primary-200 flex flex-col shrink-0">
        <div className="p-6 border-b border-primary-100 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-900 flex flex-shrink-0 items-center justify-center text-white font-bold tracking-tighter">
            A.
          </div>
          <h1 className="text-lg font-bold text-primary-900 tracking-wider">PORTFOLIO</h1>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('skills')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'skills' ? 'bg-primary-900 text-white shadow-md' : 'text-primary-600 hover:bg-primary-100'}`}
          >
            <FiSettings size={18} /> Manage Skills
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'projects' ? 'bg-primary-900 text-white shadow-md' : 'text-primary-600 hover:bg-primary-100'}`}
          >
            <FiGrid size={18} /> Manage Projects
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'messages' ? 'bg-primary-900 text-white shadow-md' : 'text-primary-600 hover:bg-primary-100'}`}
          >
            <FiMessageSquare size={18} /> View Messages
          </button>
        </nav>

        <div className="p-4 border-t border-primary-100">
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl text-sm font-bold hover:bg-red-100 transition-colors"
          >
            <FiLogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto w-full">
        <header className="mb-8 flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-primary-100">
          <h2 className="text-2xl font-bold text-primary-900 capitalize flex items-center gap-3">
             <div className="w-2 h-8 bg-accent rounded-full"></div>
            {activeTab.replace('-', ' ')}
          </h2>
          <div className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
            Local Admin
          </div>
        </header>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary-100 min-h-[60vh] flex flex-col justify-center items-center">
          <div className="w-24 h-24 rounded-full bg-primary-50 flex items-center justify-center mb-6 border border-primary-100 shadow-inner">
            <FiSettings className="text-primary-300 text-4xl animate-spin-slow" />
          </div>
          <h3 className="text-xl font-bold text-primary-900 mb-2">Editor for {activeTab}</h3>
          <p className="text-primary-500 text-center max-w-md">
            This local dashboard uses simple mock state. Any changes made here would update the local JSON/State data directly.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
