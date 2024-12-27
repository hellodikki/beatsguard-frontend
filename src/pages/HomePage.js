import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <header className="header">
          <h1 className="header-title">Welcome to BeatsGuard</h1>
          <p className="header-subtitle">
          BeatsGuard is your companion for health and safety.
          <br />
          Monitor vital metrics and stay connected.
          </p>
        </header>

        <section className="features">
          <div className="feature">
            <h2>Real-Time Health Tracking</h2>
            <p>
              Monitor vital signs such as heart rate, oxygen levels, and body
              movements in real time.
            </p>
          </div>
          <div className="feature">
            <h2>Behavior Analysis</h2>
            <p>
              Detect anomalies like falls, prolonged immobility, or irregular
              activity patterns.
            </p>
          </div>
          <div className="feature">
            <h2>Instant Alerts</h2>
            <p>
              Real-time notifications for critical events to enable timely
              assistance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
