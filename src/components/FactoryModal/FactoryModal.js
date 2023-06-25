import React from "react";
import "./FactoryModal.css";

export default function FactoryModal(props) {
  return (
    //& dynamic classes for modals located in Factories.scss
    <div className={`factory-modal-wrapper ${props.className}`}>
      <h1>{props.location}</h1>
      <h3>{props.title}</h3>
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
        <li>{props.item4}</li>
        <li>{props.item5}</li>
      </ul>
    </div>
  );
}
