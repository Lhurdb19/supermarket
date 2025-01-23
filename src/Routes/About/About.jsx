import React from "react";
import { useCountUp } from "react-countup";
import "./About.css";

const CountUp1 = () => {
  useCountUp({ ref: 'counter1', start: 0, end: 450})
  return <span id="counter1"/>
};

const CountUp2 = () => {
  useCountUp({ ref: 'counter2', start: 10, end: 363})
  return <span id="counter2"/>
};

const CountUp3 = () => {
  useCountUp({ ref: 'counter3', start: 10000, end: 30690})
  return <span id="counter3"/>
};

const CountUp4 = () => {
  useCountUp({ ref: 'counter4', start: 1000, end: 7653})
  return <span id="counter4"/>
};



function About() {

  return (
    <div className="about-component">
      {/* <h2>ABOUT</h2> */}
      <div className="about-container">
        <div className="about-text">
          <h2>We Prefer only Organic Foods</h2>
          <p>
            "Organic Foods: A Healthy and Sustainable Choice" One of the primary
            benefits of organic foods is their potential to be healthier, as
            they are free from harmful chemical residues. Studies suggest that
            organic produce often contains higher levels of certain nutrients,
            such as antioxidants, compared to conventionally grown alternatives.
            Organic meats and dairy products also come from animals raised on
            organic feed, with strict regulations ensuring they are free from
            antibiotics, hormones, and have access to pasture. Organic farming
            also plays a crucial role in environmental sustainability. By
            avoiding synthetic chemicals and promoting biodiversity, organic
            agriculture reduces pollution, conserves water, and enhances soil
            health. It also encourages ethical treatment of animals and
            minimizes the carbon footprint associated with food production.
            Although organic foods may be slightly more expensive, many
            consumers find the investment worthwhile for better health, improved
            taste, and the positive impact on the planet.
          </p>
        </div>
        <img src="https://i.ibb.co/8DC4W8S/lime-removebg-preview.png" alt="" />
      </div>

      <div className="countup-container">
        <div className="counter-box">
          <h1><CountUp1/><p>+</p></h1>
          <p>ITEMS</p>
        </div>

        <div className="counter-box">
          <h1><CountUp2/><p>+</p></h1>
          <p>STORES</p>
        </div>
        <div className="counter-box">
          <h1><CountUp3/><p>+</p></h1>
          <p>HAPPY USERS</p>
        </div>

        <div className="counter-box">
          <h1><CountUp4/><p>+</p></h1>
          <p>5 STAR REVIEWS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
