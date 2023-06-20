import React from "react";
import "./BrandingKit.css";
import Button from "./Button";

export default function Branding_kit() {
  return (
    <div className='temp-wrapper'>
      <h1 className='cafe'>cafe nyleta</h1>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p className='body '>Body</p>
      <p className='cta'>CTA (HN-Medium)</p>
      <p className='label'>Label/Navigation</p>
      <p className='windsor'>Windsor</p>
      <div className='box-wrapper'>
        <div className='box b1'></div>
        <div className='box b2'></div>
        <div className='box b3'></div>
        <div className='box b4'></div>
        <div className='box b5'></div>
        <div className='box b6'></div>
      </div>
      <Button className='btn white' title='Back to shop'></Button>
      <p></p>
      <Button className='btn grey' title='Check Out'></Button>
      <p></p>
      <Button className='btn grey' title='Contact Us'></Button>
      <p></p>
    </div>
  );
}
