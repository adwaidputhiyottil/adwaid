import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

const initialProfile = {
  name: "ADWAID",
  title: "WEB DESIGNER & DEVELOPER",
  bio: "SPECIALIZING IN CREATIVE LANDING PAGES FOR BUSINESSES. PASSSIONATE SOFTWARE DEVELOPER CURRENTLY PURSUING MCA.",
  about: "I am a passionate developer focused on building intuitive, beautiful, and highly functional web applications."
};

const initialSkills = [
  { id: 1, name: 'WEB DESIGN', percentage: 90, color: 'bg-[#a3e4d7]' },
  { id: 2, name: 'WEB DEVELOPMENT', percentage: 85, color: 'bg-[#fcf3cf]' },
  { id: 3, name: 'SEO OPTIMIZATION', percentage: 70, color: 'bg-[#f5b7b1]' },
  { id: 4, name: 'UI DESIGN', percentage: 80, color: 'bg-[#aed6f1]' },
  { id: 5, name: 'UX DESIGN', percentage: 75, color: 'bg-[#f5cba7]' },
  { id: 6, name: 'GRAPHIC DESIGN', percentage: 65, color: 'bg-[#edbb99]' }
];

const initialProjects = [
  {
    id: 1,
    title: 'Modern Portfolio',
    description: 'A completely redesigned portfolio with a split-screen desktop layout, seamless animations, and skeleton loading states.',
    techStack: ['React', 'Tailwind', 'Vite'],
    githubLink: '#',
    liveUrl: '#',
    image: null,
    bgColor: 'bg-[#e57373]'
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'A full-stack e-commerce solution with dynamic cart management, user authentication, and seamless checkout experience.',
    techStack: ['React', 'Node', 'MySQL'],
    githubLink: '#',
    liveUrl: '',
    image: null,
    bgColor: 'bg-[#f1c40f]'
  },
  {
    id: 3,
    title: 'Task Manager',
    description: 'A productivity app for organizing daily tasks, featuring drag-and-drop functionality and progress tracking.',
    techStack: ['Java', 'Spring', 'MySQL'],
    githubLink: '#',
    liveUrl: '#',
    image: null,
    bgColor: 'bg-[#4a235a]'
  }
];

export const PortfolioProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('portfolio_profile');
    return saved ? JSON.parse(saved) : initialProfile;
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('portfolio_skills');
    return saved ? JSON.parse(saved) : initialSkills;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('portfolio_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('portfolio_messages');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist State to LocalStorage
  useEffect(() => { localStorage.setItem('portfolio_profile', JSON.stringify(profile)); }, [profile]);
  useEffect(() => { localStorage.setItem('portfolio_skills', JSON.stringify(skills)); }, [skills]);
  useEffect(() => { localStorage.setItem('portfolio_projects', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem('portfolio_messages', JSON.stringify(messages)); }, [messages]);

  // Actions
  const updateProfile = (newProfile) => setProfile({ ...profile, ...newProfile });
  
  const addSkill = (skill) => setSkills([...skills, { ...skill, id: Date.now() }]);
  const updateSkill = (id, updated) => setSkills(skills.map(s => s.id === id ? { ...s, ...updated } : s));
  const deleteSkill = (id) => setSkills(skills.filter(s => s.id !== id));

  const addProject = (project) => setProjects([...projects, { ...project, id: Date.now(), hidden: false }]);
  const updateProject = (id, updated) => setProjects(projects.map(p => p.id === id ? { ...p, ...updated } : p));
  const deleteProject = (id) => setProjects(projects.filter(p => p.id !== id));
  const toggleProjectVisibility = (id) => setProjects(projects.map(p => p.id === id ? { ...p, hidden: !p.hidden } : p));

  const addMessage = (message) => setMessages([{ ...message, id: Date.now(), read: false, replied: false, date: new Date().toISOString() }, ...messages]);
  const markMessageRead = (id) => setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m));
  const replyToMessage = (id, replyText) => setMessages(messages.map(m => m.id === id ? { ...m, replied: true, replyText, read: true } : m));

  return (
    <PortfolioContext.Provider value={{
      profile, updateProfile,
      skills, addSkill, updateSkill, deleteSkill,
      projects, addProject, updateProject, deleteProject, toggleProjectVisibility,
      messages, addMessage, markMessageRead, replyToMessage
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
