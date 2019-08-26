import React from 'react';

export default function Nav() {

  const app = document.body

  function setNavStyle() {
    const scrollPercent = window.scrollY / 1000
    const nav = document.querySelector(".navbar")
    const logo = document.querySelector(".logo")
    if (scrollPercent >= .75) {
      nav.style.backgroundColor = 'rgba(255,255,255,1)';
      nav.style.boxShadow = '0px 0px 21px 0px rgba(10,10,10,.25)';
      nav.style.color = 'black'
    } else {
      nav.style.backgroundColor = `rgba(255,255,255,${scrollPercent})`;
      nav.style.boxShadow = `0px 0px 21px 0px rgba(10,10,10,${scrollPercent})`;
      nav.style.color = 'white'
    }
  }

  app.onscroll = () => {
    setNavStyle()
  }

  return (
    <nav className="navbar">
        <img src={require('../assets/logo-transparent.png')} className="logo" />
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
          <div
            className="nav-link"
            onClick={() => {
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
            }}>
              Contact
          </div>
        </div>
    </nav>
  )
}
