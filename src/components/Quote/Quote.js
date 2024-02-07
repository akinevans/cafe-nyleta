import React from "react";
import "./Quote.css";

export default function Quote(props) {
  return (
    <article className='quote-outer-wrapper'>
      <div className='quote-inner-wrapper'>
        <h1 className='quote-title'>{props.quoteText}</h1>
        <h2 className='quote-author'> {props.author}</h2>
      </div>
    </article>
  );
}
