import React from 'react';

const Contact = () => {

  return (
    <div className="contact" id="contact">
      <h1 className="contact-header">Contact Us</h1>
      <div className="contact-info">
        <div className="address-container">
          <div className="address">
          <h2>MODERN FIGHTING CONCEPTS</h2>
          <p>126 New Jersey Ave</p>
          <p>Absecon, NJ 08201</p>
          <p>609-646-2113</p>
          </div>
          <div className="contact-social">
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
          <div className="contact-footer">
            <div style={{ marginBottom: '10px' }}>copyright 2019 modern fighting concepts & jeremy parker</div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          </div>
        </div>
        <div className="contact-img">
          <img src={require('../assets/contact.jpg')} />
        </div>
      </div>
      </div>
  )
}

export default Contact
