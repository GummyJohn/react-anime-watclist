import { Link, useNavigate } from 'react-router-dom'
import fetchData from '../../JS/api'
import { useState, useRef, useEffect, useLayoutEffect  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faBars} from '@fortawesome/free-solid-svg-icons'
import Recommendations from '../Recommendations'

const MangaList = ({readList, setReadList}) => {
  const navigate = useNavigate();
  const mangalistCarousel = useRef();
  const [activeManga, setActiveManga] = useState({})

  function clickRight(){
    mangalistCarousel.current.scrollLeft =  mangalistCarousel.current.scrollLeft + 1252;
  }

  function clickLeft(){
    mangalistCarousel.current.scrollLeft =  mangalistCarousel.current.scrollLeft - 1252;
  }

  function remove(manga){
    const filteredList = readList.filter((eachA) => eachA.id !== manga.id);

    setReadList(filteredList)
    setActiveManga({})
  }

  function setDisplayManga(manga){
    setActiveManga(manga)
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if(Object.keys(activeManga).length === 0 && readList.length > 0){
      setActiveManga(readList[0])
    }
  }, [activeManga])


  return (
    <div className='text-orange-500 max m-auto p-4'>
      <h2 className='text-5xl mb-5 mt-36 '>
        My Manga List: <span>{readList.length}</span>
      </h2>

      <div className=''>
        <div className='flex items-center overflow-hidden scroll-smooth bar phone_media_fauto' ref={mangalistCarousel}>
          {readList.map((manga) => {
            return (
              <div 
                key={manga.id}
                onClick={() => setDisplayManga(manga)}
                className={activeManga.id === manga.id ? 'border-2 border-orange-500 rounded-2xl mx-3' : 'mx-3'}
              >
                <button >
                  <div className='h-80 w-56 p-2'>
                    <img src={manga.image} alt="manga" className='h-full w-full rounded-2xl'/>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      
        <div className='flex justify-between items-center my-5 px-4 phone_media_hidden'>
          <button 
            className='border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black '
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

      {Object.keys(activeManga).length !== 0 ? (
        <>
          <div 
            className='border border-orange-500 rounded-2xl phone_media_height'
          >
            <div className='flex juistify-between items-center my-6 phone_media_flex'>
              <div className='w-6/12'>
                <Link to={`/manga/${activeManga.id}`}>
                  <img src={activeManga.image} alt="manga"  className='h-3/5 w-10/12 m-auto rounded-2xl border hover:border-orange-500'/>
                </Link>
              </div>

              <div className='w-6/12 flex flex-col justify-center items-center phone_media_width'>

                <h2 className='text-3xl mb-3 w-8/12 text-center'>{activeManga.title}</h2>
                <p className='mb-3'>
                  <span className='text-xl'>{activeManga.rating}</span>  
                  <span className='text-white'>/10</span>
                </p>
                <p className='mb-3'> 
                  <span> Authors :</span> 
                  <span className='text-white'>{activeManga.authors.map((auth) => {
                    return (
                      <span key={auth.name}>{auth.name}, </span>
                    )                    
                  })}</span>
                </p>


                <div className='my-3 px-3'>
                  <p className = 'phone_media_textscroll'>
                    <span>Description: </span>
                    <span className='text-white'>{activeManga.synopsis}</span>
                  </p> 
                </div>

                <div className='mt-3'>

                  <button
                    onClick={() => navigate(`/manga/${activeManga.id}`)} 
                    className='border-2 py-2 px-4 rounded-2xl bg-orange-500 border-orange-500  text-white hover:bg-black mr-10'
                  >
                    More Info
                  </button>

                  <button
                    onClick={() => remove(activeManga)} 
                    className='border-2 py-2 px-4 rounded-2xl bg-orange-500 border-orange-500 text-white hover:bg-red-700'
                  >
                    Remove
                  </button>
                </div>

              </div>
            </div>
          </div>
          
          <div className='my-5'>
            <Recommendations id={activeManga.id} type='manga'/>
          </div>
        </>
      )
      : 
        <div className='flex flex-col justify-center items-center text-5xl my-24 x'>
          <h1>
            Your Manga List is currently Empty!
          </h1>
          <FontAwesomeIcon icon={faBars} 
            className='mt-10 text-9xl'
          />
        </div>
      }


  </div>
  )
}

export default MangaList