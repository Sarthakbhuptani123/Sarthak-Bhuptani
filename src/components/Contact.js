import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = ({ sectionsRef }) => {
  return (
    <>
      <section
        id="contact"
        ref={(el) => {
          if (sectionsRef && sectionsRef.current) {
            sectionsRef.current[3] = el;
          }
        }}
        className="py-20 md:py-28 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 text-center">
          <h3
            className="text-4xl font-extrabold text-teal-400 mb-12"
            data-aos="fade-down"
          >
            Get In Touch
          </h3>
          <p
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Have a question, a project idea, or just want to connect? Feel free
            to reach out! I'm always open to new opportunities and
            collaborations.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mrsarthak825@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-gray-900 hover:bg-teal-400 font-bold py-3 px-10 rounded-full shadow-xl
             transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Email Me
          </a>

          {/* Add this below button to show email directly */}
          <p className="mt-4 text-gray-400 text-lg">
            📧 mrsarthak825@gmail.com
          </p>
          <p className="mt-1 text-gray-400 text-lg">
            📞{" "}
            <a
              href="tel:+919876543210"
              className="underline hover:text-teal-400"
            >
              +91 7436059291
            </a>
          </p>

          <div
            className="mt-12 flex justify-center space-x-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* GitHub Icon */}
            <a
              href="https://github.com/Sarthakbhuptani123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 shadow-lg
                         text-gray-300 hover:text-teal-400 transition duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <svg
                xmlns="https://github.com/sarthakbhuptani"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c2.5 0 5-1.2 5-5.5A4.3 4.3 0 0 0 16 6.5c.5-1.7-.3-3.5-1.5-4C14.7 2.5 13 2 12 2c-1 0-2.7.5-3.5 1.5-.8 1-1.2 2.7-1.5 4A4.3 4.3 0 0 0 4 10.8c0 4.3 2.5 5.5 5 5.5-.3.2-.6.5-.8.8a4.8 4.8 0 0 0-1 3.2v4" />
                <path d="M12 2v10" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 shadow-lg
                         text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center">
        <div className="container mx-auto px-6">
          <p>
            &copy; {new Date().getFullYear()} Sarthak Bhuptani. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
