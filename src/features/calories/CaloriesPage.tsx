import { useState } from "react";
import "./CaloriesPage.css";

export default function CaloriesPage() {
  const [showDatePicker, setShowDatePicker] = useState(false);

  function toggleDatePicker() {
    setShowDatePicker(!showDatePicker);
  }

  return (
    <div className="calories-page">
      <div className="date">
        <i
          className="bi bi-calendar2-week date__icon"
          onClick={toggleDatePicker}
        ></i>
        <div
          className={
            (showDatePicker ? "date-picker--active " : "") + "date-picker card"
          }
        >
          <input type="date" className="input date-picker__input" />
          <div className="date-picker__actions">
            <button className="btn btn--secondary">Cancel</button>
            <button className="btn btn--primary">Done</button>
          </div>
        </div>
        <h2 className="date__text">Monday, Nov 17th</h2>
      </div>
      <div className="calories card">
        <div className="calories__progress">
          <h2 className="calories__text">2000 / 2100 kcal</h2>
          <div className="calories__text-secondary">100 kcal left</div>
        </div>
        <i className="bi bi-pencil calories__settings"></i>
      </div>
      <div className="food-header">
        <h2 className="food-header__text">Food</h2>
        <button className="btn">New</button>
      </div>
      <ul className="card food-list">
        <li className="food-item">
          <div>
            <span className="food-item__calories">600 kcal</span>Bułka
          </div>
          <i className="bi bi-three-dots-vertical"></i>
        </li>
        <li className="food-item">
          <div>
            <span className="food-item__calories">60 kcal</span>Woda
          </div>
          <i className="bi bi-three-dots-vertical"></i>
        </li>
        <li className="food-item">
          <div>
            <span className="food-item__calories">1100 kcal</span>Ryz z
            kurczakiem w sosie slodko kwasnym
          </div>
          <i className="bi bi-three-dots-vertical"></i>
        </li>
      </ul>
    </div>
  );
}
