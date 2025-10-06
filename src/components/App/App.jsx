import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import { getWeather, processWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import { deleteItem, getItems } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const onAddItem = (inputValues, handleReset) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.link,
      weather: inputValues.weatherType,
    };
    setClothingItems([...clothingItems, newCardData]);
    closeActiveModal();
    handleReset();
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleContentClick = (evt) => {
    evt.stopPropagation();
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCardDelete = (_id) => {
    const filteredItems = clothingItems.filter((item) => item._id !== _id);
    deleteItem(_id);
    setClothingItems(filteredItems);
    closeActiveModal();
  };

  useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    if (activeModal) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal]);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = processWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          closeActiveModal={closeActiveModal}
          handleContentClick={handleContentClick}
          onAddItem={onAddItem}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
          handleContentClick={handleContentClick}
          handleCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
