import React from "react";
import { useFavorite } from "../context/FavoriteContext";

const Favorites = () => {
  const { favorites } = useFavorite();

  if (favorites.length === 0) {
    return <p className="text-center text-2xl text-bold  text-gray-500 mt-8 ">No favorite students added yet.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800">Favorite Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {favorites.map((student) => (
          <div
            key={student.id}
            className="border border-gray-200 rounded-lg shadow-md p-4 bg-white"
          >
            <h3 className="text-lg font-bold text-gray-800">{student.name}</h3>
            <p className="text-sm text-gray-600">Class: {student.class}</p>
          </div>
          
        ))}
        </div>
      </div>
  );
};

export default Favorites;