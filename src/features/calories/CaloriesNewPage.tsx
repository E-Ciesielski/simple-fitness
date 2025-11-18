import { NavLink } from "react-router";
import "./CaloriesNewPage.css";
import { useState } from "react";

export default function CaloriesNewPage() {
  const [nameError, setNameError] = useState("");
  const [caloriesError, setCaloriesError] = useState("");

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() ?? "";
    const caloriesStr = formData.get("calories")?.toString().trim() ?? "";
    const calories = parseInt(caloriesStr) ?? 0;

    setNameError("");
    setCaloriesError("");

    if (name.length < 3) {
      setNameError("Name must be at least 3 characters long");
    }

    if (calories <= 0 || calories > 10_000 || !calories) {
      setCaloriesError("Calories must be an integer from 0 to 10 000");
    }

    if (nameError === "" && caloriesError === "") {
      //TODO: api call
    }
  }
  return (
    <div className="calories-page">
      <h2>New calories log</h2>
      <form method="POST" className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="input w-100" id="name" name="name" />
          <div>{nameError}</div>
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            className="input w-25"
            id="calories"
            name="calories"
          />
          <div>{caloriesError}</div>
        </div>
        <div className="form__actions">
          <NavLink to="/calories" className="btn btn--secondary">
            Cancel
          </NavLink>
          <button type="submit" className="btn btn--primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
