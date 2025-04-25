
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: 'Medical RAG Chatbot',
    shortDescription: 'A medical chatbot leveraging RAG to answers medical queries.',
    description: ["Built a RAG-based medical chatbot using Google Gemini for domain-specific Q&A.",
      "Integrated LangChain and Pinecone for fast, scalable semantic search.",
      "Deployed via Flask, Docker, and AWS CI/CD with 99.9% uptime."],
    image:"https://media.istockphoto.com/id/2036497686/photo/science-teamwork-and-scientist-with-tablet-in-laboratory-for-communication-pharmaceutical.webp?a=1&b=1&s=612x612&w=0&k=20&c=8-T6YOPGhKpDWmYW36Mgt0Z9PKdU8UkxTC2l1-pRGTU=",
    tags: ["Python","LangChain", "Pinecone", "Google Gemini", "Flask", "Bootstrap", "AWS CI/CD"],
    githubLink: "https://github.com/Hasnulsanna/End-to-end-Medical-Chtabot.git",
  },
  {
    title: 'SourceCodeIQ: GitHub Source Code Analysis Bot',
    shortDescription: 'GitHub analysistool for efficient code analysis and querying.',
    description:["Built a GitHub source code bot using Gemini and LangChain for semantic Q&A.",
      "Leveraged ChromaDB for fast, accurate vector-based code search."
      ,"Deployed with Flask, Bootstrap, Docker, and AWS CI/CD for responsive, open-source querying."],
    image:"https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c291cmNlJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D",
    tags:["Python","LangChain", "Google Gemini", "ChromaDB", "Flask", "Bootstrap"],
    githubLink:"https://github.com/Hasnulsanna/Sorce-code-analysis-GenAI"},
    {
      title:"Multilingual Storytelling Bot",
      shortDescription:"a voice-driven bot that turns multilingual audio into real-time visual stories.",
      description:["Converted multilingual audio to visual stories using Whisper and GPT-3.5.","upported 10+ languages with custom voice and character options.","Full-stack app with ReactJS + Flask, optimized for sub-5s response time."],
      image:"https://media.istockphoto.com/id/2154290495/photo/children-kindergarten-and-reading-together-in-class-childhood-development-and-growth-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=dkqs4LDziNnz8nkOwGFmDNDL7S9TIytGcDVGmPIukIk=",
      tags:["Python","OpenAI","Hugging Face", "LangChain", "ReactJS"],
      githubLink:"https://github.com/Hasnulsanna/Story-Telling-App-React-Python.git"
    },
    {title:"Financial Stock Anslysis Tool",
      shortDescription:"stock analysis tool for single and competitive stock comparisons.",
      description:["Built a stock analysis tool for comparing individual and competitive stock data.",
        "Leveraged Meta Llama model and LlamaIndex with data from MSFT, NVDA, GOOG, META, AAPL, TSM.",
        "Built an interactive UI using Streamlit for user-friendly stock comparisons."],
      image:"https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=IWQzVeh6--ZOe9YxB1-EI1KSWooYTpZS2sqe6Zu6GJM=",tags:["Python","Hugging Face","LlamaIndex","Streamlit","AI"],
      githubLink:"https://github.com/Hasnulsanna/Financial-Stock-Analysis"
    },
  {
    title: 'AI-Driven Content & Sentiment Suite',
    shortDescription: 'AI-powered content generation and analysis.',
    description: [
  'Multi-functional AI suite featuring Text Summarization, Text-to-Image, and Text-to-Speech.',
  'Sentiment analysis to classify emotions and analyze text meaningfully.',
  'Image captioning to generate descriptive insights from images.',
  'Automates content generation and analysis to improve efficiency.'
],
    image:'https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Hugging Face', 'Transformers', 'NLP', 'AI'],
    githubLink: 'https://github.com/Hasnulsanna/Generative-AI',
  },
  {
    title: 'Snake Game using Object Detection',
    shortDescription: 'Classic Snake Game with Computer Vision.',
    description: [
  'Gesture-based gameplay allowing hand movements for control.',
  'Real-time object detection using OpenCV for seamless interactions.',
  'Automated interactions powered by PyAutoGUI for enhanced user experience.',
  'Ensures smooth tracking and control with optimized performance.'
]
,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'OpenCV', 'PyAutoGUI'],
    githubLink: 'https://github.com/Hasnulsanna/Snake_game',
  },
  {
    title:"Weather App",
    shortDescription:"detailed weather data with CRUD operations for saved locations.",
    description:["weather app with search options by city, country, region, pincode, GPS, or landmark.",
      "Integrated Meteostat API and OpenWeather for weather data.",
      "Implemented CRUD operations using FastAPI and ReactJS for saving and managing weather records."],
      image:"https://media.istockphoto.com/id/1325033552/photo/cloudscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=E7vfDzaC5CJEqdMXkLrEoT7yZAQ5j1NUsXZDKNCS-sc=",
      tags:["Python","FastAPI","ReactJS","Meteostat API","OpenWeather"],
    githubLink:"https://github.com/Hasnulsanna/WeatherApp"
  },
  {
    title: 'AI Chatbot',
    shortDescription: 'A chatbot powered by OpenAI LLM with OTP-based authentication for enhanced security.',
    description: [
  'Secure chatbot built with OpenAI LLM and OTP authentication.',
  'Scalable solution for customer support and automated query handling.',
  'Easily integrates with external APIs for enhanced functionalities.'
],
    image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'OpenAI LLM', 'Node.js'],
    githubLink: 'https://github.com/Hasnulsanna/bototp'
  },
  {
    title: 'Customer Relationship Management System',
    shortDescription: 'A comprehensive CRM application to manage customer data and interactions efficiently.',
    description: [
  'Comprehensive CRM system to manage customer interactions and transactions.',
  'Secured and structured data handling using a relational database.',
  'Responsive UI designed with modern styling techniques.',
  'Optimized for efficient customer tracking and business operations.'
],
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Django', 'TailwindCSS', 'PostgreSQL'],
    githubLink: 'https://github.com/Hasnulsanna/CRM.git'
  },
  {
    title: 'Web-Enabled Automated Manufacturing System',
    shortDescription: 'A web application to automate manufacturing workflows with real-time data updates and analytics.',
    description: [
  'Automates manufacturing workflows with a web-based application.',
  'Provides real-time data tracking and reporting for decision-making.',
  'User-friendly interface optimized for seamless factory operations.',
  'Enables process automation for enhanced efficiency and control.'
],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    githubLink: 'https://github.com/Hasnulsanna/employeemanagement'
  },
  {
    title: 'Social Media Platform',
    shortDescription: 'A fully functional social media platform enabling user interaction and real-time updates.',
    description: [
  'Supports user authentication, real-time updates, and interactive features like posts, comments, and likes.',
  'Optimized for seamless user engagement with a modern UI.',
  'Live notifications and updates enhance user interaction.',
  'Designed for accessibility across multiple devices.'
],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/Hasnulsanna/Social-media'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 rounded-xl shadow-lg overflow-hidden cursor-pointer backdrop-blur-lg hover:shadow-blue-500/50 transition-all flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Icon Centered */}
                <div className="flex justify-center mt-auto">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                    <Github className="w-6 h-6 mr-1" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white p-8 rounded-lg max-w-2xl relative shadow-xl w-full mx-4"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-600 hover:text-black">
              <X size={24} />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-60 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              {selectedProject.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{tag}</span>
              ))}
            </div>
            <div className="flex justify-center">
              <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5 mr-1" /> Code
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;