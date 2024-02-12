import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import world_map from "../../assets/images/home/worldmap.webp";
import "./Factories.css";

// component imports
import FactoryModal from "../Modals/FactoryModal/FactoryModal";

// utility data
import { factoryModalData } from "../../utils/textData";

export default function Factories() {
  const [americaVisible, setAmericaVisible] = useState(false);
  const [turkeyVisible, setTurkeyVisible] = useState(false);
  const [vietnamVisible, setVietnamVisible] = useState(false);
  const [chinaVisible, setChinaVisible] = useState(false);

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
          <img src={world_map} alt='world map' loading='lazy' />

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
            onPointerDownCapture={() => {
              setAmericaVisible(!americaVisible);
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
            onPointerDownCapture={() => {
              setTurkeyVisible(!turkeyVisible);
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
            onPointerDownCapture={() => {
              setVietnamVisible(!vietnamVisible);
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
            onPointerDownCapture={() => {
              setChinaVisible(!chinaVisible);
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
            location={factoryModalData[0].location}
            title={factoryModalData[0].title}
            item1={factoryModalData[0].item1}
            item2={factoryModalData[0].item2}
            item3={factoryModalData[0].item3}
            item4={factoryModalData[0].item4}
            item5={factoryModalData[0].item5}
          />

          {/* Turkey Modal */}
          <FactoryModal
            className={`turkey-modal ${
              turkeyVisible ? "modal-visible" : "modal-hidden"
            }`}
            location={factoryModalData[1].location}
            title={factoryModalData[1].title}
            item1={factoryModalData[1].item1}
            item2={factoryModalData[1].item2}
            item3={factoryModalData[1].item3}
            item4={factoryModalData[1].item4}
            item5={factoryModalData[1].item5}
          />

          {/* Vietnam Modal */}
          <FactoryModal
            className={`vietnam-modal ${
              vietnamVisible ? "modal-visible" : "modal-hidden"
            }`}
            location={factoryModalData[2].location}
            title={factoryModalData[2].title}
            item1={factoryModalData[2].item1}
            item2={factoryModalData[2].item2}
            item3={factoryModalData[2].item3}
            item4={factoryModalData[2].item4}
            item5={factoryModalData[2].item5}
          />

          {/* China Modal */}
          <FactoryModal
            className={`china-modal ${
              chinaVisible ? "modal-visible" : "modal-hidden"
            }`}
            location={factoryModalData[3].location}
            title={factoryModalData[3].title}
            item1={factoryModalData[3].item1}
            item2={factoryModalData[3].item2}
            item3={factoryModalData[3].item3}
            item4={factoryModalData[3].item4}
            item5={factoryModalData[3].item5}
          />
        </div>
      </div>
    </section>
  );
}
