import React from "react";
import "./page_styling/Contact.css";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactModal from "../components/ContactModal/ContactModal";

export default function Contact() {
  return (
    <div className='contact-page-wrapper'>
      <ContactForm />
      {/* Utility classes for contact modal are located in ContactModal.scss */}

      {/* Build logic to show / hide. Will be tricky with form submit */}
      <ContactModal className='contact-modal hidden ' />
    </div>
  );
}
