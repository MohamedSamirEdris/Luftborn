import React from "react";
import buttonImg from "../assets/icon-ellipsis.svg";

function Card({ product }) {
  const { category, rating, description, id, image, price, title } = product;
  const { rate, count } = rating;

  return (
    <div className={`card ${title.split(" ").join("-").toLowerCase()}`}>
      <div className="card__banner"></div>
      <div className="card__body">
        <h2 className="title">{category}</h2>
        <button className="button-setting">
          <img src={buttonImg} alt="other settings" />
        </button>
        <span className="price">{price}$</span>
        <p className="title">{title}</p>
        <h3 className="current-time">{count} In Store</h3>
        <h3 className="previous-time"></h3>
      </div>
    </div>
  );
}

export default Card;
