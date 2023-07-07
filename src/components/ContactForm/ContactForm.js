import React from "react";
import Button from "../Button/Button";
import SelectDropdown from "./SelectDropdown/SelectDropdown";

import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className='contact-form-outer-wrapper'>
      <form
        className='contact-form'
        action='https://formsubmit.co/akinevans@gmail.com'
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
        {/* SelectDropdown Component Here */}
        <SelectDropdown />
        <textarea name='message' placeholder='Message*' required></textarea>

        <Button className='btn grey submit' type='submit' title='Submit' />
      </form>
    </div>
  );
}
