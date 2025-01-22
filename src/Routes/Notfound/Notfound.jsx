import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Notfound.css';

export default function Notfound() {
  const navigate = useNavigate()



  return (
    <div className='notfound-component'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WEJEU9Zmrt_U-WdctDumYnDEumr1Jv0UEw&s" alt="" />

      <p style={{cursor: 'pointer'}} onClick={()=> navigate('/')}>REDIRECTING...</p>
    </div>
  )
}
