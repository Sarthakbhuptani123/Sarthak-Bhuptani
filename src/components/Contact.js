import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const socials = [
  {
    name: 'Instagram',
    icon: <FaInstagram className="text-pink-400 text-3xl mb-2" />,
    url: 'https://instagram.com/mr_sarthak001',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-blue-500 text-3xl mb-2" />,
    url: 'https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/',
  },
  {
    name: 'Gmail',
    icon: <FaEnvelope className="text-red-400 text-3xl mb-2" />,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mrsarthak825@gmail.com'
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className="text-sky-400 text-3xl mb-2" />,
    url: 'https://x.com/Sarthak00125445?t=wsrcFnDTVNpoqkKu2XgRsQ&s=09',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="pt-24 px-6 md:px-16 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12 decoration-blue-400">Contact Me</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl text-center shadow-md"
          >
            {social.icon}
            <p className="text-lg font-medium">{social.name}</p>
          </a>
        ))}
      </div>

      {/* Location Section */}
      <div className="mt-12 flex items-center justify-center gap-3 text-gray-300 text-lg">
        <FaMapMarkerAlt className="text-red-400 text-2xl" />
        <p>Gandhinagar, Gujarat, India <br  />Contact Number +91743605929
       </p>
          

      </div>
    </section>
  );
};

export default Contact;
