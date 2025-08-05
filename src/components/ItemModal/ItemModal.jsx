import "./ItemModal.css";
import previewClose from "../../assets/previewClose.png";

function ItemModal({ activeModal, closeActiveModal, card, handleContentClick }) {
  return (
    <div onClick={closeActiveModal} className={`modal ${activeModal === "preview" && "modal__open"}`}>
      <div onClick={handleContentClick} className="modal__content modal__content_type_image">
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
        <img src={card.link} alt="card image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
