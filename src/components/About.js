import React from 'react';

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <img src={require('../assets/fight.jpg')} />
      </div>
      <div className="about-info">
        <div className="about-cost">
          <div className="cost-info">
            <h1>$30</h1>
            <div>1 division</div>
          </div>
          <div className="cost-info">
            <h1>$15</h1>
            <div>each additional division</div>
          </div>
          <div className="cost-info">
            <h1>10:00 AM</h1>
            <div>start time</div>
          </div>
      </div>
      <div className="about-styles">
          <div className="style-icon">
            <img src={require('../assets/knife-vs-stick.jpg')} />
            <div>padded sticks</div>
          </div>
          <div className="style-icon">
            <img src={require('../assets/knife-vs-stick.jpg')} />
            <div>knife fighting</div>
          </div>
      </div>
      <div className="about-styles">
          <div className="style-icon">
            <img src={require('../assets/knife-vs-stick.jpg')} />
            <div>forms</div>
          </div>
          <div className="style-icon">
            <img src={require('../assets/knife-vs-stick.jpg')} />
            <div>single & double sticks</div>
          </div>
        </div>
      </div>
    </div>
  )
}
