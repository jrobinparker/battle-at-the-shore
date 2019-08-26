import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class About extends React.Component {
  state = {
    visible: false
  }

  render() {
    if (this.state.visible) {
      const aboutCost = document.querySelector('.about-cost')
      const aboutStyles = document.querySelectorAll('.about-styles')
      aboutCost.classList.remove('hidden');
      aboutCost.classList.add('fade-in-up');
      aboutStyles.forEach(as => {
        as.classList.remove('hidden');
        as.classList.add('fade-in-up');
      })
    }

  return (
    <VisibilitySensor
      PartialVisibility
      onChange={isVisible => {
        this.setState({
          visible: isVisible
        })
      }}>
    <div className="about" id="about">
      <div className="about-img">
        <img src={require('../assets/fight.jpg')} />
      </div>
      <div className="about-info">
        <div className="about-cost hidden">
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

      <div className="about-styles hidden">
          <div className="style-icon">
            <img src={require('../assets/padded-fighter.svg')} />
            <div>padded sticks</div>
          </div>
          <div className="style-icon">
            <img src={require('../assets/knives.svg')} />
            <div>knife fighting</div>
          </div>
      </div>
      <div className="about-styles hidden">
          <div className="style-icon">
            <img src={require('../assets/forms.svg')} />
            <div>forms</div>
          </div>
          <div className="style-icon">
            <img src={require('../assets/toya.svg')} />
            <div>single & double sticks</div>
          </div>
      </div>

      </div>
    </div>
    </VisibilitySensor>
  )
  }
}

export default About
