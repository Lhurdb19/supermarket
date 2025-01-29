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
    <>
    <div className="about-container">
        <div className="about-text">
          <h2>THE FOUNDER</h2>
          <p>Donec fermentum nulla eget mauris fringilla ultricies Proin volutpat eleifend leo, non interdum sapien posuere sed. Ut consectetur, nisi sed faucibus tempus, sem dui hendrerit erat, nec commodo felis nisl a lectus. Suspendisse eget lacus mattis, suscipit ex non, auctor urna
            taste, and the positive impact on the planet.
          </p>
        </div>
        <img src="https://cdn.azeusconvene.com/wp-content/uploads/Women-CEOs-and-Business-Leaders_thumbnail.jpg" alt="" />
      </div>
    <div className="about-component">
      
      <div className="company-container">
        <div className="company-con">
          <div className="company-text">
          <h2>THE STORE</h2>
          <p>Donec ultricies convallis facilisis. Morbi at risus laoreet, mattis odio quis, volutpat quam. Sed sit amet lectus interdum, lobortis velit vitae, efficitur est. Integer nec erat ac augue lobortis tristique. Proin non tortor vitae libero rutrum posuere. Suspendisse ornare leo sed nulla varius, id facilisis arcu placerat. Sed finibus, neque vitae dictum convallis, tortor nisl tincidunt est, in accumsan est tellus non tortor.</p>
          </div>
          <img src="https://campbellrigg.com/images/uploads/23.01.21/Aldi-China1.jpg" alt="" />
        </div>

        <div className="company-con">
          <img src="https://arirms.com/wp-content/uploads/2024/05/Featured-Image-The-Future-of-Grocery-StoresGrocery-IndustryTrends.jpg" alt="" />
          <div className="company-text">
          <h2>OUR MISSION</h2>
          <p>Donec ultricies convallis facilisis. Morbi at risus laoreet, mattis odio quis, volutpat quam. Sed sit amet lectus interdum, lobortis velit vitae, efficitur est. Integer nec erat ac augue lobortis tristique. Proin non tortor vitae libero rutrum posuere. Suspendisse ornare leo sed nulla varius, id facilisis arcu placerat. Sed finibus, neque vitae dictum convallis, tortor nisl tincidunt est, in accumsan est tellus non tortor.</p>
          </div>
        </div>

        <div className="company-con">
          <div className="company-text">
          <h2>OUR VISION</h2>
          <p>Donec ultricies convallis facilisis. Morbi at risus laoreet, mattis odio quis, volutpat quam. Sed sit amet lectus interdum, lobortis velit vitae, efficitur est. Integer nec erat ac augue lobortis tristique. Proin non tortor vitae libero rutrum posuere. Suspendisse ornare leo sed nulla varius, id facilisis arcu placerat. Sed finibus, neque vitae dictum convallis, tortor nisl tincidunt est, in accumsan est tellus non tortor.</p>
          </div>
          <img src="https://www.wilderlawgroup.com/wp-content/uploads/workers-compensation-grocery-employees-yay21254300.jpg" alt="" />
        </div>
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
    </>
  );
}

export default About;
