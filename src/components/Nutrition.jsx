import { useState } from "react";

function Nutrition() {
  const foods = {
    protein: {
      "Grilled Chicken": { amount: "150g", cal: 250, protein: 46, carbs: 0, fats: 6 },
      "Salmon": { amount: "150g", cal: 310, protein: 34, carbs: 0, fats: 18 },
      "Eggs": { amount: "3 eggs", cal: 210, protein: 18, carbs: 1, fats: 15 },
    },
    carbs: {
      "Brown Rice": { amount: "1 cup", cal: 215, protein: 5, carbs: 45, fats: 2 },
      "Sweet Potato": { amount: "1 cup", cal: 180, protein: 4, carbs: 41, fats: 0 },
      "Pasta": { amount: "1 cup", cal: 220, protein: 8, carbs: 43, fats: 2 },
    },
    vegetables: {
      Broccoli: { amount: "1 cup", cal: 55, protein: 4, carbs: 11, fats: 1, fiber: 5 },
      Salad: { amount: "1 bowl", cal: 80, protein: 3, carbs: 12, fats: 2, fiber: 4 },
      Spinach: { amount: "1 cup", cal: 30, protein: 3, carbs: 4, fats: 0, fiber: 3 },
    },
    fats: {
      "Olive Oil": { amount: "1 tbsp", cal: 120, protein: 0, carbs: 0, fats: 14 },
      Avocado: { amount: "1/2 piece", cal: 160, protein: 2, carbs: 9, fats: 15, fiber: 7 },
      Almonds: { amount: "20g", cal: 120, protein: 4, carbs: 4, fats: 10, fiber: 3 },
    },
  };

  const [meal, setMeal] = useState({
    protein: "Grilled Chicken",
    carbs: "Brown Rice",
    vegetables: "Broccoli",
    fats: "Olive Oil",
  });

  const selected = [
    foods.protein[meal.protein],
    foods.carbs[meal.carbs],
    foods.vegetables[meal.vegetables],
    foods.fats[meal.fats],
  ];

  const total = selected.reduce(
    (sum, item) => ({
      cal: sum.cal + item.cal,
      protein: sum.protein + item.protein,
      carbs: sum.carbs + item.carbs,
      fats: sum.fats + item.fats,
      fiber: sum.fiber + (item.fiber || 0),
    }),
    { cal: 0, protein: 0, carbs: 0, fats: 0, fiber: 0 }
  );

  const score = total.protein >= 40 && total.cal < 800 ? "8.6" : "7.4";

  return (
    <section className="nutrition-builder">
      <div className="nutrition-title">
        <h1>NUTRITION BUILDER</h1>
        <p>Create your perfect meal and get instant nutrition information.</p>
      </div>

      <div className="builder-grid">
        <aside className="builder-panel">
          <h2>BUILD YOUR MEAL</h2>
          <p>Create your meal and see calories, macros, and health score.</p>

          {Object.keys(meal).map((type) => (
            <div className="food-select" key={type}>
              <label>{type.toUpperCase()}</label>
              <select
                value={meal[type]}
                onChange={(e) => setMeal({ ...meal, [type]: e.target.value })}
              >
                {Object.keys(foods[type]).map((food) => (
                  <option key={food}>{food}</option>
                ))}
              </select>
            </div>
          ))}

          <button className="calculate-meal">Calculate Meal</button>

          <div className="nutrition-tip">
            <h3>💡 Nutrition Tip</h3>
            <p>Focus on whole foods, control portions, and stay consistent for the best results.</p>
          </div>
        </aside>

        <main className="summary-panel">
          <h2>YOUR MEAL SUMMARY</h2>

          <div className="meal-summary-card">
           

            <div>
              <p>Total Calories</p>
              <h1>{total.cal} kcal</h1>
              <span>This meal is high in protein and balanced in nutrients.</span>
            </div>
          </div>

          <div className="macro-stats">
            <div><span>Protein</span><h3>{total.protein}g</h3><p>Strong</p></div>
            <div><span>Carbs</span><h3>{total.carbs}g</h3><p>Energy</p></div>
            <div><span>Fats</span><h3>{total.fats}g</h3><p>Healthy</p></div>
            <div><span>Fiber</span><h3>{total.fiber}g</h3><p>Good</p></div>
          </div>

          <div className="why-box">
            <h3>WHY THIS MEAL WORKS</h3>
            <div>
              <p> Supports muscle growth</p>
              <p> Provides energy</p>
              <p> Rich in vitamins</p>
              <p> Helps weight control</p>
            </div>
          </div>
        </main>

        <aside className="score-panel">
          <div className="score-card">
            <h2>MEAL SCORE</h2>
            <div className="score-circle">{score}<small>/10</small></div>
            <h3>Great Choice! 👏</h3>
            <p>This meal is well-balanced and aligns with your goals.</p>
            <ul>
              <li>✓ High in Protein</li>
              <li>✓ Good Carbs</li>
              <li>✓ Healthy Fats</li>
              <li>✓ Rich in Fiber</li>
            </ul>
          </div>

          <div className="score-card">
            <h2>BEST TIME TO EAT</h2>
            <h3>Lunch / Post-Workout</h3>
            <p>Perfect for energy, recovery, and muscle growth.</p>
          </div>

          <div className="score-card">
            <h2>DAILY PLAN</h2>
            <p>Breakfast <b>450 kcal</b></p>
            <p>Lunch <b>{total.cal} kcal</b></p>
            <p>Dinner <b>550 kcal</b></p>
            <p>Snacks <b>200 kcal</b></p>
          </div>
        </aside>
      </div>

      <div className="daily-progress">
        <div><span>Daily Target</span><h2>2200 kcal</h2></div>
        <div><span>Consumed</span><h2>{total.cal + 700} kcal</h2></div>
        <div><span>Remaining</span><h2>{2200 - total.cal - 700} kcal</h2></div>
        <div><span>Water Intake</span><h2>1.8 / 2.5L</h2></div>
        <div><span>Progress</span><h2>62%</h2></div>
      </div>
    </section>
  );
}

export default Nutrition;