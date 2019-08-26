import React from 'react';

export default function Nav() {
  return (
    <nav className="navbar">
        <img src={require('../assets/logo.png')} className="logo" />
        <div
          className="nav-brand"
          onClick={() => {
            document.getElementById('home').scrollIntoView({behavior: 'smooth'})
          }}>
            MFC Battle at the Shore
        </div>
        <div className="nav-links">
          <div
            className="nav-link"
            onClick={() => {
              document.getElementById('about').scrollIntoView({behavior: 'smooth'})
            }}>
              Tournament Info
          </div>
          <div
            className="nav-link"
            onClick={() => {
              document.getElementById('register').scrollIntoView({behavior: 'smooth'})
            }}>
              Registration
          </div>
          <div className="nav-link">Contact</div>
        </div>
    </nav>
  )
}
