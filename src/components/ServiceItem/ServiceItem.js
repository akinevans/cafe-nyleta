import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./ServiceItem.css";
import plus from "../../assets/icons/plus-sign.svg";
import minus from "../../assets/icons/minus-sign.svg";

export default function ServiceItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className='service-item-outer-wrapper'>
      {/* Click anywhere inside inner wrapper to trigger text display */}
      <motion.div
        initial={false}
        onClick={() => {
          setOpen(!open);
        }}
        className='service-item-inner-wrapper'
      >
        <AnimatePresence initial={true}>
          <div className='service-item-title-wrapper'>
            <h2 className='service-item-title'>{props.title}</h2>
            <img
              className={`${open ? "minus" : "plus"}`}
              src={`${open ? minus : plus}`}
              alt={props.altText}
            />
          </div>
          {/* We want the message to disappear so we conditionally render it */}
          <motion.div
            className={`message-wrapper ${open ? "visible" : "hidden"}`}
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p
              className={`service-item-message ${open ? "visible" : "hidden"} `}
            >
              {props.message}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
