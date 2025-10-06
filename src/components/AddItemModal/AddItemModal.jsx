import { useForm } from "../Hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

const AddItemModal = ({
  isOpen,
  onAddItem,
  closeActiveModal,
  handleContentClick,
}) => {
  const defaultValues = {
    name: "",
    link: "",
    weatherType: "",
  };
  const { values, handleChange, handleReset, errors } = useForm(defaultValues);
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values, handleReset);
  }

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      handleContentClick={handleContentClick}
      handleReset={handleReset}
      errors={errors}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="clothing-name"
          className="modal__input modal__input_type_card-name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="link"
          className="modal__input modal__input_type_url"
          id="clothing-link"
          placeholder="Image URL"
          required
          value={values.link}
          onChange={handleChange}
        />
        {errors.link && <span className="modal__error">{errors.link}</span>}
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            checked={values.weatherType === "hot"}
            value="hot"
            onChange={handleChange}
          ></input>
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            checked={values.weatherType === "warm"}
            value="warm"
            onChange={handleChange}
          ></input>
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            checked={values.weatherType === "cold"}
            value="cold"
            onChange={handleChange}
          ></input>
          Cold
        </label>
        {errors.weatherType && (
          <span className="modal__error">{errors.weatherType}</span>
        )}
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
