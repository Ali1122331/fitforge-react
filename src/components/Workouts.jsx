import { useState } from "react";
import {
  FaDumbbell,
  FaFire,
  FaChartLine,
  FaClock,
  FaSignal,
  FaArrowRight,
  FaCalendarAlt,
} from "react-icons/fa";

import heroWorkout from "../assets/top one.png";

import upperBody from "../assets/Upper body.png";
import lowerBody from "../assets/lower body.png";
import coreAbs from "../assets/Core and abs.png";
import fatBurn from "../assets/Fat burn hit.png";

import pushups from "../assets/pushups.jpg";
import deadlift from "../assets/deadlift.jpg";
import plank from "../assets/pank.jpg";
import cycling from "../assets/cycling.jpg";
import running from "../assets/running.jpg";
import squats from "../assets/squats.jpg";

function Workouts() {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const programs = [
    {
      badge: "🔥 HOT",
      name: "Upper Body Strength",
      desc: "Build strength and definition",
      image: upperBody,
      duration: "6 Weeks",
      level: "Intermediate",
      video: "https://www.youtube.com/embed/UoC_O3HzsH0",
    },
    {
      badge: "⚡ TRENDING",
      name: "Lower Body Power",
      desc: "Stronger legs, better performance",
      image: lowerBody,
      duration: "8 Weeks",
      level: "Beginner",
      video: "https://www.youtube.com/embed/aclHkVaku9U",
    },
    {
      badge: "💪 CORE",
      name: "Core & Abs Crusher",
      desc: "Sculpt your core and abs",
      image: coreAbs,
      duration: "4 Weeks",
      level: "All Levels",
      video: "https://www.youtube.com/embed/1919eTCoESo",
    },
    {
      badge: "🔥 HIIT",
      name: "Fat Burn HIIT",
      desc: "Burn fat and boost endurance",
      image: fatBurn,
      duration: "6 Weeks",
      level: "Advanced",
      video: "https://www.youtube.com/embed/ml6cT4AZdqI",
    },
    {
      badge: "💪 PUSH",
      name: "Push Up Challenge",
      desc: "Master push-up strength",
      image: pushups,
      duration: "4 Weeks",
      level: "Beginner",
      video: "https://www.youtube.com/embed/IODxDxX7oi4",
    },
    {
      badge: "🏋 DEADLIFT",
      name: "Deadlift Mastery",
      desc: "Build total body power",
      image: deadlift,
      duration: "8 Weeks",
      level: "Advanced",
      video: "https://www.youtube.com/embed/op9kVnSso6Q",
    },
    {
      badge: "🔥 PLANK",
      name: "Core Stability",
      desc: "Strengthen your core",
      image: plank,
      duration: "3 Weeks",
      level: "All Levels",
      video: "https://www.youtube.com/embed/pSHjTRCQxIw",
    },
    {
      badge: "🚴 CYCLING",
      name: "Cycling Endurance",
      desc: "Improve stamina and cardio",
      image: cycling,
      duration: "6 Weeks",
      level: "Intermediate",
      video:   "https://www.youtube.com/embed/ZiGE3-L4vyg",
    },
    {
      badge: "🏃 RUNNING",
      name: "Running Performance",
      desc: "Run faster and longer",
      image: running,
      duration: "5 Weeks",
      level: "Intermediate",
      video: "https://www.youtube.com/embed/brFHyOtTwH4",
    },
    {
      badge: "🦵 SQUATS",
      name: "Leg Day Destroyer",
      desc: "Build powerful legs",
      image: squats,
      duration: "6 Weeks",
      level: "Advanced",
      video: "https://www.youtube.com/embed/YaXPRqUwItQ",
    },
  ];

  const visiblePrograms = showAll ? programs : programs.slice(0, 4);

  return (
    <section className="workout-page">
      <div className="workout-hero">
        <div className="workout-hero-text">
          <p className="mini-title">— TRAIN YOUR BEST —</p>

          <h1>
            WORKOUT <br />
            <span>PROGRAMS</span>
          </h1>

          <p className="workout-desc">
            Explore our expertly designed workout programs for all goals and
            fitness levels.
          </p>

          <div className="workout-features">
            <div>
              <FaDumbbell />
              <p>
                <b>Expert Trainers</b>
                <span>Guided Workouts</span>
              </p>
            </div>

            <div>
              <FaFire />
              <p>
                <b>Burn Calories</b>
                <span>Boost Performance</span>
              </p>
            </div>

            <div>
              <FaChartLine />
              <p>
                <b>Track Progress</b>
                <span>See Results</span>
              </p>
            </div>
          </div>
        </div>

        <img src={heroWorkout} alt="Workout Programs" />
      </div>

      <div className="program-header">
        <h2>— POPULAR PROGRAMS —</h2>

        <button
          className="view-programs-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Programs"} <FaArrowRight />
        </button>
      </div>

      <div className="program-grid">
        {visiblePrograms.map((program, index) => (
          <div
            key={index}
            className="program-card"
            onClick={() => setSelectedWorkout(program)}
          >
            <div className="badge">{program.badge}</div>

            <img src={program.image} alt={program.name} />

            <div className="hover-text">Click To Start Workout →</div>

            <div className="program-content">
              <h3>{program.name}</h3>
              <p>{program.desc}</p>

              <div className="program-bottom">
                <span>
                  <FaClock /> {program.duration}
                </span>

                <span>
                  <FaSignal /> {program.level}
                </span>

                <button className="program-arrow">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="monthly-banner">
        <div>
          <FaCalendarAlt />
          <div>
            <h3>NEW PROGRAMS EVERY MONTH</h3>
            <p>Stay motivated with fresh workouts and new challenges.</p>
          </div>
        </div>

        <button onClick={() => setShowAll(true)}>
          Explore New Programs <FaArrowRight />
        </button>
      </div>

      {selectedWorkout && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedWorkout(null)}
        >
          <div
            className="workout-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedWorkout(null)}
            >
              ×
            </button>

            <h2>{selectedWorkout.name}</h2>
            <p className="tag">{selectedWorkout.level}</p>

            <iframe
              src={selectedWorkout.video}
              title={selectedWorkout.name}
              allowFullScreen
            ></iframe>

            <div className="modal-info">
              <p>
                <strong>Duration:</strong> {selectedWorkout.duration}
              </p>
              <p>
                <strong>Level:</strong> {selectedWorkout.level}
              </p>
            </div>

            <p>{selectedWorkout.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Workouts;