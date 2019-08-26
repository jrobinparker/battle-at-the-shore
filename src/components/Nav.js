import React from 'react';

export default function Nav() {
  return (
    <nav class="navbar">
        <img src={require('../assets/logo.png')} class="logo" />
        <a href="#" class="nav-brand">MFC Battle at the Shore</a>
        <div class="nav-links">
          <div href="#">Tournament Info</div>
          <div href="#">Registration</div>
          <div href="#">Contact</div>
        </div>
    </nav>
  )
}
