import React from 'react';
import './AboutPage.css';

function AboutPage() {
  const experiences = [
    { year: '2020', description: 'Started as a freelance graphic designer on Fiverr.' },
    { year: '2021', description: 'Worked as a freelancer on Upwork, delivering creative designs.' },
    { year: '2022', description: 'Joined Loons Lab as a front-end developer.' },
    { year: '2023', description: 'Gained expertise in ReactJS and UI/UX design.' },
  ];

  return (
    <div className="about-page">
      {/* Left Column: Image */}
      <div className="about-left">
        <img src="https://via.placeholder.com/400" alt="About Me" />
      </div>

      {/* Right Column: Content */}
      <div className="about-right">
        <h1>About Me</h1>
        <p>
          Welcome to my professional journey! I am passionate about UI/UX design and front-end development.
          Over the years, I have gained valuable experience in graphic design, freelancing, and working with dynamic teams.
        </p>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((item, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content"><div className="timeline-image"></div>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
