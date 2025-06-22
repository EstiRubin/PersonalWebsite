import React from 'react';
import { Code, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code Advocate',
      description: 'Committed to writing maintainable, well-documented code that stands the test of time.'
    },
    {
      icon: Users,
      title: 'Team Collaborator',
      description: 'Experienced in working with cross-functional teams to deliver exceptional products.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and methodologies to stay at the forefront of development.'
    }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Commitment' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I'm a dedicated software developer with a passion for creating efficient, 
              scalable solutions that solve real-world problems. My journey in technology 
              has equipped me with a diverse skill set and a deep understanding of modern 
              development practices.
            </p>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-yellow-500" />
                <h4 className="text-lg font-semibold text-gray-900">Key Strengths</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Problem-solving and analytical thinking</li>
                <li>• Full-stack web development</li>
                <li>• Agile development methodologies</li>
                <li>• Code review and mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;