import "./ItemModal.css";
import previewClose from "../../assets/previewClose.png";

function ItemModal({
  isOpen,
  closeActiveModal,
  card,
  handleContentClick,
  handleCardDelete,
}) {
  const handleDeleteClick = () => {
    handleCardDelete(card._id);
  };

  return (
    <div
      onClick={closeActiveModal}
      className={`modal ${isOpen && "modal__open"}`}
    >
      <div
        onClick={handleContentClick}
        className="modal__content modal__content_type_image"
      >
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__preview_close"
        >
          <img
            src={previewClose}
            className="preview_close-btn"
            alt="close button"
          />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__button-align">
            <h2 className="modal__caption">{card.name}</h2>
            <button onClick={handleDeleteClick} className="modal__delete-btn">
              Delete Item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
