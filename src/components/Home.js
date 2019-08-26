import React from 'react';

export default function Home() {
  return (
    <div className="landing" id="home">
      <div className="hero-banner">
        <div className="banner-text">
          <h1 className="title">Battle at the Shore</h1>
          <h2 className="subtitle">Eskrima Invitational</h2>
          <div className="banner-buttons">
            <div
              className="banner-button"
              onClick={() => {
                document.getElementById('about').scrollIntoView({behavior: 'smooth'})
              }}>
                About
            </div>
            <div
              className="banner-button"
              onClick={() => {
                document.getElementById('register').scrollIntoView({behavior: 'smooth'})
              }}>
                Register
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
