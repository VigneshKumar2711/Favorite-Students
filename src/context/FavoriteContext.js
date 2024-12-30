import React, { createContext, useContext, useState } from "react";

// Create the context
const FavoriteContext = createContext();

// Create a provider component
export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // State to manage favorite students

  // Function to add a student to favorites
  const addFavorite = (student) => {
    setFavorites((prevFavorites) => [...prevFavorites, student]);
    alert(`${student.name} is added to Favorite list!`);
  };

  // Function to remove a student from favorites
  const removeFavorite = (student) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== student.id)
    );
    alert(`${student.name} is removed from Favorite list!`);
  };

  // The context value to be provided
  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

// Custom hook to use the context
export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};