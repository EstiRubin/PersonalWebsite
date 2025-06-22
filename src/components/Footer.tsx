import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Esti Rubin</h3>
            <p className="text-gray-400">Software Developer & Technology Professional</p>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-gray-400 mb-4">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400 mx-1" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Esti Rubin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;