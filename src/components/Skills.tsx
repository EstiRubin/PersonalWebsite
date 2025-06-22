import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'REST APIs', level: 80 },
        { name: 'Python', level: 65 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'Database Design', level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Linux/Terminal', level: 70 },
        { name: 'Agile/Scrum', level: 75 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Problem Solving', 'Code Review', 'Testing', 'Documentation', 'Team Collaboration', 'Learning Agility', 'Project Management', 'Technical Research'].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;