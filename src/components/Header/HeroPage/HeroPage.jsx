import React from 'react';

import './HeroPage.css';

const HeroPage = () => {
  return (
    <div className="hero-page">
      <div className="hero-content">
        <div className="hero-header">
          <div className="hero-status-container">
            <div className="status-row">
              <div className="online-dot"></div>
              <span className="online-text">Online</span>
              <span className="online-name">KASUN C WIJEBANDARA</span>
            </div>
          </div>
        </div>
        <h1 className="hero-title">Redefining Digital Experiences</h1>
        <p className="hero-subtitle">
          A creative and detail-oriented web designer passionate about crafting engaging and user-friendly digital experiences.
        </p>
        <div className="button-row">
          <button className="hero-button">Get Started</button>
          <button className="hero-button2">Get Started</button>
        </div>
        <div className="categories-row">
          <span className="category">WEB</span>
          <span className="category">SAAS</span>
          <span className="category">SOCIAL</span>
          <span className="category">SEO</span>
          <span className="category">APPS</span>
          <span className="category">NO-CODE</span>
          <span className="category">CMS</span>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
