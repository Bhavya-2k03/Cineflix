import React from 'react'
import './footer.css'
import youtube_icon from "../../assets/youtube_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import x_icon from "../../assets/x.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={x_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help centre</li>
        <li>Media centre</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Gift cards</li>
        <li>Investor relations</li>
        <li>Cookie preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
