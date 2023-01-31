import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainMovies from './components/mainMovies/MainMovies';
import Movies from './movie/Movies'
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Slider from './components/slider/Slider';


function App() {
  //change tabBar name
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.initialize("UA-237395014-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <React.Fragment>
      <div className="body-wrap z-50 overflow-x-hidden">
        {/*-------------Header-------------- */}
        <div className="fixed z-50 w-full">
          <Header />
        </div>

        {/*------------------------------Routes----------------------------- */}
        <div className="md:container md:mx-auto">
          <Routes>
            {/*-------------MainMovies-------------- */}
            <Route path="/" element={<MainMovies />} />
            {/*-------------Movies-------------- */}
            <Route path="/Movies/:id" element={<Movies />} />
          </Routes>
        </div>
        {/*--------------Footer-------------- */}
        <div className="new-font">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
