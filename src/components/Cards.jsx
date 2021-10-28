import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Новости</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem 
            src="images/img1.jpg"
            text="Встречайте обновленный сайт!"
            label="Важное"
            path="/news"
            />
            <CardItem 
            src="images/img2.jpg"
            text="Обновлен раздел Вселенная"
            label="Вселенная"
            path="/news"
            />
          </ul>
          <ul className="cards-items">
            <CardItem 
            src="images/img1.jpg"
            text="Встречайте обновленный сайт!"
            label="Важное"
            path="/news"
            />
            <CardItem 
            src="images/img2.jpg"
            text="Обновлен раздел Вселенная"
            label="Вселенная"
            path="/news"
            />
            <CardItem 
            src="images/img2.jpg"
            text="Обновлен раздел Вселенная"
            label="Вселенная"
            path="/news"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;