import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const mockSkills = [
  { id: 1, name: 'C', percentage: 80 },
  { id: 2, name: 'Java', percentage: 75 },
  { id: 3, name: 'PHP', percentage: 70 },
  { id: 4, name: 'MySQL', percentage: 85 },
  { id: 5, name: 'React.js', percentage: 65 },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(mockSkills);
  }, []);

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-primary-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-xl font-bold">
          {`</>`}
        </div>
        <h2 className="text-2xl font-bold text-primary-900">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((skill, index) => (
          <div key={skill.id} className="w-full group">
            <div className="flex justify-between items-end mb-3">
              <span className="text-base font-bold text-primary-800 transition-colors group-hover:text-accent">{skill.name}</span>
              <span className="text-sm font-bold text-primary-400 group-hover:text-accent transition-colors">{skill.percentage}%</span>
            </div>
            <div className="h-3 w-full bg-primary-50 border border-primary-100 rounded-full overflow-hidden p-0.5">
              <motion.div
                className="h-full bg-accent rounded-full shadow-sm"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
