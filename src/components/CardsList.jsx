import Card from "./Card";

function CardsList({ products , banners}) {
  return (
    <>
    {products.map((product, idx) => (
      <Card key={idx} product={product} banner={banners[idx]} />
    ))}
  </>
  );
}

export default CardsList;
