import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabase/client';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [profile, setProfile] = useState({ name: 'Loading...', title: '', bio: '', about: '', show_certificates: true });
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackProfile = { 
    name: "ADWAID", 
    title: "WEB DESIGNER & DEVELOPER", 
    bio: "SPECIALIZING IN CREATIVE LANDING PAGES FOR BUSINESSES. PASSSIONATE SOFTWARE DEVELOPER CURRENTLY PURSUING MCA.", 
    about: "I am a passionate developer focused on building intuitive, beautiful, and highly functional web applications.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "admin@gmail.com",
    show_certificates: true
  };

  const isConfigured = !!supabase;

  useEffect(() => {
    if (!isConfigured) {
      console.warn("Supabase credentials not found in .env.local! Falling back to empty/mock local state.");
      setProfile(fallbackProfile);
      setSkills([{ id: 'mock-1', name: 'REACT', percentage: 90 }]);
      setProjects([]);
      setCertificates([{ id: 'mock-c1', title: 'Example Certificate', issuer: 'Meta', date: '2026', link: '#' }]);
      setMessages([]);
      setLoading(false);
      return;
    }
    fetchData();
  }, [isConfigured]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [profRes, skillRes, projRes, msgRes, certRes] = await Promise.all([
        supabase.from('profile').select('*').limit(1).single(),
        supabase.from('skills').select('*').order('created_at', { ascending: true }),
        supabase.from('projects').select('*').order('created_at', { ascending: true }),
        supabase.from('messages').select('*').order('created_at', { ascending: false }),
        supabase.from('certificates').select('*').order('created_at', { ascending: true })
      ]);

      if (profRes.data) setProfile(profRes.data);
      else setProfile(fallbackProfile);
      
      if (skillRes.data) setSkills(skillRes.data);
      if (projRes.data) setProjects(projRes.data);
      if (msgRes.data) setMessages(msgRes.data);
      if (certRes.data) setCertificates(certRes.data);
    } catch (e) {
      console.error("Error fetching data:", e);
      setProfile(fallbackProfile);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updated) => {
    if (isConfigured && profile.id) {
      await supabase.from('profile').update(updated).eq('id', profile.id);
    }
    setProfile({ ...profile, ...updated });
  };

  const addSkill = async (skill) => {
    const newSkill = { ...skill, percentage: parseInt(skill.percentage) || 0 };
    if (isConfigured) {
      const { data } = await supabase.from('skills').insert([newSkill]).select().single();
      if (data) setSkills([...skills, data]);
    } else {
      setSkills([...skills, { ...newSkill, id: Date.now() }]);
    }
  };

  const deleteSkill = async (id) => {
    if (isConfigured) await supabase.from('skills').delete().eq('id', id);
    setSkills(skills.filter(s => s.id !== id));
  };

  const addProject = async (project) => {
    const payload = { ...project, hidden: false };
    if (isConfigured) {
      const { data } = await supabase.from('projects').insert([payload]).select().single();
      if (data) setProjects([...projects, data]);
    } else {
      setProjects([...projects, { ...payload, id: Date.now() }]);
    }
  };

  const deleteProject = async (id) => {
    if (isConfigured) await supabase.from('projects').delete().eq('id', id);
    setProjects(projects.filter(p => p.id !== id));
  };

  const updateProject = async (id, updatedData) => {
    if (isConfigured) {
      await supabase.from('projects').update(updatedData).eq('id', id);
    }
    setProjects(projects.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const toggleProjectVisibility = async (id) => {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    if (isConfigured) await supabase.from('projects').update({ hidden: !project.hidden }).eq('id', id);
    setProjects(projects.map(p => p.id === id ? { ...p, hidden: !p.hidden } : p));
  };

  const addMessage = async (message) => {
    const newMsg = { ...message, read: false, replied: false };
    if (isConfigured) {
      const { error } = await supabase.from('messages').insert([newMsg]);
      if (error) console.error("Error inserting message:", error);
      // We don't use .select() here because public users only have INSERT permissions, not SELECT.
      // And we don't need to append it to the local state because public users can't see the inbox anyway!
    } else {
      setMessages([{ ...newMsg, id: Date.now() }, ...messages]);
    }
  };

  const replyToMessage = async (id, replyText) => {
    if (isConfigured) {
      await supabase.from('messages').update({ replied: true, replyText, read: true }).eq('id', id);
    }
    setMessages(messages.map(m => m.id === id ? { ...m, replied: true, replyText, read: true } : m));
  };

  const addCertificate = async (cert) => {
    if (isConfigured) {
      const { data } = await supabase.from('certificates').insert([cert]).select().single();
      if (data) setCertificates([...certificates, data]);
    } else {
      setCertificates([...certificates, { ...cert, id: Date.now() }]);
    }
  };

  const deleteCertificate = async (id) => {
    if (isConfigured) await supabase.from('certificates').delete().eq('id', id);
    setCertificates(certificates.filter(c => c.id !== id));
  };

  const updateCertificate = async (id, updatedData) => {
    if (isConfigured) {
      await supabase.from('certificates').update(updatedData).eq('id', id);
    }
    setCertificates(certificates.map(c => c.id === id ? { ...c, ...updatedData } : c));
  };

  return (
    <PortfolioContext.Provider value={{
      profile, updateProfile,
      skills, addSkill, deleteSkill,
      projects, addProject, deleteProject, updateProject, toggleProjectVisibility,
      certificates, addCertificate, deleteCertificate, updateCertificate,
      messages, addMessage, replyToMessage,
      loading
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
