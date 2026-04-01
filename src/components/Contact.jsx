import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Contact = () => {
  const { addMessage } = usePortfolio();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    addMessage(formData);
    setStatus('SENT!');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="font-display text-3xl md:text-5xl uppercase font-bold mb-4 tracking-tight">Let's build something</h2>
        <p className="font-body font-bold text-lg mb-8 max-w-sm">
          Got a project? I'd love to hear about it. Drop a message below and I will get back to you!
        </p>
        
        <div className="bg-brutal-blue brutal-border p-4 w-fit shadow-[4px_4px_0_rgba(0,0,0,1)] transform -rotate-2">
          <p className="font-display font-bold uppercase animate-pulse">AVAILABLE FOR HIRE</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full lg:w-1/2 flex flex-col gap-4 bg-[#f4ebd0] p-6 lg:p-8 brutal-border shadow-[8px_8px_0_rgba(0,0,0,1)]">
        <div className="flex flex-col">
          <label className="font-display font-bold uppercase text-sm mb-1">Name</label>
          <input
            type="text"
            className="brutal-border p-3 focus:outline-none focus:shadow-brutal bg-white"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label className="font-display font-bold uppercase text-sm mb-1">Email</label>
          <input
            type="email"
            className="brutal-border p-3 focus:outline-none focus:shadow-brutal bg-white"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label className="font-display font-bold uppercase text-sm mb-1">Message</label>
          <textarea
            rows="4"
            className="brutal-border p-3 focus:outline-none focus:shadow-brutal bg-white resize-none"
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="brutal-button bg-brutal-yellow py-4 mt-2 text-lg hover:bg-brutal-red hover:text-white transition-colors"
        >
          {status || 'SEND IT'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
