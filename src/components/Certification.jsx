import React from 'react';
import certificateImage from '../assets/images/certificate1.jpg';
import certificateImage2 from '../assets/images/certificate6.jpeg';
import certificateImage3 from '../assets/images/certificate2.jpg';
import certificateImage4 from '../assets/images/certificate4.png';
import certificateImage5 from '../assets/images/certificate5.png';
const Certification = () => {
  const certificates = [
    {
      title: 'Full Stack Developer Certificate',
      organization: 'Bharat Internship',
      year: '2024',
      image: certificateImage,
    },
    {
      title: 'Web Development with Python',
      organization: 'Froyo Technologies Pvt. Ltd.',
      year: '2023',
      image: certificateImage2,
    },
    {
      title: 'Summer Internship - Web Development',
      organization: 'Coding Blocks',
      year: '2024',
      image: certificateImage3,
    },
    {
      title: 'JavaScript Intermediate',
      organization: 'Sololearn',
      year: '2023',
      image: certificateImage4,
    },
    {
      title: 'Web Development',
      organization: 'Sololearn',
      year: '2023',
      image: certificateImage5,
    },
    // {
    //   title: 'JavaScript Mastery',
    //   organization: 'freeCodeCamp',
    //   year: '2024',
    //   image: '../src/assets/images/certificate6.jpeg',
    // },
  ];

  return (
    <section id="certifications" className="py-16 bg-black/40 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-8">
          Certifications <span className="text-emerald-300">Achieved</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="w-full h-[250px] object-cover rounded-t-lg" // Increased size here
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-emerald-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-white/70">{cert.organization}</p>
                <span className="text-xs text-emerald-400">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
