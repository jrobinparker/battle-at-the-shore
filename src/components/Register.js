import React from 'react'

export default function Register() {
  return (
    <div className="register">
      <h1>Register for Battle at the Shore 2020</h1>
      <div className="register-select">
        <div className="register-info">
          <h2>Competitor Registration</h2>
          <h3>Registration opens in May 2020</h3>
          <p>Registration for one division costs $30</p>
          <p>Each additional division costs $15</p>
          <div className="reg-button">
            Register as a Competitor
          </div>
        </div>
        <div className="register-info">
          <h2>Volunteer Registration</h2>
          <h3>Registration opens in May 2020</h3>
          <p>No spectactor fee</p>
          <p>Training will be provided and attendance at the meeting is required.</p>
          <div className="reg-button">
            Register as a Volunteer
          </div>
        </div>
      </div>
    </div>
  )
}
