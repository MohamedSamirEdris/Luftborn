import React from 'react';
import buttonImg from '../assets/icon-ellipsis.svg';

function Card({product}) {
  const {category, rating, description, image, price, title} = product;
  const {count} = rating;

  return (
    <div className={`card ${title.split(' ').join('-').toLowerCase()}`}>
      <div className="card__banner" />
      <div className="card__body">
        <h2 className="title">{category}</h2>
        <button className="button-setting">
          <img src={buttonImg} alt="other settings" />
        </button>
        <span className="price">{price}$</span>
        <p className="desc">{description}</p>
        <h3 className="count">{count} In Store</h3>
      </div>
    </div>
  );
}

export default Card;
