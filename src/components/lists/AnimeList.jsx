import { Link, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useState, useRef, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faBars} from '@fortawesome/free-solid-svg-icons'
import Recommendations from '../Recommendations'
import { motion } from 'framer-motion'

const AnimeList = ({ watchList, setWatchList}) => {
  const navigate = useNavigate();
  const watchlistCarousel = useRef();
  const [activeAnime, setActiveAnime] = useState({})

  function clickRight(){
    watchlistCarousel.current.scrollLeft =  watchlistCarousel.current.scrollLeft + 1000;
  }

  function clickLeft(){
    watchlistCarousel.current.scrollLeft =  watchlistCarousel.current.scrollLeft - 1000;
  }

  function remove(anime){
    const filteredList = watchList.filter((eachA) => eachA.id !== anime.id);

    setWatchList(filteredList)
    setActiveAnime({})
  }

  function setDisplayAnime(anime){
    setActiveAnime(anime)
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if(Object.keys(activeAnime).length === 0 && watchList.length > 0){
      setActiveAnime(watchList[0])
    }
  }, [activeAnime])

  return (
    <div className='text-orange-500 m-auto max-w-[1750px] p-4'>
      <h2 className='text-5xl mb-5 mt-36 '>
        My Watchlist: <span>{watchList.length}</span>
      </h2>

      <div className='sm:mb-5'>
        <div 
          ref={watchlistCarousel}
          className='
            flex items-center overflow-auto bar 
            lg:overflow-hidden lg:scroll-smooth
          ' 
        >
          {watchList.map((anime) => {
            return (
              <div 
                key={anime.id}
                onClick={() => setDisplayAnime(anime)}
                className={activeAnime.id === anime.id ? 'border-2 border-orange-500 rounded-2xl mx-3' : 'mx-3'}
              >
                <button >
                  <div className='h-80 w-56 p-2'>
                    <img src={anime.image} alt="anime" className='h-full w-full rounded-2xl'/>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
        
        <div 
          className='
            hidden sm:hidden 
            lg:flex lg:justify-between lg:items-center lg:mt-2 lg:mb-5 lg:px-4 lg:inline
          '
        >
          <button 
            className='border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black'
            onClick={clickLeft}
          >
            <FontAwesomeIcon icon={faArrowLeft}/> 
          </button>


          <button 
            className='border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black'
            onClick={clickRight}
          >
            <FontAwesomeIcon icon={faArrowRight}/> 
          </button>

        </div>
      </div>

      {Object.keys(activeAnime).length !== 0 ? (
        <>
          <div 
            className='h-full border border-orange-500 rounded-2xl'
          >
            <div className='flex flex-col juistify-between items-center my-6 sm:flex-row'>
              <div className='w-6/12'>
                <Link to={`/anime/${activeAnime.id}`}>
                  <motion.img 
                    whileHover={{boxShadow: '0px 0px 20px orange'}}
                    src={activeAnime.image} alt="anime"  
                    className='h-3/5 w-10/12 m-auto rounded-2xl border hover:border-orange-500'
                  />
                </Link>
              </div>

              <div className=' w-full flex flex-col justify-center items-center sm:w-6/12'>

                <h2 className='text-3xl mb-3 w-8/12 text-center'>{activeAnime.title}</h2>
                <p className='mb-3'>
                  <span>Rating : </span>
                  <span className='text-white'>{activeAnime.rating}</span>
                </p>
                <p className='mb-3'> 
                  <span> Duration : {activeAnime.episodes !== undefined ? activeAnime.episodes : ''}</span> 
                  <span className='text-white'>{activeAnime.duration}</span>
                </p>

                <div className='mb-3 rounded-2xl '>
                  {activeAnime.trailer.url === null ? 
                  <p className='h-[350px] overflow-auto p-[.8rem] sm:w-10/12 sm:m-auto '>
                    <span>Description: </span>
                    <span className='text-white'>{activeAnime.synopsis}</span> 
                  </p> : 
                  <div 
                    className='
                      h-[200px] w-full 
                      lg:h-[250px] lg:w-[450px]
                      xl:h-[300px] lg:w-[500px]
                    '
                  >
                    <ReactPlayer 
                      url={activeAnime.trailer.url}
                      controls={true}
                      height= '100%'
                      width = '100%'
                      className = 'border border-orange-500'
                    />
                  </div>
                  }
                </div>

                <div className='mt-3'>

                  <button
                    onClick={() => navigate(`/anime/${activeAnime.id}`)} 
                    className='border-2 py-2 px-4 rounded-2xl bg-orange-500 border-orange-500  text-white hover:bg-black mr-10'
                  >
                    More Info
                  </button>

                  <button
                    onClick={() => remove(activeAnime)} 
                    className='border-2 py-2 px-4 rounded-2xl bg-orange-500 border-orange-500 text-white hover:bg-red-700'
                  >
                    Watched
                  </button>
                </div>

              </div>
            </div>
          </div>
          
          <div className='my-5'>
            <Recommendations 
              id={activeAnime.id} 
              type='anime' 
            />
          </div>
        </>
      )
      : 
      <div className='flex flex-col justify-center items-center text-5xl my-24'>
        <h1>
          Your Watchlist is currently Empty!
        </h1>
        <FontAwesomeIcon icon={faBars} 
          className='mt-10 text-9xl'
        />
      </div>
      }


    </div>
  )
}

export default AnimeList