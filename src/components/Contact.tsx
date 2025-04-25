
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-[#2E3440] rounded-xl shadow-lg hover:shadow-blue-400/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">hasnulsanna7@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">+91 87141 51942</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">Kerala, India</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-[#3B4252] rounded-xl shadow-lg hover:shadow-blue-400/50 transition-all text-center"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out via email or connect with me on LinkedIn and GitHub.
              </p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/Hasnulsanna" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 hover:scale-110 transition-all"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hasnul-sanna-075499273" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 hover:scale-110 transition-all"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a 
                  href="mailto:hasnulsanna7@gmail.com" 
                  className="hover:text-blue-400 hover:scale-110 transition-all"
                >
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">Designed & Built by Hasnul Sanna</p>
          <p className="text-gray-600 text-xs mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
