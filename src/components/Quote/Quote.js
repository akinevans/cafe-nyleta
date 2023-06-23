import React from "react";
import "./Quote.css";

export default function Quote(props) {
  return (
    <article className='quote-outer-wrapper'>
      <div className='quote-inner-wrapper'>
        <h1>{props.quoteText}</h1>
        <p>{props.author}</p>
      </div>
    </article>
  );
}
