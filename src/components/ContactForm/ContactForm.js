import React from "react";
import Button from "../Button/Button";

import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className='contact-form-outer-wrapper'>
      <form
        className='contact-form'
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
          <option value='Design'>Design</option>
          <option value='Sourcing'>Sourcing</option>
          <option value='Consulting'>Consulting</option>
          <option value='Product Development'>Product Development</option>
          <option value='Distribution'>Distribution</option>
        </select>
        <textarea name='message' placeholder='Message*' required></textarea>
        <Button className='btn grey submit' type='submit' title='Submit' />
      </form>
    </div>
  );
}
