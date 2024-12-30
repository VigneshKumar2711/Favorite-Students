import React from "react";
import { useFavorite } from "../context/FavoriteContext";

const StudentCard = ({ student }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorite();

  const isFavorited = favorites.some((fav) => fav.id === student.id);

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white">
      <h3 className="text-lg font-bold text-gray-800">{student.name}</h3>
      <p className="text-sm text-gray-600">Class: {student.class}</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => addFavorite(student)}
          disabled={isFavorited}
          className={`px-4 py-2 rounded-md text-white ${
            isFavorited ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isFavorited ? "Added to Favorites" : "Favorite"}
        </button>
        <button
          onClick={() => removeFavorite(student)}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;