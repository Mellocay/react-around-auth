import React from "react";
import successful from "../images/successful.svg";

export default function PopupRegisterResult(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_active" : ""}`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button className="button button__close" onClick={props.onClose}></button>
        <img src={successful} alt="Boom graphic" className="popup__image_boom" />
        <h2 className="popup__title popup__title_type_centered">{props.title}</h2>
      </div>
    </section>
  );
}
