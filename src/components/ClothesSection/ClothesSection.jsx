import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({ onCardClick, clothingItems, handleAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes__text">
        <p className="clothes__text-title">Your items</p>
        <button onClick={handleAddClick} className="clothes__add-btn">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((filteredCard) => {
          return (
            <ItemCard
              key={filteredCard._id}
              card={filteredCard}
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
