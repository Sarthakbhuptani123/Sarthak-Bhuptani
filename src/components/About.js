import React from 'react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 px-6 md:px-16 py-20 bg-gray-900 text-white"
    >
      <h2
        className="text-4xl font-bold text-center mb-12 decoration-blue-400"
        data-aos="fade-down"
      >
        About Me
      </h2>

      <div
        className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Profile Image – Rounded */}
        <div className="flex-shrink-0" data-aos="zoom-in" data-aos-delay="200">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src={profileImg}
              alt="Sarthak"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div
          className="text-gray-300 text-lg text-center md:text-left leading-relaxed"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <p className="mb-4">
            Hey! I'm Sarthak — a Computer Engineering student with a passion for
            creating meaningful digital experiences through clean code and creative
            design. I enjoy turning complex problems into simple, beautiful, and
            intuitive solutions.
          </p>
          <p>
            Whether it’s crafting frontend UIs with React, automating logic in Python,
            or building responsive layouts with Tailwind CSS, I’m always exploring and
            growing. I'm driven by curiosity, teamwork, and the thrill of solving
            real-world problems through technology.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Bachelor's Degree */}
        <div
          className="bg-black border border-blue-400 p-6 rounded-xl shadow-lg text-center"
          data-aos="flip-left"
          data-aos-delay="500"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">
            🎓 B.E. – Computer Engineering
          </h3>
          <p className="text-gray-300">
            LDRP Institute of Technology and Research, Gandhinagar
          </p>
          <p className="text-gray-500">Final Year (2025)</p>
        </div>

        {/* Diploma */}
        <div
          className="bg-black border border-green-400 p-6 rounded-xl shadow-lg text-center"
          data-aos="flip-right"
          data-aos-delay="600"
        >
          <h3 className="text-2xl font-semibold text-green-400 mb-2">
            🎓 Diploma – Computer Engineering
          </h3>
          <p className="text-gray-300">
            BBIT Institute of Technology, Vallabh Vidyanagar
          </p>
          <p className="text-gray-400">
            Affiliated to Gujarat Technological University (GTU)
          </p>
          <p className="text-gray-500">Completed: 2023</p>
        </div>
      </div>
    </section>
  );
};

export default About;
