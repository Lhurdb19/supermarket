import React, { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
        const [favorites, setFavorites] = useState(() => {
            const savedFavorites = localStorage.getItem('favorites');
            return savedFavorites ? JSON.parse(savedFavorites) : [];
          });
        
          // Function to save favorites to localStorage whenever favorites change
          useEffect(() => {
            localStorage.setItem('favorites', JSON.stringify(favorites));
          }, [favorites]);

    const addToFavorites = (item) => {
        setFavorites((prev) => [...prev, item]);

    };

    const removeFromFavorites = (id) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id))
    };

    const isFavorite = (id) => favorites.some((item) => item.id === id);


    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>{children}</FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
