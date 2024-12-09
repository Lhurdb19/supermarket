import React from 'react'
import { useCountUp } from 'react-countup'

const CountUp1 = ()=> {
  useCountUp({ ref: 'counter1', start: 50, end: 10000})
  return <span id='counter1'/>
};

const CountUp2 = ()=> {
  useCountUp({ ref: 'counter2', start: 100, end: 50000})
  return <span id='counter2'/>
};

const CountUp3 = ()=> {
  useCountUp({ ref: 'counter3', start: 200, end: 500000})
  return <span id='counter3'/>
};

export default function Footer() {
  return (
    <div className='footer-component'>
      <h2 style={{color: 'white'}}>FOOTER</h2>

      <div className="counter-container">
        
        <div className="count-box">
          <h1><CountUp1/></h1>
          <h2>Daily Transaction</h2>
        </div>

        <div className="count-box">
          <h1><CountUp2/></h1>
          <h2>Monthly Transaction</h2>
        </div>

        <div className="count-box">
          <h1><CountUp3/></h1>
          <h2>Total Transaction</h2>
        </div>

      </div>
    </div>
  )
}
