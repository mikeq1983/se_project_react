import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import { useContext } from "react";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          {weatherData.isDay ? "Today" : "Tonight"} is{" "}
          {currentTemperatureUnit === "F"
            ? weatherData.temp.F
            : weatherData.temp.C}
          &deg;{currentTemperatureUnit}/ You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((card) => {
              return card.weather === weatherData.type;
            })
            .map((filteredCard) => {
              return (
                <ItemCard
                  key={filteredCard._id}
                  card={filteredCard}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
