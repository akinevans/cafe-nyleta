import React from "react";
import Button from "../Button/Button";
import ContactModal from "../ContactModal/ContactModal";

import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className='contact-form-outer-wrapper'>
      <form
        className='contact-form'
        //^ Setup email address
        action='https://formsubmit.co/your@email.com'
        method='POST'
      >
        <h1 className='form-title'>Contact</h1>

        <input
          //
          type='text'
          name='name'
          placeholder='Name*'
          required
        ></input>
        <input
          type='text'
          name='company name'
          placeholder='Company Name*'
          required
        ></input>
        <input
          //
          type='email'
          name='email'
          placeholder='Email*'
          required
        ></input>
        <label for='Service'></label>
        <select className='contact-select' id='service' name='service'>
          <option
            //
            value=''
            disabled
            selected
          >
            Service
          </option>
          <option
            //
            className='option'
            value='Design'
          >
            Design
          </option>
          <option
            //
            className='option'
            value='Sourcing'
          >
            Sourcing
          </option>
          <option
            //
            className='option'
            value='Consulting'
          >
            Consulting
          </option>
          <option
            //
            className='option'
            value='Product Development'
          >
            Product Development
          </option>
          <option
            //
            className='option'
            value='Distribution'
          >
            Distribution
          </option>
        </select>
        <textarea name='message' placeholder='Message*' required></textarea>
        <Button className='btn grey submit' type='submit' title='Submit' />
      </form>
      <ContactModal />
    </div>
  );
}
