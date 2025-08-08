import "./ModalWithForm.css";
import closeButton from "../../assets/close.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  isOpen,
  closeActiveModal,
  handleContentClick,
}) {
  console.log(isOpen);
  return (
    <div
      onClick={closeActiveModal}
      className={`modal ${isOpen && "modal__open"}`}
    >
      <div onClick={handleContentClick} className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        >
          <img src={closeButton} alt="close button" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
