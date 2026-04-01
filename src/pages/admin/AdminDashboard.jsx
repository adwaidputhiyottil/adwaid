import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiUser, FiSettings, FiGrid, FiMessageSquare, FiTrash2, FiSend, FiAward } from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  const { 
    profile, updateProfile, 
    skills, addSkill, deleteSkill,
    projects, addProject, deleteProject,
    certificates, addCertificate, deleteCertificate,
    messages, replyToMessage
  } = usePortfolio();

  useEffect(() => {
    if (localStorage.getItem('admin_session') !== 'authenticated') {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-primary-50 flex flex-col md:flex-row text-black font-body">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r-4 border-black flex flex-col shrink-0">
        <div className="p-6 border-b-4 border-black bg-brutal-blue flex items-center gap-4">
          <div className="w-10 h-10 bg-white brutal-border flex items-center justify-center font-display font-bold text-xl shadow-[2px_2px_0_rgba(0,0,0,1)]">
            A
          </div>
          <h1 className="text-xl font-display font-bold tracking-widest text-black">ADMIN</h1>
        </div>
        
        <nav className="flex-grow p-4 space-y-4 font-bold uppercase text-sm">
          <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-4 py-3 brutal-border transition-all ${activeTab === 'profile' ? 'bg-brutal-yellow shadow-[4px_4px_0_rgba(0,0,0,1)] translate-x-1 -translate-y-1' : 'bg-white hover:bg-gray-50'}`}>
            <FiUser size={18} /> Profile
          </button>
          <button onClick={() => setActiveTab('skills')} className={`w-full flex items-center gap-3 px-4 py-3 brutal-border transition-all ${activeTab === 'skills' ? 'bg-brutal-pink shadow-[4px_4px_0_rgba(0,0,0,1)] translate-x-1 -translate-y-1' : 'bg-white hover:bg-gray-50'}`}>
            <FiSettings size={18} /> Skills
          </button>
          <button onClick={() => setActiveTab('projects')} className={`w-full flex items-center gap-3 px-4 py-3 brutal-border transition-all ${activeTab === 'projects' ? 'bg-brutal-green shadow-[4px_4px_0_rgba(0,0,0,1)] translate-x-1 -translate-y-1' : 'bg-white hover:bg-gray-50'}`}>
            <FiGrid size={18} /> Projects
          </button>
          <button onClick={() => setActiveTab('certificates')} className={`w-full flex items-center gap-3 px-4 py-3 brutal-border transition-all ${activeTab === 'certificates' ? 'bg-brutal-pink shadow-[4px_4px_0_rgba(0,0,0,1)] translate-x-1 -translate-y-1' : 'bg-white hover:bg-gray-50'}`}>
            <FiAward size={18} /> Certificates
          </button>
          <button onClick={() => setActiveTab('messages')} className={`w-full flex items-center gap-3 px-4 py-3 brutal-border transition-all ${activeTab === 'messages' ? 'bg-brutal-blue shadow-[4px_4px_0_rgba(0,0,0,1)] translate-x-1 -translate-y-1' : 'bg-white hover:bg-gray-50'}`}>
            <FiMessageSquare size={18} /> Messages
          </button>
        </nav>

        <div className="p-4 border-t-4 border-black">
          <button onClick={() => { localStorage.removeItem('admin_session'); navigate('/admin/login'); }} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brutal-red text-white brutal-border shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold uppercase hover:-translate-y-1 transition-transform">
            <FiLogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 overflow-y-auto w-full bg-[#f4ebd0]">
        <header className="mb-8 flex justify-between items-center bg-white p-6 brutal-border shadow-brutal">
          <h2 className="text-3xl font-display font-bold text-black uppercase">{activeTab}</h2>
          <div className="text-xs font-bold tracking-widest uppercase bg-brutal-yellow brutal-border px-4 py-2 shadow-brutal">
            Local Store
          </div>
        </header>

        {activeTab === 'profile' && <ProfileManager profile={profile} update={updateProfile} />}
        {activeTab === 'skills' && <SkillsManager skills={skills} add={addSkill} remove={deleteSkill} />}
        {activeTab === 'projects' && <ProjectsManager projects={projects} add={addProject} remove={deleteProject} />}
        {activeTab === 'certificates' && <CertificatesManager certificates={certificates} add={addCertificate} remove={deleteCertificate} profile={profile} updateProfile={updateProfile} />}
        {activeTab === 'messages' && <MessagesManager messages={messages} reply={replyToMessage} />}
      </main>
    </div>
  );
};

// --- Sub Comps ---

const ProfileManager = ({ profile, update }) => {
  const [form, setForm] = useState(profile);
  const [status, setStatus] = useState('');
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    update(form); 
    setStatus('PROFILE UPDATED!');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white brutal-border p-6 md:p-8 shadow-brutal flex flex-col gap-6 max-w-2xl relative">
      {status && (
        <div className="absolute top-[-10px] right-[-10px] bg-brutal-green text-white brutal-border px-4 py-2 font-display font-bold uppercase shadow-[4px_4px_0_rgba(0,0,0,1)] animate-pulse z-10">
          {status}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label className="font-display font-bold uppercase">Name</label>
        <input type="text" className="brutal-border p-3 w-full" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-display font-bold uppercase">Job Title</label>
        <input type="text" className="brutal-border p-3 w-full" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-display font-bold uppercase">Hero Bio</label>
        <textarea rows="3" className="brutal-border p-3 w-full" value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-display font-bold uppercase">About Me (Yellow Box)</label>
        <textarea rows="4" className="brutal-border p-3 w-full" value={form.about || ''} onChange={e => setForm({...form, about: e.target.value})} required />
      </div>
      <button type="submit" className="brutal-button bg-brutal-green py-3 text-lg self-start px-8 mt-2 hover:text-white">SAVE PROFILE</button>
    </form>
  );
};

const SkillsManager = ({ skills, add, remove }) => {
  const [form, setForm] = useState({ name: '', percentage: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    add(form); 
    setForm({name: '', percentage: ''}); 
    setStatus('SKILL ADDED!');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleDelete = (id) => {
    remove(id);
    setStatus('SKILL DELETED!');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 relative">
      {status && (
        <div className="fixed bottom-10 right-10 bg-brutal-blue text-white brutal-border p-4 font-display font-bold uppercase shadow-[8px_8px_0_rgba(0,0,0,1)] animate-bounce z-50">
          {status}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white brutal-border p-6 shadow-brutal flex flex-col gap-4 max-w-md w-full h-fit">
        <h3 className="font-display font-bold text-xl uppercase mb-2">Add Skill</h3>
        <input type="text" placeholder="SKILL NAME (e.g. REACT)" className="brutal-border p-3" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
        <input type="number" placeholder="PERCENTAGE (0-100)" className="brutal-border p-3" value={form.percentage} onChange={e=>setForm({...form, percentage: e.target.value})} min="0" max="100" required />
        <button type="submit" className="brutal-button bg-brutal-yellow py-3 text-black">ADD SKILL</button>
      </form>
      
      <div className="bg-white brutal-border p-6 shadow-brutal flex-grow">
        <h3 className="font-display font-bold text-xl uppercase mb-6">Current Skills</h3>
        <div className="flex flex-col gap-3">
          {skills.map(s => (
            <div key={s.id} className="flex justify-between items-center bg-gray-50 brutal-border p-3">
              <span className="font-bold">{s.name} - {s.percentage}%</span>
              <button onClick={() => handleDelete(s.id)} className="bg-brutal-red text-white p-2 brutal-border hover:-translate-y-1 transition-transform"><FiTrash2 /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsManager = ({ projects, add, remove }) => {
  const { toggleProjectVisibility } = usePortfolio();
  const [form, setForm] = useState({ title: '', description: '', techStack: '', liveUrl: '', githubLink: '' });
  const [status, setStatus] = useState('');
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    add({...form, techStack: form.techStack.split(',').map(s=>s.trim())}); 
    setForm({ title: '', description: '', techStack: '', liveUrl: '', githubLink: '' }); 
    setStatus('PROJECT ADDED!');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleDelete = (id) => {
    remove(id);
    setStatus('PROJECT DELETED!');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleToggle = (id) => {
    toggleProjectVisibility(id);
    setStatus('VISIBILITY CHANGED!');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 relative">
      {status && (
        <div className="fixed bottom-10 right-10 bg-brutal-blue text-white brutal-border p-4 font-display font-bold uppercase shadow-[8px_8px_0_rgba(0,0,0,1)] animate-bounce z-50">
          {status}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white brutal-border p-6 shadow-brutal flex flex-col gap-4 max-w-lg w-full h-fit">
        <h3 className="font-display font-bold text-xl uppercase mb-2">Add Project</h3>
        <input type="text" placeholder="TITLE" className="brutal-border p-3" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} required />
        <textarea placeholder="DESCRIPTION" className="brutal-border p-3" value={form.description} onChange={e=>setForm({...form, description: e.target.value})} required />
        <input type="text" placeholder="TECH STACK (comma separated)" className="brutal-border p-3" value={form.techStack} onChange={e=>setForm({...form, techStack: e.target.value})} required />
        <input type="url" placeholder="LIVE URL (optional)" className="brutal-border p-3" value={form.liveUrl} onChange={e=>setForm({...form, liveUrl: e.target.value})} />
        <input type="url" placeholder="GITHUB LINK (optional)" className="brutal-border p-3" value={form.githubLink} onChange={e=>setForm({...form, githubLink: e.target.value})} />
        <button type="submit" className="brutal-button bg-brutal-blue text-white py-3">ADD PROJECT</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow content-start">
        {projects.map(p => (
          <div key={p.id} className={`brutal-border p-6 shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col ${p.bgColor || 'bg-white'} ${p.hidden ? 'opacity-50' : ''}`}>
            <h4 className="font-display font-bold text-xl mb-2 top-0 uppercase bg-white px-2 border-2 border-black self-start">
              {p.title} {p.hidden && ' (HIDDEN)'}
            </h4>
            <p className="font-bold text-sm mb-4 line-clamp-3 bg-white/80 p-2 border-2 border-black">{p.description}</p>
            <div className="mt-auto flex gap-2">
              <button onClick={() => handleToggle(p.id)} className="bg-brutal-yellow text-black brutal-border px-3 py-2 font-bold uppercase hover:-translate-y-1 transition-all text-xs flex-1">
                {p.hidden ? 'Show' : 'Hide'}
              </button>
              <button onClick={() => handleDelete(p.id)} className="bg-brutal-red text-white brutal-border px-3 py-2 font-bold uppercase hover:-translate-y-1 transition-all text-xs flex-1 flex items-center justify-center gap-1">
                <FiTrash2 /> Del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CertificatesManager = ({ certificates, add, remove, profile, updateProfile }) => {
  const [form, setForm] = useState({ title: '', issuer: '', date: '', link: '', imageUrl: '' });
  const [status, setStatus] = useState('');
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    add(form); 
    setForm({ title: '', issuer: '', date: '', link: '', imageUrl: '' }); 
    setStatus('CERTIFICATE ADDED!');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleDelete = (id) => {
    remove(id);
    setStatus('CERTIFICATE DELETED!');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleToggle = () => {
    updateProfile({show_certificates: !profile.show_certificates});
    setStatus('VISIBILITY CHANGED!');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if(file.size > 2 * 1024 * 1024) {
        alert("Image must be smaller than 2MB for local/database storage!");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-8 relative">
      {status && (
        <div className="fixed bottom-10 right-10 bg-brutal-blue text-white brutal-border p-4 font-display font-bold uppercase shadow-[8px_8px_0_rgba(0,0,0,1)] animate-bounce z-50">
          {status}
        </div>
      )}
      
      {/* Visibility Toggle */}
      <div className="bg-white brutal-border p-6 shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-display font-bold text-xl uppercase">Certificates Section is {profile.show_certificates ? 'ENABLED' : 'DISABLED'}</h3>
          <p className="font-body text-sm font-bold">Show or hide the entire certificates block on your public portfolio.</p>
        </div>
        <button 
          onClick={handleToggle} 
          className={`brutal-button px-6 py-3 uppercase tracking-widest ${profile.show_certificates ? 'bg-brutal-red text-white' : 'bg-brutal-green text-black'}`}
        >
          {profile.show_certificates ? 'Disable Block' : 'Enable Block'}
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        <form onSubmit={handleSubmit} className="bg-white brutal-border p-6 shadow-brutal flex flex-col gap-4 max-w-lg w-full h-fit">
          <h3 className="font-display font-bold text-xl uppercase mb-2">Add Certificate</h3>
          <input type="text" placeholder="TITLE (e.g. AWS Cloud Practitioner)" className="brutal-border p-3" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} required />
          <input type="text" placeholder="ISSUER (e.g. Amazon)" className="brutal-border p-3" value={form.issuer} onChange={e=>setForm({...form, issuer: e.target.value})} required />
          <input type="text" placeholder="DATE (e.g. Jan 2026)" className="brutal-border p-3" value={form.date} onChange={e=>setForm({...form, date: e.target.value})} required />
          <input type="url" placeholder="CREDENTIAL LINK (Optional)" className="brutal-border p-3" value={form.link} onChange={e=>setForm({...form, link: e.target.value})} />
          
          <div className="flex gap-2">
            <input type="url" placeholder="IMAGE URL (Link to image)" className="brutal-border p-3 flex-grow" value={form.imageUrl} onChange={e=>setForm({...form, imageUrl: e.target.value})} />
            <span className="flex items-center justify-center font-bold px-2">OR</span>
            <label className="brutal-border bg-brutal-yellow p-3 cursor-pointer hover:bg-black hover:text-white transition-colors flex items-center justify-center font-bold uppercase text-xs">
              BROWSE
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>
          {form.imageUrl && <div className="h-20 w-full overflow-hidden border-2 border-black"><img src={form.imageUrl} alt="preview" className="w-full h-full object-cover" /></div>}

          <button type="submit" className="brutal-button bg-brutal-pink py-3 text-black">ADD CERTIFICATE</button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow content-start">
          {certificates.map(c => (
            <div key={c.id} className="brutal-border p-6 shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col bg-white">
              <h4 className="font-display font-bold text-lg mb-2 top-0 uppercase bg-brutal-yellow px-2 border-2 border-black self-start">
                {c.title}
              </h4>
              {c.imageUrl && <img src={c.imageUrl} alt={c.title} className="w-full h-24 object-cover border-2 border-black mb-2" />}
              <p className="font-bold text-sm mb-4 mt-2">Issuer: {c.issuer} <br/> Date: {c.date}</p>
              <div className="mt-auto flex gap-2">
                <button onClick={() => handleDelete(c.id)} className="bg-brutal-red text-white brutal-border px-3 py-2 font-bold uppercase hover:-translate-y-1 transition-all text-xs flex-1 flex items-center justify-center gap-1">
                  <FiTrash2 /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MessagesManager = ({ messages, reply }) => {
  const [replyOpen, setReplyOpen] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [status, setStatus] = useState('');

  const handleReplySubmit = (e, id) => {
    e.preventDefault();
    reply(id, replyText);
    setReplyOpen(null);
    setReplyText('');
    setStatus('MOCK REPLY SENT!');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl relative">
      {status && (
        <div className="fixed bottom-10 right-10 bg-brutal-blue text-white brutal-border p-4 font-display font-bold uppercase shadow-[8px_8px_0_rgba(0,0,0,1)] animate-bounce z-50">
          {status}
        </div>
      )}
      {messages.length === 0 ? (
        <div className="bg-white brutal-border p-8 text-center shadow-brutal font-bold text-xl uppercase">No messages yet.</div>
      ) : messages.map(msg => (
        <div key={msg.id} className="bg-white brutal-border p-6 shadow-brutal flex flex-col gap-4">
          <div className="flex justify-between items-start border-b-4 border-black pb-4">
            <div>
              <h4 className="font-display font-bold text-xl uppercase text-brutal-blue">{msg.name}</h4>
              <p className="font-bold text-sm bg-brutal-yellow inline-block px-2 border-2 border-black mt-1">{msg.email}</p>
            </div>
            {msg.replied && <span className="bg-brutal-green text-white font-bold px-3 py-1 brutal-border uppercase text-xs">Replied</span>}
            {!msg.replied && <span className="bg-brutal-red text-white font-bold px-3 py-1 brutal-border uppercase text-xs">New</span>}
          </div>
          <p className="font-bold text-lg">{msg.message}</p>
          
          {!msg.replied && replyOpen !== msg.id && (
            <button onClick={() => setReplyOpen(msg.id)} className="mt-4 self-start bg-black text-white brutal-border px-6 py-2 font-bold uppercase flex items-center gap-2 hover:bg-brutal-yellow hover:text-black transition-colors">
              <FiSend /> Reply
            </button>
          )}

          {replyOpen === msg.id && (
            <form onSubmit={(e) => handleReplySubmit(e, msg.id)} className="mt-4 flex flex-col gap-3 bg-gray-50 p-4 brutal-border">
              <label className="font-bold uppercase text-sm text-brutal-blue">Draft Reply to {msg.name}</label>
              <textarea autoFocus required rows="3" className="brutal-border p-3" placeholder="Type your reply..." value={replyText} onChange={e=>setReplyText(e.target.value)}></textarea>
              <div className="flex gap-4 mt-2">
                <button type="submit" className="brutal-button bg-brutal-green px-6 py-2">SEND REPLY</button>
                <button type="button" onClick={() => setReplyOpen(null)} className="brutal-button bg-white px-6 py-2">CANCEL</button>
              </div>
            </form>
          )}

          {msg.replied && (
            <div className="mt-4 bg-gray-100 p-4 border-l-4 border-black font-body text-sm font-bold opacity-80">
              <span className="text-brutal-green block mb-2 uppercase text-xs tracking-widest">Your Reply:</span>
              {msg.replyText}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
