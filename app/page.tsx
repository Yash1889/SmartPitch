"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const techStack = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  
  useEffect(() => {
    // Initialize visibility
    setIsVisible(true);
    
    // Counter animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const animateNumbers = () => {
    const countElements = document.querySelectorAll('.count-up');
    countElements.forEach((element) => {
      const target = parseInt(element.getAttribute('data-target') || '0');
      const duration = 2000; // 2 seconds
      const stepTime = 50; // Update every 50ms
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target.toString();
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toString();
        }
      }, stepTime);
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#062c43] to-[#054a91] opacity-20"></div>
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1116] via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#62C494]">Smart</span>Pitch
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The AI Fundraising Assistant for Modern Founders
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/generate-pitch" className="bg-[#62C494] hover:bg-[#4AD39C] text-[#0f1116] font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105">
                Generate Your Pitch
              </Link>
              <Link href="/match" className="bg-transparent hover:bg-white/10 text-white border-2 border-white py-4 px-8 rounded-lg transition-all transform hover:scale-105">
                Find Investors
              </Link>
            </motion.div>
            
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From Match to Pitch — All Handled Intelligently
            </motion.p>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#0f1116] to-[#181c20]" ref={statsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#1f2229] p-6 rounded-xl transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#62C494] mb-2 count-up" data-target="500">0</div>
              <div className="text-gray-400">Active Investors</div>
            </div>
            <div className="bg-[#1f2229] p-6 rounded-xl transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#62C494] mb-2 count-up" data-target="95">0</div>
              <div className="text-gray-400">Match Accuracy %</div>
            </div>
            <div className="bg-[#1f2229] p-6 rounded-xl transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#62C494] mb-2">2.5x</div>
              <div className="text-gray-400">Response Rate</div>
            </div>
            <div className="bg-[#1f2229] p-6 rounded-xl transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#62C494] mb-2">24h</div>
              <div className="text-gray-400">Avg. Response</div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 uppercase tracking-wider">TRUSTED BY LEADING VENTURE CAPITAL FIRMS</p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-[#0f1116]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why founders choose SmartPitch</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered platform streamlines your fundraising process with intelligent features
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-[#181c20] to-[#1f2229] p-8 rounded-2xl shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={fadeIn}
            >
              <div className="bg-[#62C494]/20 p-3 rounded-xl inline-block mb-6">
                <svg className="w-8 h-8 text-[#62C494]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Investor Matching</h3>
              <p className="text-gray-400">
                Our advanced AI algorithm analyzes investor preferences and startup profiles to create perfect matches.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-[#181c20] to-[#1f2229] p-8 rounded-2xl shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <div className="bg-[#62C494]/20 p-3 rounded-xl inline-block mb-6">
                <svg className="w-8 h-8 text-[#62C494]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Pitch Generation</h3>
              <p className="text-gray-400">
                Generate personalized, context-aware pitches that resonate with each investor's interests and portfolio.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-[#181c20] to-[#1f2229] p-8 rounded-2xl shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <div className="bg-[#62C494]/20 p-3 rounded-xl inline-block mb-6">
                <svg className="w-8 h-8 text-[#62C494]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Engagement Analytics</h3>
              <p className="text-gray-400">
                Track investor interactions and optimize your outreach strategy with real-time analytics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-[#181c20]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The talented people behind SmartPitch
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div 
              className="bg-[#1f2229] rounded-xl overflow-hidden shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={fadeIn}
            >
              <div className="h-48 bg-gradient-to-r from-[#062c43] to-[#054a91] flex items-center justify-center">
                <div className="w-24 h-24 bg-[#62C494] rounded-full flex items-center justify-center text-3xl font-bold text-white">YG</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Yashraj Gupta</h3>
                <p className="text-[#62C494] mb-4">Founder & CEO</p>
                <p className="text-gray-400 mb-4">
                  Leading innovation at the intersection of AI and fundraising.
                </p>
                <a 
                  href="https://github.com/Yash1889" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#62C494] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-[#1f2229] rounded-xl overflow-hidden shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <div className="h-48 bg-gradient-to-r from-[#062c43] to-[#054a91] flex items-center justify-center">
                <div className="w-24 h-24 bg-[#62C494] rounded-full flex items-center justify-center text-3xl font-bold text-white">YS</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Yashpratap Singh</h3>
                <p className="text-[#62C494] mb-4">Frontend Engineer</p>
                <p className="text-gray-400 mb-4">
                  Crafting beautiful user experiences with modern web technologies.
                </p>
                <a 
                  href="https://github.com/Yash1889" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#62C494] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20 bg-[#0f1116]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="bg-[#1f2229] p-6 rounded-xl flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                variants={fadeIn}
              >
                <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4" />
                <p className="font-medium text-center">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#062c43] to-[#054a91]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
            >
              Ready to Transform Your Fundraising Journey?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeIn}
            >
              Join hundreds of founders who are using SmartPitch to connect with their ideal investors and accelerate their fundraising process.
            </motion.p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeIn}
            >
              <Link href="/generate-pitch" className="bg-white hover:bg-gray-100 text-[#062c43] font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 inline-block">
                Try SmartPitch Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
