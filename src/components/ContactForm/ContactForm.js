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

        <label htmlFor='name' className='label'>
          Name
        </label>
        <input
          type='text'
          name='name'
          placeholder='Name*'
          id='name'
          htmlFor='name'
          required
        ></input>

        <label htmlFor='company name' className='label'>
          Company Name
        </label>
        <input
          type='text'
          name='company name'
          placeholder='Company Name*'
          id='company name'
          htmlFor='company name'
          required
        ></input>

        <label htmlFor='email' className='label'>
          Company Name
        </label>
        <input
          type='email'
          name='email'
          placeholder='Email*'
          id='email'
          htmlFor='email'
          required
        ></input>
        {/* SelectDropdown Component Here */}
        <SelectDropdown />

        <label htmlFor='message' className='label'>
          Message
        </label>
        <textarea
          name='message'
          placeholder='Message*'
          id='message'
          required
        ></textarea>

        <Button className='btn grey submit' type='submit' title='Submit' />
      </form>
    </div>
  );
}
