import { useState } from "react";

function Progress() {
  const [form, setForm] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    activity: "1.55",
    goal: "maintain",
  });

  const [result, setResult] = useState(null);

  const calculate = () => {
    const weight = Number(form.weight);
    const height = Number(form.height);
    const age = Number(form.age);

    if (!weight || !height || !age) return;

    const h = height / 100;
    const bmi = weight / (h * h);

    let category = "Normal";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    const bmr =
      form.gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const maintain = Math.round(bmr * Number(form.activity));

    setResult({
      bmi: bmi.toFixed(1),
      category,
      maintain,
      loss: maintain - 500,
      gain: maintain + 300,
      protein: Math.round(weight * 2),
      water: (weight * 0.035).toFixed(1),
      minWeight: (18.5 * h * h).toFixed(1),
      maxWeight: (24.9 * h * h).toFixed(1),
    });
  };

  return (
    <section className="progress-page">
      <div className="progress-title">
        <h1>
          FITNESS <span>PROGRESS</span>
        </h1>
        <p>Track your progress and calculate your daily nutrition needs.</p>
      </div>

      <div className="progress-top">
        <div className="fitness-card">
          <h2>▦ SMART FITNESS CALCULATOR</h2>
          <p>Enter your details and get personalized results.</p>

          <div className="fitness-grid">
            <label>
              Weight (kg)
              <input
                type="number"
                value={form.weight}
                onChange={(e) => setForm({ ...form, weight: e.target.value })}
                placeholder="70"
              />
            </label>

            <label>
              Height (cm)
              <input
                type="number"
                value={form.height}
                onChange={(e) => setForm({ ...form, height: e.target.value })}
                placeholder="175"
              />
            </label>

            <label>
              Age
              <input
                type="number"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                placeholder="24"
              />
            </label>

            <label>
              Gender
              <select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label className="wide">
              Activity Level
              <select
                value={form.activity}
                onChange={(e) => setForm({ ...form, activity: e.target.value })}
              >
                <option value="1.2">Little Exercise</option>
                <option value="1.375">Light Exercise</option>
                <option value="1.55">Moderately Active</option>
                <option value="1.725">Very Active</option>
                <option value="1.9">Athlete Level</option>
              </select>
            </label>

            <label className="wide">
              Goal
              <select
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
              >
                <option value="maintain">Maintain Weight</option>
                <option value="loss">Fat Loss</option>
                <option value="gain">Muscle Gain</option>
              </select>
            </label>
          </div>

          <button onClick={calculate}>Calculate My Plan →</button>
        </div>

        <div className="bmi-card-pro">
          <h2>⌁ YOUR BMI RESULT</h2>

          <div className="bmi-content">
            <div>
              <div className="bmi-circle">
                <h1>{result ? result.bmi : "--"}</h1>
                <p>BMI</p>
              </div>

              <h3>{result ? result.category : "Enter details"}</h3>
              <p className="bmi-message">
                {result
                  ? "Great! Keep tracking your fitness journey."
                  : "Your BMI result will appear here."}
              </p>
            </div>

            <div className="bmi-category">
  <h4>BMI CATEGORY</h4>

  <p className={result?.category === "Underweight" ? "active-bmi blue" : ""}>
    🔵 Underweight <span>&lt; 18.5</span>
  </p>

  <p className={result?.category === "Normal" ? "active-bmi green" : ""}>
    🟢 Normal <span>18.5 - 24.9</span>
  </p>

  <p className={result?.category === "Overweight" ? "active-bmi yellow" : ""}>
    🟡 Overweight <span>25 - 29.9</span>
  </p>

  <p className={result?.category === "Obese" ? "active-bmi red" : ""}>
    🔴 Obese <span>30+</span>
  </p>
</div>
          </div>

          <div className="bmi-small-cards">
            <div>
              <span>Ideal Weight Range</span>
              <b>{result ? `${result.minWeight} - ${result.maxWeight} kg` : "--"}</b>
            </div>

            <div>
              <span>Your Current Weight</span>
              <b>{form.weight || "--"} kg</b>
            </div>

            <div>
              <span>Healthy Goal</span>
              <b>Stay Consistent</b>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-results">
        <div>
          <h4>🔥 MAINTAIN WEIGHT</h4>
          <h2>{result ? result.maintain : "--"} kcal</h2>
          <p>Daily Calories</p>
        </div>

        <div>
          <h4>🟡 FAT LOSS GOAL</h4>
          <h2>{result ? result.loss : "--"} kcal</h2>
          <p>-500 kcal deficit</p>
        </div>

        <div>
          <h4>💪 MUSCLE GAIN GOAL</h4>
          <h2>{result ? result.gain : "--"} kcal</h2>
          <p>+300 kcal surplus</p>
        </div>

        <div>
          <h4>🟣 PROTEIN TARGET</h4>
          <h2>{result ? result.protein : "--"} g</h2>
          <p>2.0g per kg</p>
        </div>

        <div>
          <h4>💧 WATER TARGET</h4>
          <h2>{result ? result.water : "--"} L</h2>
          <p>Stay Hydrated</p>
        </div>
      </div>

      <div className="progress-bottom">
        <div className="breakdown-card">
          <h3>DAILY CALORIE BREAKDOWN</h3>

          <div className="donut"></div>

          <div className="breakdown-list">
            <p><span>Carbohydrates</span><b>45%</b></p>
            <p><span>Protein</span><b>25%</b></p>
            <p><span>Fats</span><b>25%</b></p>
            <p><span>Other</span><b>5%</b></p>
          </div>
        </div>

        <div className="tips-card">
          <h3>💡 TIPS FOR YOU</h3>
          <p>🥗 Focus on whole foods and balanced meals.</p>
          <p>🏃 Exercise regularly and stay consistent.</p>
          <p>💧 Drink enough water every day.</p>
          <p>😴 Sleep 7–8 hours for better recovery.</p>
        </div>
      </div>
    </section>
  );
}

export default Progress;