import React from "react";
import { Link } from "react-router-dom";
import CardList from "./Card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-min bg-gray-100 text-gray-900">
      <div className="max-w-2xl text-center bg-white shadow-lg rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">¡Bienvenido a TutorialMaker!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Aquí podrás explorar y descubrir una variedad de tutoriales creados
          por la comunidad. Aprende nuevas habilidades y amplía tus
          conocimientos con las contribuciones de otros desarrolladores.
        </p>
        <Link
          to="/home/creartema"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-500 transition shadow-lg"
        >
          Crear un Tutorial
        </Link>
      </div>

      <CardList />
    </div>
  );
};

export default Home;
