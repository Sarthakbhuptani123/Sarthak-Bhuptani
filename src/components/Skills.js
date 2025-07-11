import React from 'react';

function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      color: 'border-blue-500',
    },
    {
      title: 'Backend & DB',
      skills: ['Python', 'PHP', 'MySQL'],
      color: 'border-green-500',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Netlify', 'Firebase'],
      color: 'border-yellow-400',
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12 decoration-green-400">Skills</h2>

      <div className="grid gap-10 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className={`bg-gray-900 rounded-2xl p-6 border-l-8 ${group.color} shadow-lg hover:shadow-2xl transition duration-300`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-white border border-gray-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
