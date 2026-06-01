import { FaDumbbell, FaUtensils, FaChartLine, FaTrophy } from "react-icons/fa";

function Home({ setPage }) {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            TRANSFORM <br />
            <span>YOUR BODY</span>
          </h1>

          <p>
            Train smarter. Eat better. <br />
            Track progress. Live stronger.
          </p>

          <div className="hero-buttons">
            <button onClick={() => setPage("contact")}>
              Get Started →
            </button>

            <button
              onClick={() => setPage("workouts")}
              className="outline"
            >
              View Workouts →
            </button>
          </div>
        </div>
      </section>

      {/* FITFORGE TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          <span>🔥 Train Smarter with FitForge ✦</span>
          <span>💪 500+ Workouts Available ✦</span>
          <span>🥗 Personalized Nutrition Plans ✦</span>
          <span>📈 Track Your Fitness Progress ✦</span>
          <span>🏆 Reach Your Goals Faster ✦</span>
          <span>💧 Stay Consistent & Stay Healthy ✦</span>

          <span>🔥 Train Smarter with FitForge ✦</span>
          <span>💪 500+ Workouts Available ✦</span>
          <span>🥗 Personalized Nutrition Plans ✦</span>
          <span>📈 Track Your Fitness Progress ✦</span>
          <span>🏆 Reach Your Goals Faster ✦</span>
          <span>💧 Stay Consistent & Stay Healthy ✦</span>
        </div>
      </div>

      <section className="features">
        <div>
          <FaDumbbell />
          <h3>Expert Workouts</h3>
          <p>Programs for all levels</p>
        </div>

        <div>
          <FaUtensils />
          <h3>Nutrition Plans</h3>
          <p>Eat right, achieve goals</p>
        </div>

        <div>
          <FaChartLine />
          <h3>Track Progress</h3>
          <p>Monitor and improve</p>
        </div>

        <div>
          <FaTrophy />
          <h3>Stay Motivated</h3>
          <p>Push your limits daily</p>
        </div>
      </section>

      
    </>
  );
}

export default Home;