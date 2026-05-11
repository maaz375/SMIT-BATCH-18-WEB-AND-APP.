function CarCard({ name, model, color, price }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
}

export default CarCard;