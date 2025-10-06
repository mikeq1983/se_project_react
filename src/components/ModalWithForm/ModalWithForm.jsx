import "./ModalWithForm.css";
import closeButton from "../../assets/close.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  onSubmit,
  isOpen,
  closeActiveModal,
  handleContentClick,
  errors,
}) {
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
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button
            disabled={Object.values(errors).some((item) => item !== "")}
            type="submit"
            className="modal__submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
