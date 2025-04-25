

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer Intern',
    company: 'PM Accelerator',
    period: 'April 2025 - Current',
    description: 'Worked as an AI Engineer Intern, developing intelligent applications using LangChain, FastAPI, and vector databases, with a focus on integrating OpenAI and Hugging Face APIs for real-world AI solutions.',
  },
  {
    title: 'System Test Design Intern',
    company: 'Tata Elxsi',
    period: 'March 2024 - July 2024',
    description: 'Worked as a System Test Design Intern for ADAS features, focusing on test planning, designing, and execution for automotive safety and automation systems.',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Null Class Private Limited',
    period: 'May 2023 - June 2023',
    description: 'Worked as a Full Stack Developer intern using the MERN stack, developing and maintaining web applications, and collaborating on both front-end and back-end tasks.',
  }
];

const education = [
  {
    degree: 'Masters in Computer Application',
    institution: 'APJ Abdul Kalam Technological University',
    period: '2022 - 2024',
    description: 'Studying advanced concepts in computer applications, including software engineering, data structures, algorithms, and database management systems.',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Calicut',
    period: '2019 - 2022',
    description: 'Studied core computer science concepts such as programming, data structures, algorithms, and networking, building a strong foundation for software development.',
  },
];

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience-education" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Tab Heading */}
        <div className="flex justify-center space-x-12 mb-12">
          <motion.h2
            onClick={() => setActiveTab('experience')}
            className={`text-3xl font-semibold cursor-pointer transition relative ${
              activeTab === 'experience' ? 'text-blue-400 border-b-4 border-blue-400' : 'text-gray-400'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            Experience
          </motion.h2>
          <motion.h2
            onClick={() => setActiveTab('education')}
            className={`text-3xl font-semibold cursor-pointer transition relative ${
              activeTab === 'education' ? 'text-blue-400 border-b-4 border-blue-400' : 'text-gray-400'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            Education
          </motion.h2>
        </div>

        {/* Content Section with Smooth Toggle Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {activeTab === 'experience'
              ? experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 pb-12 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute -left-[7px] top-0 h-4 w-4 rounded-full bg-blue-500 p-1"
                      >
                        <Briefcase className="w-2 h-2 text-white" />
                      </motion.div>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0, 132, 255, 0.3)" }} 
                      transition={{ duration: 0.3 }}
                      className="bg-white/10 rounded-lg shadow-md p-6 backdrop-blur-lg hover:shadow-blue-500/50 transition-all"
                    >
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-gray-400 mt-1">{exp.company}</p>
                      <p className="text-sm text-blue-400 mt-1">{exp.period}</p>
                      <p className="text-gray-400 mt-3">{exp.description}</p>
                    </motion.div>
                  </motion.div>
                ))
              : education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 pb-12 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute -left-[7px] top-0 h-4 w-4 rounded-full bg-blue-500 p-1"
                      >
                        <GraduationCap className="w-2 h-2 text-white" />
                      </motion.div>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0, 132, 255, 0.3)" }} 
                      transition={{ duration: 0.3 }}
                      className="bg-white/10 rounded-lg shadow-md p-6 backdrop-blur-lg hover:shadow-blue-500/50 transition-all"
                    >
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-gray-400 mt-1">{edu.institution}</p>
                      <p className="text-sm text-blue-400 mt-1">{edu.period}</p>
                      <p className="text-gray-400 mt-3">{edu.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceEducation;
