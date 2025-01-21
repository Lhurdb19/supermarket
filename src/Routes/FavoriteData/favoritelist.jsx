import React from 'react';
import { useFavorites } from './favoritecontext';
import './Favorite.css'

export default function Favoritelist() {
    const { favorites } = useFavorites();

  return (
    <div className='favorite-component'>
      <h2>Favorite</h2>
      <ul>
        {favorites.map((item) => (
            <li key={item.id} className='favorite-info'>
                <img src={item.image[0]} alt={item.name} />
            </li>
        ))}
      </ul>
      
    </div>
  )
}
