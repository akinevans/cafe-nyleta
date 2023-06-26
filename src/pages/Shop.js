import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Shop() {
  return (
    <>
      <Navbar />
      {/* shop components with data from Strapi CMS */}
      <h1>Shop</h1>
      <Footer />
    </>
  );
}
