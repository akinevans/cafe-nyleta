import React from "react";
import "./ServicesComp.css";
import ServiceItem from "../ServiceItem/ServiceItem";

export default function ServicesComp() {
  const serviceItemData = [
    {
      title: "01. Design",
      key: 0,
      message:
        "We specialize in designing performance garments, sportswear, leather goods, and soft goods. Our comprehensive design services include consultation, concept development, sketching, material selection, pattern making, sample creation, iteration, refinement, and tech pack creation.",
    },
    {
      title: "02. Sourcing",
      key: 1,

      message:
        "Offers comprehensive sourcing services to help you bring your apparel designs to life. We will help you identify and source the highest-quality materials, skilled labor, and reliable suppliers for your production needs. With our extensive network of global partners, we provide cost-effective and reliable sourcing solutions to ensure seamless and successful apparel production. Contact us today to learn more about our sourcing services.",
    },
    {
      title: "03. Consulting",
      key: 2,

      message:
        "We offer expert design consulting services for short-run projects and long-term product launches. From product development and design iteration to technical design, material selection, sample creation, and production oversight, our experienced team of designers will work with you every step of the way to bring your vision to life. Contact us today to learn more about our design consulting services.",
    },

    {
      title: "04. Development",
      key: 3,

      message:
        "We provide design and product development consulting services for short-run projects and long-term product launches. Our experienced team of designers will work with you every step of the way to bring your vision to life, from initial concept development to design iteration, technical design, material selection, sample creation, and production oversight.",
    },
    {
      title: "05. Distribution",
      key: 4,

      message:
        "Cafe Nyleta offers end-to-end solutions for your apparel business needs. From design consulting and product development to manufacturing and distribution, we offer comprehensive services to bring your vision to life. With our global network of partners, we provide high-quality and cost-effective solutions for short-run projects and long-term product launches.",
    },
  ];

  return (
    <div className='services-outer-wrapper'>
      <div className='services-inner-wrapper'>
        <div className='component-title-wrapper'>
          <h1 className='component-title'>Our Services</h1>
        </div>
        {/* //* Iterate over serviceItemData, for every object in the array, return a serviceItem component with appropriate data */}

        {serviceItemData.map((data) => (
          <ServiceItem
            key={data.key}
            title={data.title}
            message={data.message}
          />
        ))}
      </div>
    </div>
  );
}
