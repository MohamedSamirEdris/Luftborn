import Card from "./Card";

function CardsList({ products }) {
  return (
    <>
    {products.map((product, idx) => (
      <Card key={idx} product={product} />
    ))}
  </>
  );
}

export default CardsList;
