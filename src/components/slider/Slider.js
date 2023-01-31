import { useState } from "react";
import React, { Component } from "react";
import './Slider.css'
import BreakingBad from '../../assets/breakingBad.jpeg'
import godfather from '../../assets/godfather.jpeg'
import narcos from '../../assets/narcos.jpeg'

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
    setSelectedIndex(nextIndex);
  };

  const check = index => setSelectedIndex(index);

    return (
      <div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mt-4 justify-between h-3/4 mb-56">

          <div className="w-full  md:mb-0 mb-6 flex text-center items-center">
          <div className="w-1/12 py-64 md:mb-0 mb-6 flex flex-col text-center items-center btn-container">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-red-600 mb-5 flex-shrink-0 border-1 border-red-600">
              <button onClick={checkNext}>{'<'}</button>
            </div>
          </div>
            <section
              id="slider"
              className="w-4/6 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onClick={() => check(0)}
                onChange={() => console.log("change")}
              />
              <input 
                type="radio" 
                name="slider" 
                id="s2" 
                checked={selectedIndex === 1}
                onClick={() => check(1)}
                onChange={() => console.log("change")}
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={selectedIndex === 2}
                onClick={() => check(2)}
                onChange={() => console.log("change")}
              />

              <label htmlFor="s1" id="slide1">
                <img src={BreakingBad}></img>
              </label>

              <label htmlFor="s2" id="slide2">
                <img src={godfather}></img>
              </label>

              <label htmlFor="s3" id="slide3">
                <img src={narcos}></img>
              </label>



            </section>
              <div className="w-1/12 py-64 md:mb-0 mb-6 flex flex-col text-center items-center btn-container">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-red-600 mb-5 flex-shrink-0 border-1 border-red-600">
              <button onClick={checkNext}>{'>'}</button>
            </div>
          </div>
          </div>

        </div>
      </div>
    );
}
export default Slider