import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home-component'>
      <h2>HOME</h2>
      <div className="organic-container">
        <div className="organic-healthy-farm-container">
          <div className="organic-con">
            <div className="text">
              <h4>FARM FRESH</h4>
              <h2>Organic & Healthy</h2>
              <p>Donec sed mauris non quam molestie imperdiet.
              Integer ullamcorper, purus sit amet hendrerit tincidunt</p>
            </div>
            <img src="https://mcprod.spencers.in/media/catalog/category/4403.png" alt="" />
          </div>

          <div className="healthy-farm-container">
          <div className="healthy-con">
            <div className="text">
              <h3>Healthy Juices</h3>
              <a href="/">Shop Now</a>
            </div>
            <img src="https://i.ibb.co/9TQdHNr/my-bottle-removebg-preview.png" alt="" />
          </div>
          <div className="farm-con">
            <div className="text">
              <h3>Farm Fresh</h3>
              <a href="/">Shop Now</a>
            </div>
            <img src="https://i.ibb.co/Hx67hCC/corn-removebg-preview-2.png" alt="" />
          </div>
          </div>
        </div>

        <div className="fruit-species-container">
          <div className="fruit-con">
            <div className="text">
              <h3>Organic Fruits</h3>
              <a href="/">Shop Now</a>
            </div>
            <img src="https://i.ibb.co/0Kyprv1/ocal-pineapple-removebg-preview.png" alt="" />
          </div>
          <div className="species-con">
            <div className="text">
              <h3>Organic Species</h3>
              <a href="/">Shop Now</a>
            </div>
            <img src="https://i.ibb.co/wpfdZWn/images-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
