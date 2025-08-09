'use client';

import Image from 'next/image';
import React from 'react';
import profileImg from '../../public/me.png';
import { useTypewriter } from "./usetypewriter";
import { useState } from 'react';

interface ExperienceData {
  _id: string; 
  position: string;
  company: string;
  description?: string; 
  start_date: string; 
  end_date?: string;   
}

interface ProjectData {
  _id: string; 
  title: string;
  description: string;
  github_link: string;
  image_url?: string;
  tech_stack?: string[];
}

interface SkillsData {
  _id: string;
  skill: string;
  proficiency: string;
}

export default function Hero() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: ''
  });

  const experiences: ExperienceData[] = [
    {
      _id: '1',
      position: 'Artificial Intelligence Intern',
      company: 'Epic Lanka (Pvt) Ltd',
      description: 'Worked with the AI team to build multilingual voice chatbots with web scraping and audio enhancement features.',
      start_date: 'April 2025',
      end_date: 'Present'
    },
    {
      _id: '2',
      position: 'IT Tutor',
      company: 'Freelance',
      description: 'I offer personalized tutoring for Cambridge IT, helping students understand key concepts, improve their skills, and succeed in their exams with confidence.',
      start_date: 'April 2023',
      end_date: 'Present'
    },
    {
      _id: '3',
      position: 'Mathematics Tutor',
      company: 'Third Space Global',
      description: '',
      start_date: 'April 2022',
      end_date: 'May 2023'
    }
  ];
  const projects: ProjectData[] = [
    {
      _id: '1',
      title: 'Multi-Stage-Churn-Prediction-System',
      description: 'A system to predict user churn from a SaaS system. Built using an ensemble model (XGBoost, Random Forest, LSTM). The unlabeled dataset was clustered using kmeans and dbscan. Firebase has been used for the app development.',
      github_link: 'https://github.com/gunarathneamandi/Multi-Stage-Churn-Prediction-System',
      tech_stack: ['XGBoost', 'Random Forest', 'LSTM', 'DBSCAN', 'KMEANS'],
      
    },
    {
      _id: '2',
      title: 'AI/ML based Commit Support System – In Collaboration with 99x ',
      description: 'Build an AI/ML-powered system that uses fine-tuning, dynamic RAG, explainable AI and next-word prediction to generate commit messages aligned with company standards by analyzing code changes, improving traceability and team collaboration.',
      github_link: 'https://github.com/gunarathneamandi/GitCommitAi-vsCodeWebView',
      tech_stack: ['RAG', 'Agents', 'Finetuning', 'LLMs', 'Next-Word Prediction'],
      
    },
    {
      _id: '3',
      title: 'Smart-Sort-AI-Hardware-Project',
      description: 'An automated waste sorting system using AI and machine learning. The project detects and classifies different types of waste through sound analysis and directs them to the correct compartment, making waste management more efficient.',
      github_link: 'https://github.com/gunarathneamandi/Smart-Sort-AI-Hardware-Project',
      tech_stack: ['Arduino', 'Edge Impulse', 'Machine Learning', 'Model Training', 'Noise Reduction', 'C++'],
      
    },
    {
      _id: '4',
      title: 'Itinerary-planning',
      description: 'The itinerary planning site helps you organize your trips from start to finish. You can choose destinations, add activities, arrange them by day, and keep all your travel details in one place. It’s an easy way to make sure your plans are clear and your trip runs smoothly.',
      github_link: 'https://github.com/gunarathneamandi/itinerary-planning',
      tech_stack: ['MongoDB', 'APIs', 'React.js', 'Express.js', 'Node.js'],
      
    },
    {
      _id: '5',
      title: 'C-and-S-Autocare',
      description: 'A fullstack web application developed by a group of 8 members. It is a Vehicle Service Management system that has been developed using MERN stack for a company named C&S Auto Care',
      github_link: 'https://github.com/gunarathneamandi/C-and-S-Autocare',
      tech_stack: ['MongoDB',  'React.js', 'Express.js', 'Node.js'],
      
    }
  ]
  
  
  const skills: SkillsData[] = [
    {
      _id: '1',
      skill: 'Python',
      proficiency: 'Advanced'
    },
    {
      _id: '2',
      skill: 'Machine Learning',
      proficiency: 'Advanced'
    },
    {
      _id: '3',
      skill: 'Deep Learning',
      proficiency: 'Advanced'
    },
    {
      _id: '4',
      skill: 'Natural Language Processing',
      proficiency: 'Advanced'
    },
    {
      _id: '5',
      skill: 'RAG',
      proficiency: 'Advanced'
    },
    {
      _id: '6',
      skill: 'LLMs',
      proficiency: 'Advanced'
    },
    {
      _id: '7',
      skill: 'Web Scraping',
      proficiency: 'Advanced'
    },
    {
      _id: '8',
      skill: 'Audio Processing',
      proficiency: 'Advanced'
    },
    {
      _id: '9',
      skill: 'TensorFlow/PyTorch',
      proficiency: 'Advanced'
    },
    {
      _id: '10',
      skill: 'LangChain',
      proficiency: 'Advanced'
    },
    {
      _id: '11',
      skill: 'Arduino',
      proficiency: 'Advanced'
    },
    {
      _id: '12',
      skill: 'React/Next.js',
      proficiency: 'Intermediate'
    },
    {
      _id: '13',
      skill: 'TypeScript',
      proficiency: 'Intermediate'
    },
    {
      _id: '14',
      skill: 'Node.js',
      proficiency: 'Intermediate'
    },
    {
      _id: '15',
      skill: 'SQL/NoSQL',
      proficiency: 'Intermediate'
    },
    {
      _id: '16',
      skill: 'Git/GitHub',
      proficiency: 'Advanced'
    }
    
    
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.first_name || !form.last_name || !form.email || !form.message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setForm({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
      });
      
      alert("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to send message. Please try again later.");
    }
  };

  
  const name = useTypewriter("  Amandi Gunarathne", 100);

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(108, 99, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(108, 99, 255, 0.6); }
        }
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInScale {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .float { animation: float 6s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .slide-in-up { animation: slideInUp 0.8s ease-out; }
        .fade-in-scale { animation: fadeInScale 0.6s ease-out; }
        .shimmer-text {
          background: linear-gradient(90deg, #6C63FF, #ffffff, #6C63FF);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-bg {
          background: linear-gradient(-45deg, #6C63FF, #4F46E5, #7C3AED, #8B5CF6);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .glass-morphism {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }
        .scale-on-hover:hover {
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        .neon-border {
          box-shadow: 0 0 10px rgba(108, 99, 255, 0.2);
          border: 1px solid rgba(108, 99, 255, 0.15);
        }
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(108, 99, 255, 0.3);
          border-radius: 50%;
          animation: float 12s ease-in-out infinite;
        }
        .particle:nth-child(1) { top: 30%; left: 20%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 70%; left: 80%; animation-delay: 6s; }
      `}</style>

      <section className="relative bg-black text-white min-h-screen overflow-hidden" style={{ backgroundImage: "url('bg3.png')", backgroundSize: 'cover', backgroundAttachment: 'scroll', backgroundPosition: 'top center' }}>
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Reduced to just 2 particles */}
          <div className="particle"></div>
          <div className="particle"></div>
          {/* Much more subtle background circles with lower opacity */}
          <div className="absolute w-[600px] h-[600px] bg-[#6C63FF] opacity-5 rounded-full top-[-150px] left-[-150px] blur-[200px] -z-10" />
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-500 to-purple-600 opacity-6 rounded-full top-[70%] left-[75%] blur-[180px] -z-10" />
        </div>

        {/* Enhanced Navigation - Now Mobile Responsive */}
        <nav className="fixed top-0 left-0 right-0 p-4 flex justify-center md:justify-end md:absolute md:top-6 md:right-10 text-sm z-30 bg-black/30 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            <a href="#about" className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 text-white font-medium text-xs md:text-sm">About me</a>
            <a href="#experience" className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 text-white font-medium text-xs md:text-sm">Experience</a>
            <a href="#skills" className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 text-white font-medium text-xs md:text-sm">Work & Skills</a>
            <a href="#contact" className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 text-white font-medium text-xs md:text-sm">Contact me</a>
          </div>
        </nav>

        {/* Enhanced CV Section - Mobile Responsive */}
        <div className="relative top-24 sm:top-6 left-0 right-0 sm:left-10 z-20 flex justify-center sm:justify-start gap-2 md:gap-4 slide-in-up px-4 sm:px-0">
          <a
            href="/cv.pdf"
            download="Amandi_Gunarathne_CV.pdf"
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#6C63FF] to-[#4F46E5] hover:from-[#5B54D9] hover:to-[#3B82F6] px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white text-sm sm:text-base font-medium transition-all duration-300 shadow-2xl hover:shadow-3xl hover-lift glow neon-border"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 glass-morphism hover:bg-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white text-sm sm:text-base font-medium transition-all duration-300 shadow-2xl hover:shadow-3xl hover-lift neon-border"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View CV
          </a>
        </div>

        {/* Enhanced Content - Mobile Responsive */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-1">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-6 md:space-y-8 w-full md:w-1/2 z-10 slide-in-up mt-8 md:mt-30">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight z-20 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 text-transparent bg-clip-text drop-shadow-lg">{name}</span><span className="animate-pulse text-cyan-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">|</span>
            </h1>
            <div className="mt-8 md:mt-12 grid grid-cols-2 gap-4 md:gap-8 text-center glass-morphism p-4 md:p-8 rounded-2xl shadow-2xl mx-auto md:mx-0 w-fit neon-border hover-lift">
              <div className="fade-in-scale">
                <p className="text-3xl md:text-5xl font-extrabold text-white">1+</p>
                <p className="uppercase text-xs md:text-sm tracking-widest text-gray-300 mt-2">Years Experience</p>
              </div>
              <div className="fade-in-scale" style={{animationDelay: '0.2s'}}>
                <p className="text-3xl md:text-5xl font-extrabold text-white">10+</p>
                <p className="uppercase text-xs md:text-sm tracking-widest text-gray-300 mt-2">Completed Projects</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 slide-in-up" style={{animationDelay: '0.4s'}}>
              <a href="mailto:aygunarathne2002@gmail.com" className="glass-morphism p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 neon-border">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/amandi-gunarathne-901683246/" className="glass-morphism p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 neon-border">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/gunarathneamandi" className="glass-morphism p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 neon-border">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Image - Mobile Responsive */}
          <div className="relative mt-8 md:mt-0 md:w-1/2 z-10 px-4 md:px-0">
            <div className="relative overflow-hidden rounded-3xl max-w-md mx-auto md:max-w-none">
              <Image
                src={profileImg}
                alt="Amandi Gunarathne"
                className="w-full h-auto object-cover scale-on-hover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Professional Description Card - Mobile Responsive */}
            <div className="mt-6 md:mt-8 glass-morphism text-white p-6 md:p-8 rounded-3xl shadow-2xl hover-lift neon-border fade-in-scale mx-auto md:mx-0 max-w-md md:max-w-none" style={{animationDelay: '0.6s'}}>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Professional Overview</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  AI developer specializing in Generative AI, large language models, and predictive analytics with cutting-edge solutions.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
                  <span className="bg-gradient-to-r from-[#6C63FF] to-[#4F46E5] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">AI/ML</span>
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">Deep Learning</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">NLP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Education Section */}
        <section className="w-full py-20 px-6 max-w-7xl mx-auto z-10">
          <h2 className="text-6xl md:text-7xl font-extrabold text-center mb-20 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 text-transparent bg-clip-text">Education</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-morphism p-10 rounded-3xl text-white shadow-2xl hover-lift neon-border scale-on-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#4F46E5] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">BSc(hons) in Artificial Intelligence</h3>
              </div>
              <p className="text-2xl text-cyan-400 mb-4 font-semibold">University Of Moratuwa</p>
              <p className="text-gray-300 text-lg">2023 - Present</p>
              <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">Progress: 75%</p>
            </div>
            <div className="glass-morphism p-10 rounded-3xl text-white shadow-2xl hover-lift neon-border scale-on-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">HND in Information Technology</h3>
              </div>
              <p className="text-2xl text-purple-400 mb-4 font-semibold">SLIIT</p>
              <p className="text-gray-300 text-lg">2021 - 2023</p>
              <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full"></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">Completed: 100%</p>
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="w-full py-20 px-6 max-w-7xl mx-auto z-10">
          <h2 className="text-6xl md:text-7xl font-extrabold text-center mb-20 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 text-transparent bg-clip-text">My Working Experience</span>
          </h2>
          <div className="relative flex flex-col items-start w-full">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-[30px] md:left-[50%] transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 z-0 rounded-full"></div>

            {experiences.length === 0 && (
              <p className="text-center text-gray-400 w-full glass-morphism p-8 rounded-xl">No experiences found.</p>
            )}

            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0; 
              const startDate = exp.start_date || 'Unknown Start Date'; 
              const endDate = exp.end_date || 'Present'; 
              const dateRange = `${startDate} - ${endDate}`;

              return (
                <div
                  key={exp._id}
                  className={`relative mb-16 w-full md:w-1/2 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:ml-auto'
                  } slide-in-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`glass-morphism p-8 rounded-3xl shadow-2xl hover-lift neon-border scale-on-hover`}>
                    <div className={`flex items-center mb-6 ${isEven ? 'md:justify-end' : ''}`}>
                      {/* Enhanced Timeline Dot */}
                      <div
                        className={`absolute w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 glow ${
                          isEven ? 'left-[27px] md:left-auto md:right-0 md:transform md:translate-x-1/2' : 'left-[27px] md:left-0 md:transform md:-translate-x-1/2'
                        }`}
                      ></div>
                      <h3 className={`text-2xl font-bold text-white ${isEven ? 'ml-12 md:ml-0 md:mr-12' : 'ml-12'}`}>
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-cyan-400 ml-12 md:ml-0 md:mr-12 font-semibold text-lg mb-2">
                      {dateRange}
                    </p>
                    <p className="text-xl text-purple-300 mt-2 ml-12 md:ml-0 md:mr-12 font-medium">
                      {exp.position}
                    </p>
                    {exp.description && (
                      <p className="text-gray-300 mt-4 ml-12 md:ml-0 md:mr-12 leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="w-full py-20 px-6 max-w-7xl mx-auto z-10">
          <h2 className="text-6xl md:text-7xl font-extrabold text-center mb-20 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 text-transparent bg-clip-text">My Work</span>
          </h2>
          {projects.length === 0 && (
            <p className="text-center text-gray-400 w-full glass-morphism p-8 rounded-xl">No projects found.</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={project._id} className="glass-morphism p-8 rounded-3xl shadow-2xl text-white hover-lift neon-border scale-on-hover slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                {project.image_url && (
                  <div className="w-full h-56 relative mb-6 rounded-2xl overflow-hidden neon-border">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      style={{objectFit: "cover"}}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                      className="scale-on-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">{project.title}</h3>
                <p className="text-gray-300 text-base mb-4 leading-relaxed">{project.description}</p>
                {project.tech_stack && project.tech_stack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech_stack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gradient-to-r from-[#6C63FF] to-[#4F46E5] px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4 mt-6">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover-lift"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="w-full py-20 px-6 max-w-7xl mx-auto z-10">
          <h2 className="text-6xl md:text-7xl font-extrabold text-center mb-20 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 text-transparent bg-clip-text">My Skills</span>
          </h2>
          {skills.length === 0 && (
            <p className="text-center text-gray-400 w-full glass-morphism p-8 rounded-xl">No skills found.</p>
          )}
          <div className="glass-morphism rounded-3xl p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 neon-border">
            {skills.map((skill, index) => (
              <div 
                key={skill._id} 
                className="p-8 text-white text-center glass-morphism rounded-2xl hover-lift scale-on-hover neon-border slide-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">{skill.skill}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="w-full py-20 px-6 max-w-7xl mx-auto relative overflow-hidden text-white">
          {/* Subtle Background Gradient */}
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#6C63FF] to-purple-500 opacity-8 rounded-full blur-[250px] transform -translate-y-1/2 -translate-x-1/2 -z-10" />
          <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-6 rounded-full blur-[200px] transform -translate-y-1/2 translate-x-1/2 -z-10" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
            {/* Enhanced Contact Form */}
            <div className="glass-morphism p-10 rounded-3xl shadow-2xl w-full md:w-1/2 lg:w-2/5 flex flex-col justify-between neon-border hover-lift" style={{ minHeight: '500px' }}>
              <h2 className="text-4xl font-extrabold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Let&apos;s Connect</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.first_name}
                    onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 outline-none focus:border-cyan-400 transition-colors duration-300 text-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 focus-within:w-full"></div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.last_name}
                    onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 outline-none focus:border-cyan-400 transition-colors duration-300 text-lg"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-Mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 outline-none focus:border-cyan-400 transition-colors duration-300 text-lg"
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Write your message here"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 outline-none focus:border-cyan-400 transition-colors duration-300 text-lg resize-y"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 self-start mt-4 shadow-2xl hover:shadow-3xl hover-lift glow neon-border text-lg"
                >
                  Send Message
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Enhanced Right Side Content */}
            <div className="text-left md:w-1/2 lg:w-3/5 md:text-right flex flex-col gap-8 slide-in-up">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-8 shimmer-text">
                Contact 
                <br />
                Me
              </h2>

              {/* Enhanced Contact Details */}
              <div className="flex flex-col gap-6 text-gray-300">
                {/* Location with enhanced styling */}
                <div className="glass-morphism p-4 rounded-2xl hover-lift neon-border">
                  <div className="mb-2">
                    <p className="text-lg font-semibold text-white">Location</p>
                    <p className="text-base text-gray-200">Gampaha, Sri Lanka</p>
                  </div>
                </div>

                {/* Availability with enhanced styling */}
                <div className="glass-morphism p-4 rounded-2xl hover-lift neon-border">
                  <div className="mb-2">
                    <p className="text-lg font-semibold text-white">Availability</p>
                    <p className="text-base text-gray-200">Monday - Friday</p>
                    <p className="text-base text-gray-200">11 AM - 2 PM</p>
                  </div>
                </div>

                {/* Contact Info with enhanced styling */}
                <div className="glass-morphism p-4 rounded-2xl hover-lift neon-border">
                  <div className="mb-2">
                    <p className="text-lg font-semibold text-white">Get in Touch</p>
                  </div>
                  <div>
                    <a href="mailto:aygunarathne2002@gmail.com" className="text-base font-medium text-gray-200 hover:text-white transition-colors duration-300 block mb-2">aygunarathne2002@gmail.com</a>
                    <a href="tel:+94705305328" className="text-base font-medium text-gray-200 hover:text-white transition-colors duration-300">(+94) 70 5305 328</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-12 px-6 border-t border-white/10 glass-morphism">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 text-lg mb-4">© 2024 Amandi Gunarathne. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:aygunarathne2002@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/amandi-gunarathne-901683246/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/gunarathneamandi" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}