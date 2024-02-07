import React from "react";
import Button from "../Button/Button";
import SelectDropdown from "./SelectDropdown/SelectDropdown";

import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className='contact-form-outer-wrapper'>
      <form
        className='contact-form'
        action='https://formsubmit.co/dc734c4144a39d0767d0d689469a0ea1'
        method='POST'
      >
        <h1 className='form-title'>Contact</h1>

        <input
          type='text'
          name='name'
          placeholder='Name*'
          htmlFor='name'
          required
        ></input>

        <input
          type='text'
          name='company name'
          placeholder='Company Name*'
          htmlFor='company name'
          required
        ></input>
        <input
          type='email'
          name='email'
          placeholder='Email*'
          htmlFor='email'
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
