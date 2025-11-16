import "./CaloriesPage.css";

export default function CaloriesPage() {
  return (
    <div className="calories-wrapper">
      <div className="date">
        <button className="btn">p</button>
        <div className="date-text">Sunday, Nov 16th</div>
        <button className="btn">n</button>
      </div>
      <h2 className="calories-header">Calories (2000 kcal)</h2>
      <ul className="calories">
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
        <li className="calories-item">Bułka (600 kcal)</li>
      </ul>
      <div className="flex-grow"></div>
      <div className="">
        <form className="calories-form">
          <input className="input flex-grow" type="text" placeholder="Name" />
          <input className="input" type="number" placeholder="Calories" />
          <button type="button" className="btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
