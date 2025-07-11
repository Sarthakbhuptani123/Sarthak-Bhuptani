import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="pt-24 px-6 md:px-16 py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8 underline decoration-blue-400">Resume</h2>

      <div className="max-w-4xl mx-auto bg-black p-6 rounded-lg shadow-lg">
        {/* Preview Resume */}
        <div className="w-full aspect-video mb-6">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full border rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition"
          >
            View Full
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
