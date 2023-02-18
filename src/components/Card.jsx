import buttonImg from '../assets/icon-ellipsis.svg';

function Card({product, banner,}) {
  const {category, rating, description, image, price, title} = product;
  const {count} = rating;

  const shortDescription = description.split(' ').slice(0, 4).join(' ');

  return (
    <div className={`card ${title.split (' ').join ('-').toLowerCase ()}`}>
      <div className="card__banner"  />
      <div className="card__body">
        <h2 className="title">{title}</h2>
        <button className="button-setting">
          <img src={buttonImg} alt="other settings" />
        </button>
        <h3 className="price">{price}$</h3>
        <div >
          <p className="desc">{shortDescription}</p>
          <h3 className="count">{count}InStore</h3>
        </div>

      </div>
    </div>
  );
}

export default Card;
