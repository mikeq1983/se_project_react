import "./ItemCard.css";

function ItemCard({ card, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <h2 className="card__name">{card.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={card.imageUrl}
        alt={card.name}
      />
    </li>
  );
}

export default ItemCard;
