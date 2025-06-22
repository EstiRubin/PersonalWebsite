import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      icon: GraduationCap,
      title: 'Computer Science Degree',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Focused on software engineering, algorithms, and data structures. Completed projects in various programming languages and frameworks.',
      type: 'degree'
    },
    {
      icon: BookOpen,
      title: 'Full Stack Web Development',
      institution: 'Coding Bootcamp',
      period: '2020',
      description: 'Intensive program covering modern web development technologies including React, Node.js, and database management.',
      type: 'certification'
    },
    {
      icon: Award,
      title: 'JavaScript Certification',
      institution: 'Tech Academy',
      period: '2021',
      description: 'Advanced JavaScript concepts including ES6+, async programming, and modern development patterns.',
      type: 'certification'
    }
  ];

  const onlineCourses = [
    'React Development Fundamentals',
    'Node.js Backend Development',
    'Database Design and Management',
    'Git Version Control',
    'Responsive Web Design',
    'JavaScript ES6+ Features'
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 mb-16">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl ${
                    item.type === 'degree' 
                      ? 'bg-blue-100' 
                      : 'bg-green-100'
                  }`}>
                    <item.icon className={`w-8 h-8 ${
                      item.type === 'degree' 
                        ? 'text-blue-600' 
                        : 'text-green-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <h4 className="text-lg text-blue-600 font-semibold">
                          {item.institution}
                        </h4>
                      </div>
                      <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600">
                Ongoing professional development through online courses and self-study
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {onlineCourses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{course}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Learning Philosophy
              </h4>
              <p className="text-gray-700 leading-relaxed">
                I believe in continuous learning and staying current with emerging technologies. 
                I actively seek opportunities to expand my knowledge through online courses, 
                coding challenges, and hands-on projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;