
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with Animated Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Transforming Ideas into Reality
              </span>
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 leading-relaxed"
          >
            Passionate about building intelligent digital experiences, leveraging AI and modern tech to craft scalable, user-centric solutions.
          </motion.p>

          {/* Social Links with Hover Glow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a 
              href="https://github.com/Hasnulsanna" 
              className="p-3 text-gray-400 hover:text-blue-400 transition-colors hover:scale-110"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/hasnul-sanna-075499273" 
              className="p-3 text-gray-400 hover:text-blue-400 transition-colors hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:hasnulsanna7@gmail.com" 
              className="p-3 text-gray-400 hover:text-blue-400 transition-colors hover:scale-110"
            >
              <Mail className="w-7 h-7" />
            </a>
          </motion.div>

          {/* Call-To-Action Buttons with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-900 hover:text-white hover:scale-105 transition-all"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

