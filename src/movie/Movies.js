import './Movies.css'
import { TbWorld } from 'react-icons/tb';
import { IoCalendarNumber } from 'react-icons/io5';
import { FaTheaterMasks } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import axios from 'axios'
import React, { useEffect , useState , useParams} from "react";
import { Helmet } from "react-helmet";
import BGpic from '../assets/bg.jpg'
import { useLocation } from "react-router-dom";

const Movies = () => {
  //push page to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "فیلم";
  }, []);

  const [movies , setMovies] = useState([]);

  const MovieId = window.location.pathname.split("/").pop()

    useEffect(()=>{
      axios.get(`https://moviesapi.ir/api/v1/movies/${MovieId}`)
        .then(d=>setMovies(d.data))
        .catch(e=>console.log(e))
    } , [])

console.log(movies)
    if(movies.images){
        var bg = `linear-gradient(black, black) , url(${movies.images[0]})`
    }else{
        var bg = `linear-gradient(black, black) , url(${BGpic})`
    }
    return(
        <div className='w-full h-screen banner' style={{direction:'rtl' , backgroundImage:bg}}>
            
            <div className='mx-auto w-10/12 banner_row flex justify-evenly pt-16'>

                <div className='w-4/12 image_container_movie'>
                    <img src={movies.poster} className="h-4/5 mt-12 rounded-tl-none rounded-tr-none rounded-b-xl"></img>
                </div>

                <div className='w-6/12 py-8 mt-4 text_container'>
                        <div className='flex justify-between imdb_name_container'>
        
                            <div>
                                <h1 className='text-2xl text-white font-bold'>دانلود فیلم {movies.title}</h1>
                                <hr className='my-4 w-12/12 red' style={{borderColor:"#ff3f34"}}></hr>
                            </div>
        
                            <div className='px-4 imdb_rating'>
                                <h1 className='text-center'>
                                    <span className='font-bold text-yellow-500'>{movies.imdb_rating}</span><span className='text-zinc-400'>/10</span>
                                </h1>
                                <hr className='w-8/12 mb-2 mt-1 mx-auto '></hr>
                                <h2 className='py-1 px-4 rounded-md bg-yellow-500 text-white mx-auto font-bold'>
                                    IMDB
                                </h2>
                            </div>
                        </div>

                        <h2 className='text-lg text-white flex my-4'>کیفیت : 1080p WEB-DL Full HD</h2>

                        <h2 className='text-lg text-white flex my-4'> <IoCalendarNumber className='red text-lg mx-2'/> سال ساخت: {movies.year}</h2>
                        <h2 className='text-lg text-white flex my-4'> <TbWorld className='red text-lg mx-2'/>محصول کشور: {movies.country}</h2>
                        <h2 className='text-lg text-white flex my-4'> <BsFillPersonFill className='red text-lg mx-2'/>کارگردان: {movies.director}</h2>
                        <h2 className='text-lg text-white flex my-4'> <FaTheaterMasks className='red text-lg mx-2'/>
                        ژانر: 
                        <div className='bg-zinc-800 px-2 py-1 rounded-md mx-2 text-sm'>
                            {movies.genres}
                        </div>
                        </h2>

                        <p className='text-md text-zinc-400 mt-4'>
                            خلاصه فیلم:<br></br>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و 
                            سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                            با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
                        </p>

                        <div className='flex justify-between'>
        
                            <div className='mt-8'>
                                <div className='flex'>
                                    <AiFillStar className='text-yellow-500 text-lg'/>
                                    <AiFillStar className='text-yellow-500 text-lg'/>
                                    <AiFillStar className='text-yellow-500 text-lg'/>
                                    <AiFillStar className='text-yellow-500 text-lg'/>
                                    <AiOutlineStar className='text-yellow-500 text-lg'/>
                                </div>
                                <h1 className='text-white'>
                                    از {movies.imdb_votes} رای
                                </h1>
                            </div>
        
                            <div className='mt-8 mb-4 flex text-white'>
                            <span className='ml-2 mt-1'>امتیاز منتقدین</span>
                                <div className='bg-green-500 rounded-lg w-fit py-2 px-2 text-white'>
                                    {movies.metascore}
                                </div>
                                
                            </div>
        
                        </div>

                </div>   

            </div>

        </div>
    )

}

export default Movies