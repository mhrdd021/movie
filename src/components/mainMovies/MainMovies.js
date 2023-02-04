import { useState , useEffect } from 'react';
import React from 'react'
import { TbWorld } from 'react-icons/tb';
import { IoCalendarNumber } from 'react-icons/io5';
import { FaTheaterMasks } from 'react-icons/fa';
import axios from 'axios';
import './MainMovies.css'
import { Link } from "react-router-dom";
import Slider from '../slider/Slider';

const MainMovies = () => {

    const [movies , setMovies] = useState([]);
  //push page to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "فیلم";
  }, []);
  
    useEffect(()=>{
      axios.get(`https://moviesapi.ir/api/v1/movies?page=${1}`)
        .then(d=>setMovies(d.data.data))
        .catch(e=>console.log(e))
    } , [])
  
    return (
      <div>
      <Slider />

      <div className='text-white md:pt-16' style={{direction:"rtl"}}>
      {
        movies.map((movie , i)=>(
          <div key={i} className="w-8/12 rounded-xl mx-auto my-8 md:pb-2 pb-12 flex movie_card">
  
            <div className='w-3/12 image_container'>
              <img src={movie.poster} className="p-8 h-auto w-full" style={{borderRadius:"3rem"}}></img>
            </div>
  
            <div className='w-9/12 py-8 text_container'>
              <div className='flex justify-between imdb_name_container pr-4 md:pr-1'>
  
                  <div>
                      <h1 className='text-lg'>دانلود فیلم {movie.title}</h1>
                      <hr className='my-4 md:w-12/12 red w-8/12' style={{borderColor:"#ff3f34"}}></hr>
                  </div>
  
                  <div className='px-4 imdb_rating'>
                      <h1 className='text-center'>
                          <span className='font-bold text-yellow-500'>{movie.imdb_rating}</span><span className='text-zinc-400'>/10</span>
                      </h1>
                      <hr className='w-8/12 mb-2 mt-1 mx-auto '></hr>
                      <h2 className='py-1 px-4 rounded-md bg-yellow-500 text-white mx-auto font-bold'>
                          IMDB
                      </h2>
                  </div>
              </div>
  
  
              <h2 className='text-sm flex my-4 pr-4 md:pr-1'>کیفیت : 1080p WEB-DL Full HD</h2>
              <h2 className='text-sm flex my-4 pr-4 md:pr-1'> <FaTheaterMasks className='red text-lg mx-2'/>ژانر: {movie.genres + ""}</h2>
              <h2 className='text-sm flex my-4 pr-4 md:pr-1'> <IoCalendarNumber className='red text-lg mx-2'/> سال ساخت: {movie.year}</h2>
              <h2 className='text-sm flex my-4 pr-4 md:pr-1'> <TbWorld className='red text-lg mx-2'/>محصول کشور: {movie.country}</h2>
  
              <p className='text-sm text-zinc-400 md:pl-6 px-2 text-right'>
                  خلاصه فیلم:<br></br>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و 
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                   با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
              </p>
  
  
              <Link to={`/movies/${movie.id}`}>
                <button className="button-48" role="button" value={movie.id}>
                    <span className="text">
                        ادامه و دانلود
                    </span>
                </button>
              </Link>

         
  
            </div>
  
          </div>
        ))
      }
      
      </div>

      </div>
    )

}

export default MainMovies