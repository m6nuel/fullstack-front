import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-min bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <header className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenido a TutorialMaker
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Crea y publica tutoriales de manera fácil y rápida para compartir tu
          conocimiento con otros desarrolladores. Explora tutoriales creados
          por la comunidad y aprende algo nuevo cada día.
        </p>
      </header>

      <div className="mt-8">
        <Link
          className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-700 transition"
          to="/home"
        >
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
