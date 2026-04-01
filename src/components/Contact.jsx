import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-primary-100 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-xl font-bold mb-6">
            @
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Let's Work Together</h2>
          <p className="text-primary-500 font-medium leading-relaxed max-w-sm">
            Have a project in mind or want to explore an opportunity? I am currently available for hiring and eager to tackle new challenges.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full bg-primary-50 p-6 md:p-8 rounded-3xl border border-primary-100">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white border-transparent text-primary-900 text-sm font-medium rounded-2xl focus:ring-2 focus:ring-accent/50 focus:border-accent block w-full px-5 py-4 transition-all shadow-sm"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white border-transparent text-primary-900 text-sm font-medium rounded-2xl focus:ring-2 focus:ring-accent/50 focus:border-accent block w-full px-5 py-4 transition-all shadow-sm"
              placeholder="Email Address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="bg-white border-transparent text-primary-900 text-sm font-medium rounded-2xl focus:ring-2 focus:ring-accent/50 focus:border-accent block w-full px-5 py-4 transition-all shadow-sm resize-none"
              placeholder="Your Message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full flex items-center justify-center gap-2 rounded-2xl bg-primary-900 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-accent focus:outline-none shadow-lg shadow-primary-900/20 hover:shadow-accent/30 disabled:opacity-70"
          >
            {isSubmitting ? 'Sending Request...' : (
              <>Send Message <FiSend size={18} /></>
            )}
          </button>
          
          {submitStatus === 'success' && (
            <p className="text-green-600 text-xs text-center font-bold tracking-widest uppercase mt-4">Message Sent!</p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
