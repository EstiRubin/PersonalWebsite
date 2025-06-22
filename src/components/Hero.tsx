import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Esti Rubin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Software Developer & Technology Professional
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Passionate about creating innovative solutions and building meaningful software 
              that makes a difference. Experienced in full-stack development with a focus on 
              user-centered design and clean code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={scrollToAbout}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/EstiRubin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="https://leetcode.com/u/EstiBrandwian/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ExternalLink className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="mailto:estir46200@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600">
                  ER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;