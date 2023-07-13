import React from "react";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import Button from "../components/Button/Button";
import ButtonFilter from "../components/ButtonFilter/ButtonFilter";

export default function Shop() {
  return (
    <>
      <ShopHeader />
      <Button className='btn grey waitlist' title='Add to Waitlist' />
      <br />
      <br />
      <br />
      <Button className='btn grey' title='Back To Shop' />
      <br />
      <br />
      <br />
      <ButtonFilter />
      <br />
      <br />
      <br />

      {/* shop components with data from Strapi CMS */}
    </>
  );
}
