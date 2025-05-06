
import React from 'react';
import Navbar from '../components_lite/Navbar';
import Footer from '../components_lite/Footer';

const Creator = () => {
  const recruiters = [
    { name: "Google", link: "https://www.google.com" },
    { name: "Microsoft", link: "https://www.microsoft.com" },
    { name: "Infosys", link: "https://www.infosys.com" },
    { name: "TCS", link: "https://www.tcs.com" },
    { name: "Amazon", link: "https://www.amazon.com" },
    { name: "Adobe", link: "https://www.adobe.com" },
    { name: "Wipro", link: "https://www.wipro.com" },
    { name: "Accenture", link: "https://www.accenture.com" },
    { name: "IBM", link: "https://www.ibm.com" },
    { name: "Oracle", link: "https://www.oracle.com" },
    { name: "SAP", link: "https://www.sap.com" },
    { name: "Salesforce", link: "https://www.salesforce.com" }
  ];

  return (
    <div>
      <Navbar />

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-blue-100 to-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome to Our Job Portal</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-4 text-lg leading-relaxed">
          Our Job Portal is a comprehensive recruitment solution designed to connect job seekers and recruiters in a seamless, user-friendly experience. Whether you're a job seeker exploring opportunities or an employer looking to expand your team, we provide the tools necessary for success.
        </p>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
          The portal is built with the latest MERN stack technology, ensuring fast, reliable, and scalable performance. From registration to application tracking, every step of the recruitment process is simplified for both recruiters and job seekers.
        </p>
        <p className="text-gray-700 text-center max-w-3xl mx-auto font-semibold text-md">
          Providing modern tools for the next generation of recruitment.
        </p>
      </div>

      <hr className="border-t border-gray-300 w-full my-8" />

      {/* Features Section */}
      <div className="text-center px-6 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-xl rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Seamless Company Registration</h3>
            <p className="text-gray-600 text-lg">Organizations can create a company profile and start posting job openings within minutes. Simplifying recruitment from the very start.</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Efficient Job Posting</h3>
            <p className="text-gray-600 text-lg">Recruiters can post detailed job descriptions, specify requirements, and begin receiving applications almost instantly.</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Comprehensive Application Management</h3>
            <p className="text-gray-600 text-lg">Track, filter, and manage applications easily. Communicate directly with candidates and move forward with the best fits.</p>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 w-full my-8" />

      {/* Top Recruiters Section */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Recruiters</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {recruiters.map((recruiter, index) => (
            <a
              key={index}
              href={recruiter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-2 text-gray-700 font-medium hover:shadow-lg hover:bg-gray-100 transition duration-200"
            >
              {recruiter.name}
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Creator;
