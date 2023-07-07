import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Collaborations.css";

export default function Collaborations() {
  return (
    <section className='collab-outer-wrapper'>
      <div className='collab-inner-wrapper'>
        <div className='collab-title-wrapper'>
          <h1>Clients & Collaborations</h1>
        </div>
        <div className='collab-list-section'>
          <div className='collab-list'>
            <ul>
              <li>Nike</li>
              <li>Adidas</li>
              <li>Stussy</li>
              <li>Arctyeryx</li>
              <li>Gore-Tex</li>
            </ul>
          </div>
          <div className='collab-list'>
            <ul>
              <li>Snow Peak</li>
              <li>Carhartt</li>
              <li>Adsum</li>
              <li>Ace Hotel</li>
              <li>WTAPS</li>
            </ul>
          </div>
          <div className='collab-list'>
            <ul>
              <li>Tulip House</li>
              <li>OLO Fragrance</li>
              <li>Post Cafe</li>
              <li>Self Edge</li>
              <li>Maak Lab</li>
            </ul>
          </div>
        </div>
        <div className='underline'></div>
        <div className='text-section'>
          <p>
            Initially, Cafe Nyleta served as a testing ground for design and
            fashion concepts. Our goal was to create a series of products that
            conveyed an aspirational lifestyle, and we soon developed a devoted
            following. As our passions and expertise grew, we expanded our
            creative vision beyond apparel design. We focused on every aspect of
            the garment-making process, from sourcing materials to manufacturing
            and distribution, in order to produce high-quality products.
          </p>
          <Link to='../contact'>
            <Button className='btn grey work' title='Work with us' />
          </Link>
        </div>
      </div>
    </section>
  );
}
