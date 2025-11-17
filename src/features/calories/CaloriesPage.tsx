import "./CaloriesPage.css";

export default function CaloriesPage() {
  return (
    <>
      <div className="calories-date">
        <button className="btn-icon">
          <i className="bi bi-chevron-left"></i>
        </button>
        <h2 className="calories-date__heading">Sunday, Nov 16th</h2>
        <button className="btn-icon">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className="card calories-info">
        <h1 className="calories-info__text">2000 kcal</h1>
      </div>
      <h3 className="card__heading">Calories</h3>
      <ul className="calories-list card">
        <li className="calories-list__item">Bułka (600 kcal)</li>
        <li className="calories-list__item">Bułka (600 kcal)</li>
        <li className="calories-list__item">Bułka (600 kcal)</li>
        <li className="calories-list__item">Bułka (600 kcal)</li>
      </ul>
    </>
  );
}
