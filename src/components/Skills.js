import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <h3
          className="text-4xl font-extrabold text-teal-400 mb-12 text-center"
          data-aos="fade-down"
        >
          My Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xl font-bold text-indigo-400 mb-2">Programming Languages</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Python</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>HTML, CSS</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-bold text-purple-400 mb-2">Frameworks & Libraries</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>React.js</li>
              <li>Django</li>
              <li>REST API</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Tools & Databases</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Git, GitHub</li>
              <li>VS Code, Netlify</li>
              <li>MySQL, SQLite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
