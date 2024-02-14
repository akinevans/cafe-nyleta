import React from "react";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactModal from "../components/Modals/ContactModal/ContactModal";
import "./page_styling/Contact/Contact.css";

export default function Contact() {
  // scroll to the top of the page on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='contact-page-wrapper'>
      <ContactForm />
      {/* Utility classes for contact modal are located in ContactModal.scss */}

      {/* Build logic to show / hide. Will be tricky with form submit */}
      <ContactModal className='contact-modal hidden' />
    </div>
  );
}
