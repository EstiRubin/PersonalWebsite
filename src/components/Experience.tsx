import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: '2022 - Present',
      title: 'Software Developer',
      company: 'Tech Solutions Company',
      location: 'Israel',
      description: 'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with product teams to implement new features and improve user experience.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Implemented responsive design across multiple platforms',
        'Led code review processes and mentored junior developers'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB']
    },
    {
      period: '2021 - 2022',
      title: 'Junior Developer',
      company: 'Digital Agency',
      location: 'Israel',
      description: 'Worked on client projects ranging from e-commerce websites to business applications. Gained experience in full-stack development and project management.',
      achievements: [
        'Built responsive websites for 10+ clients',
        'Integrated third-party APIs and payment systems',
        'Participated in agile development processes'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      period: '2020 - 2021',
      title: 'Freelance Developer',
      company: 'Independent',
      location: 'Israel',
      description: 'Provided web development services to small businesses and startups. Managed projects from conception to deployment.',
      achievements: [
        'Delivered 8+ successful projects on time and within budget',
        'Established long-term client relationships',
        'Developed expertise in various CMS platforms'
      ],
      technologies: ['WordPress', 'Shopify', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:text-right mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;