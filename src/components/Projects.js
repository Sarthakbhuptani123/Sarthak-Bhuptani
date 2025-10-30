import React from 'react';
import stockImg from '../assets/stock.jpg';
import voiceImg from '../assets/voice.jpg';
import libraryImg from '../assets/library.jpg';
import newsImg from '../assets/news.jpg';

const Projects = ({ sectionsRef }) => {
  return (
    <section
      id="projects"
      ref={(el) => {
        if (sectionsRef && sectionsRef.current) {
          sectionsRef.current[2] = el;
        }
      }}
      className="py-20 md:py-28 bg-gray-900"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6">
        <h3
          className="text-4xl font-extrabold text-teal-400 mb-12 text-center"
          data-aos="fade-down"
        >
          My Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Stock Predictor Application',
              desc:
                'ML-based app showing real-time stock price updates and forecasting future trends using historical data.',
              img: stockImg,
              delay: '200',
            },
            {
              title: 'Personal Voice Assistant',
              desc:
                'Voice-controlled Python assistant for tasks like weather, jokes, search, and media playback.',
              img: voiceImg,
              delay: '400',
            },
            {
              title: 'Library Management System',
              desc:
                'Web app to manage books, students, issues & returns with real-time search and overdue tracking.',
              img: libraryImg,
              delay: '600',
            },
            {
              title: 'News App',
              desc:
                'Live news app with category-wise filters using NewsAPI and React.js for clean user experience.',
              img: newsImg,
              delay: '800',
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700
                         hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-100 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-base mb-4">{project.desc}</p>
                <a
                  href="https://github.com/Sarthakbhuptani123"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold transition duration-300"
                >
                  View Project In GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
