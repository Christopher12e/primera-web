import React from "react";
import "./styles.css";

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="overlay">
          <h1 className="title">Barbería & Estilo</h1>
          <p className="subtitle">
            ¡Bienvenido {userName}! Tu mejor look comienza aquí 💈
          </p>
          <button className="btn-agendar">Reservar Cita</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
