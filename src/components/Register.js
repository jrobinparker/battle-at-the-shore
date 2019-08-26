import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';

class Register extends React.Component {
    state = {
      visible: false
    }

    render() {
      if (this.state.visible) {
        const regInfo = document.querySelector('.competitor');
        const volInfo = document.querySelector('.volunteer');
        regInfo.classList.remove('hidden');
        regInfo.classList.add('fade-in-up');
        volInfo.classList.remove('hidden');
        volInfo.classList.add('fade-in-up');
      }

    return (
        <div className="register" id="register">
          <h1>Register for Battle at the Shore 2020</h1>
          <VisibilitySensor
            PartialVisibility
            onChange={isVisible => {
              this.setState({
                visible: isVisible
              })
            }}>
          <div className="register-select">
            <div className="register-info">
              <div className="competitor hidden">
                <h2>Competitor Registration</h2>
                <h3>Registration opens May 2020</h3>
                <p>Registration for one division costs $30</p>
                <p>Each additional division costs $15</p>
                <button className="reg-button" disabled>
                  Register as a Competitor
                </button>
              </div>
            </div>
            <div className="register-info">
              <div className="volunteer hidden">
                <h2>Volunteer Registration</h2>
                <h3>Registration opens May 2020</h3>
                <p>No spectactor fee</p>
                <p>Training will be provided and attendance at the meeting is required.</p>
                <button className="reg-button" disabled>
                  Register as a Volunteer
                </button>
              </div>
            </div>
          </div>
          </VisibilitySensor>
        </div>
  )
  }
}

export default Register
