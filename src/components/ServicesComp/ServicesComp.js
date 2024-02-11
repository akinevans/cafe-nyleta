import React from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./ServicesComp.css";

//util imports
import { serviceItemData } from "../../utils/textData";

export default function ServicesComp() {
  return (
    <div className='services-outer-wrapper'>
      <div className='services-inner-wrapper'>
        <div className='component-title-wrapper'>
          <h1 className='component-title'>Our Services</h1>
        </div>

        {serviceItemData.map((data) => (
          <ServiceItem
            key={data.key}
            title={data.title}
            altText={data.alt}
            message={data.message}
          />
        ))}
      </div>
    </div>
  );
}
