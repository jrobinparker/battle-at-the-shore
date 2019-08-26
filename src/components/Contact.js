import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class Contact extends React.Component {
  state = {
    visible: false
  }

  render() {
    if (this.state.visible) {
      const address = document.querySelector('.address')
      const social = document.querySelector('.contact-social')
      address.classList.remove('hidden');
      address.classList.add('fade-in-up');
      social.classList.remove('hidden');
      social.classList.add('fade-in-up');
    }

  return (

    <div className="contact" id="contact">
      <h1 className="contact-header">Contact Us</h1>
      <VisibilitySensor
        PartialVisibility
        onChange={isVisible => {
          this.setState({
            visible: isVisible
          })
        }}>
      <div className="contact-info">
        <div className="address-container">
          <div className="address hidden">
          <h2>MODERN FIGHTING CONCEPTS</h2>
          <p>126 New Jersey Ave</p>
          <p>Absecon, NJ 08201</p>
          <p>609-646-2113</p>
          </div>
          <div className="contact-social hidden">
            <a href="http://www.facebook.com/abseconmartialarts/" target="_blank">
              <img src={require('../assets/facebook.svg')} />
            </a>
            <a href="http://mfcmma.com/contact.html" target="_blank">
              <img src={require('../assets/youtube.svg')} />
            </a>
            <a href="http://www.instagram.com/joeparkerjr53" target="_blank">
              <img src={require('../assets/instagram.svg')} />
            </a>
          </div>
        </div>
        <div className="contact-img">
          <img src={require('../assets/contact.jpg')} />
        </div>
      </div>
      </VisibilitySensor>

      </div>
  )
  }
}

export default Contact
