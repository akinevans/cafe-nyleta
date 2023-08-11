import React from "react";
import { useState } from "react";
import "./Factories.css";
import world_map from "../../assets/images/home/worldmap.png";
import FactoryModal from "../FactoryModal/FactoryModal";
import { motion } from "framer-motion";

export default function Factories() {
  const [americaVisible, setAmericaVisible] = useState(false);
  const [turkeyVisible, setTurkeyVisible] = useState(false);
  const [vietnamVisible, setVietnamVisible] = useState(false);
  const [chinaVisible, setChinaVisible] = useState(false);

  const modalData = [
    {
      location: "Missouri, United States",
      title: "Leather",
      item1: "Large format cutting",
      item2: "Automated stitching",
      item3: "De-bossing/embossing",
      item4: "Surface finishing",
      item5: "Custom dyeing",
    },
    {
      location: "Istanbul, Turkey",
      title: "Textiles",
      item1: "Fabric dyeing",
      item2: "Printing",
      item3: "Weaving",
      item4: "Cutting and sewing",
      item5: "Quality control",
    },
    {
      location: "Long An, Vietnam",
      title: "Textiles",
      item1: "Cut and sew",
      item2: "Embroidery",
      item3: "Printing",
      item4: "Knitting",
      item5: "Weaving",
    },
    {
      location: "Dongguan, China",
      title: "Footwear",
      item1: "Cutting",
      item2: "Stitching",
      item3: "Lasting",
      item4: "Soiling",
      item5: "Finishing",
    },
  ];

  //! Build Modal that triggers when hovering over arrow on map
  //^ Classes for modal visibility are located in Factories.scss
  return (
    <section className='factories-outer-wrapper'>
      <div className='factories-inner-wrapper'>
        <div className='factories-text-wrapper'>
          <h1>Factories & Vendors</h1>
          <p>
            Our network is built on a roster of reliable, time-tested factories
            and vendors that have been carefully curated and assessed to ensure
            that all products developed meet industry standards and are produced
            using sustainable and best practices.
          </p>
        </div>
        <div className='factories-img-wrapper'>
          <img src={world_map} alt='world map' />

          {/* Map Triangles */}
          <motion.div
            className='triangle america'
            whileHover={{
              scale: [1, 1.2],
              translateY: [0, -5],
              transition: {
                type: "tween",
                stiffness: 300,
                ease: "easeOut",
                duration: 0.2,
              },
            }}
            onMouseEnter={() => {
              setAmericaVisible(!americaVisible);
            }}
            onMouseLeave={() => {
              setAmericaVisible(!americaVisible);
            }}
          ></motion.div>
          <motion.div
            className='triangle turkey'
            whileHover={{
              scale: [1, 1.2],
              translateY: [0, -5],
              transition: {
                type: "tween",
                stiffness: 300,
                ease: "easeOut",
                duration: 0.2,
              },
            }}
            onMouseEnter={() => {
              setTurkeyVisible(!turkeyVisible);
            }}
            onMouseLeave={() => {
              setTurkeyVisible(!turkeyVisible);
            }}
          ></motion.div>

          <motion.div
            className='triangle vietnam'
            whileHover={{
              scale: [1, 1.2],
              translateY: [0, -5],
              transition: {
                type: "tween",
                stiffness: 300,
                ease: "easeOut",
                duration: 0.2,
              },
            }}
            onMouseEnter={() => {
              setVietnamVisible(!vietnamVisible);
            }}
            onMouseLeave={() => {
              setVietnamVisible(!vietnamVisible);
            }}
          ></motion.div>

          <motion.div
            className='triangle china'
            whileHover={{
              scale: [1, 1.2],
              translateY: [0, -5],
              transition: {
                type: "tween",
                stiffness: 300,
                ease: "easeOut",
                duration: 0.2,
              },
            }}
            onMouseEnter={() => {
              setChinaVisible(!chinaVisible);
            }}
            onMouseLeave={() => {
              setChinaVisible(!chinaVisible);
            }}
          ></motion.div>

          {/* America modal */}
          <FactoryModal
            className={`america-modal ${
              americaVisible ? "modal-visible" : "modal-hidden"
            }`}
            location={modalData[0].location}
            title={modalData[0].title}
            item1={modalData[0].item1}
            item2={modalData[0].item2}
            item3={modalData[0].item3}
            item4={modalData[0].item4}
            item5={modalData[0].item5}
          />

          {/* Turkey Modal */}
          <FactoryModal
            className={`turkey-modal ${
              turkeyVisible ? "modal-visible" : "modal-hidden"
            }`}
            location={modalData[1].location}
            title={modalData[1].title}
            item1={modalData[1].item1}
            item2={modalData[1].item2}
            item3={modalData[1].item3}
            item4={modalData[1].item4}
            item5={modalData[1].item5}
          />

          {/* Vietnam Modal */}
          <FactoryModal
            className={`vietnam-modal ${
              vietnamVisible ? "modal-visible" : "modal-hidden"
            }`}
            location={modalData[2].location}
            title={modalData[2].title}
            item1={modalData[2].item1}
            item2={modalData[2].item2}
            item3={modalData[2].item3}
            item4={modalData[2].item4}
            item5={modalData[2].item5}
          />

          {/* China Modal */}
          <FactoryModal
            className={`china-modal ${
              chinaVisible ? "modal-visible" : "modal-hidden"
            }`}
            location={modalData[3].location}
            title={modalData[3].title}
            item1={modalData[3].item1}
            item2={modalData[3].item2}
            item3={modalData[3].item3}
            item4={modalData[3].item4}
            item5={modalData[3].item5}
          />
        </div>
      </div>
    </section>
  );
}
