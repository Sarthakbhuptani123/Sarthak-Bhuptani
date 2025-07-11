import React from 'react';

const projects = [
  {
    title: 'Stock Navigator',
    desc: 'A stock prediction tool using machine learning that shows live stock graphs and future trends.',
    stack: 'Python, Django, scikit-learn, Plotly',
    color: 'text-blue-400',
  },
  {
    title: 'News App',
    desc: 'A React app that shows live news from different categories using NewsAPI.',
    stack: 'React.js, Bootstrap, API integration',
    color: 'text-green-400',
  },
  {
    title: 'Voice Assistant',
    desc: 'Desktop assistant built with Python that responds to voice commands like weather, search, and jokes.',
    stack: 'Python, pyttsx3, speechRecognition',
    color: 'text-yellow-400',
  },
  {
    title: 'Library Management System',
    desc: 'A web app to manage books, students, and book issuing built using PHP and MySQL.',
    stack: 'PHP, MySQL, HTML, CSS',
    color: 'text-red-400',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-24 px-6 md:px-16 py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 decoration-pink-400">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-black border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition duration-300"
          >
            <h3 className={`text-2xl font-semibold mb-2 ${proj.color}`}>{proj.title}</h3>
            <p className="text-gray-300 mb-4">{proj.desc}</p>
            <p className="text-sm text-gray-500 mb-4">Built with: {proj.stack}</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white text-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Sarthakbhuptani123"
                className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800 text-white text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
