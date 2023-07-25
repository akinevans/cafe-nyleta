import React from "react";
import logo from "../../assets/icons/cafe-nyleta-logo.png";
import "./ContactModal.scss";

export default function ContactModal(props) {
  return (
    // Implement utility classes for positioning and visibility based on contact form state
    <div className={`contact-modal-page-wrapper ${props.className}`}>
      <div className={`contact-modal-outer-wrapper ${props.className} `}>
        <div className='contact-form-text-wrapper'>
          <h1>Thank You</h1>
          <p>
            Our team will review your message and get back to you as soon as
            possible. In the meantime, please feel free to explore our website
            and learn more about our products and services.
          </p>
          <img src={logo} alt='cafe nyleta logo' />
        </div>
      </div>
    </div>
  );
}
