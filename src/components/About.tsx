
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap, BrainCircuit, GitBranch } from 'lucide-react';
import imagePath from '/home/project/src/assets/sanna1.jpg';

// Skills data
const skills = [
  { icon: Code, name: 'Frontend Development', description: 'React.js, Tailwind CSS, HTML, CSS, JavaScript' },
  { icon: Database, name: 'Backend Development', description: 'Node.js, Express.js, Django, PHP' },
  { icon: Globe, name: 'Databases', description: 'MongoDB, MySQL, PostgreSQL, SQLite' },
  { icon: Zap, name: 'Testing & Automation', description: 'Gherkin, BDD, Cucumber, Automated Testing' },
  { icon: BrainCircuit, name: 'Computer Vision & AI', description: 'Python, OpenCV, PyAutoGUI, OpenAI API, GenAI' },
  { icon: GitBranch, name: 'Version Control & Collaboration', description: 'Git, GitHub, Agile Development' } 
     // New Skill Added
];

/*
const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-16"
            >
              {/* Image Section *//*}
              <motion.div
                className="flex-shrink-0 w-full sm:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={imagePath}
                  alt="Portfolio"
                  className="rounded-2xl shadow-2xl w-96 h-96 object-cover transition duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Description Section *//*}
              <motion.div
                className="sm:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
  I am a passionate full-stack developer dedicated to building efficient and impactful 
  digital solutions. I enjoy solving complex problems, collaborating with teams, and 
  continuously learning to stay ahead in the evolving tech landscape. My focus is on 
  delivering clean, maintainable code that enhances user experiences and drives innovation. 
  With a strong foundation in modern development practices, I prioritize scalability and performance. 
  I thrive in fast-paced environments and am always eager to explore new technologies that push boundaries.
</p>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills Section *//*}
      
      <section id="skills" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* 3 skills per row *//*}
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <skill.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold ml-4">{skill.name}</h3>
          </div>
          <p className="text-gray-600">{skill.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </>
  );
};

export default About;
*/
const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-16"
            >
              {/* Image Section with Hover Effect */}
              <motion.div
                className="flex-shrink-0 w-full sm:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={imagePath}
                  alt="Portfolio"
                  className="rounded-2xl shadow-lg w-96 h-96 object-cover transition duration-500 hover:scale-105 hover:shadow-blue-500/50"
                />
              </motion.div>

              {/* Description Section */}
              <motion.div
                className="sm:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    About Me
                  </span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg font-mono tracking-wide leading-relaxed">
  I am a passionate <span className="font-semibold text-white">full-stack developer </span>  
   driven by <span className="font-semibold text-white">solving complex problems</span> and  
  crafting <span className="font-semibold text-white">scalable, efficient solutions</span>.  
  I prioritize <span className="font-semibold text-white">clean, maintainable code</span>,  
  performance, and seamless user experiences.  

  Always eager to learn, I explore <span className="font-semibold text-white">new tools and  
  frameworks</span> that push boundaries. Check out my projects or  
  <span className="font-semibold text-white"> connect with me</span>—I’m open to exciting opportunities!
</p>


              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 132, 255, 0.3)" }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 backdrop-blur-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <skill.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;