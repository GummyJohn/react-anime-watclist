import {useRef} from 'react'
import fetchData from '../JS/api'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Recommendations = ({ id, type}) => {
  const recommendRef = useRef();

  const {data: related, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/${type}/${id}/recommendations`)

  const {data} = related;

  function clickRight(){
    recommendRef.current.scrollLeft =  recommendRef.current.scrollLeft + 1160;
  }
  function clickLeft(){
    recommendRef.current.scrollLeft =  recommendRef.current.scrollLeft - 1160;
  }

  return (
    <>
      <h2 className="text-3xl text-orange-500 mb-2">
        Recommendations :
      </h2>

      {error && 
        <div className='my-10'>
          <p className="text-red-600 text-4xl text-center mt-4">
            Sorry!  Something went wrong loading the recommended list:
          </p>

          <p className="text-red-600 text-4xl text-center mt-4">        {errorMsg}
          </p>
          <p className="text-red-600 text-4xl text-center mt-4">Try reloading the page!</p>
        </div>
      } 

      {data && (
  
        <div className='flex justify-between items-center'>
          <button 
            className='border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black'
            onClick={clickLeft}
          >
            <FontAwesomeIcon icon={faArrowLeft}/> 
          </button>

          <div className='overflow-hidden flex scroll-smooth pt-2' ref={recommendRef}>
            {data.map((recommend) => {
              return (
                <div className="mx-1" key={recommend.entry.mal_id}>
                  <div className="h-6/6 w-56 p-2">
                    <Link to={`/${type}/${recommend.entry.mal_id}`}>
                      
                      <img src={recommend.entry.images.jpg.large_image_url} alt="recommended-anime"  className='rounded-2xl card_height'/>

                    </Link>
                    <p className='text-center'>{recommend.entry.title}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <button 
            className='border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black'
            onClick={clickRight}
          >
            <FontAwesomeIcon icon={faArrowRight} /> 
          </button>

        </div>

      )}
      
    </>              
  )
}

export default Recommendations