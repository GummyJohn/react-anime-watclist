import { useRef } from 'react'
import fetchData from '../JS/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Characters = ({id}) => {
  const carouselContainer = useRef();

  const {data: characters , error, errorMsg} = fetchData(`https://api.jikan.moe/v4/anime/${id}/characters`)
  const { data } = characters;

  function clickRight(){
    carouselContainer.current.scrollLeft =  carouselContainer.current.scrollLeft + 1140;
  }

  function clickLeft(){
    carouselContainer.current.scrollLeft =  carouselContainer.current.scrollLeft - 1140;
  }

  return (
    <>
      {data && (
        <div className="my-3 p-3">
          <h2 className="text-3xl text-orange-500 mb-2">Characters: </h2>
          <div className="flex justify-center items-center">
            <button 
              className=' hidden border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black sm:inline
              '
              onClick={clickLeft}
            >
              <FontAwesomeIcon icon={faArrowLeft}/> 
            </button>
    
            <div className="flex overflow-auto sm:overflow-hidden sm:scroll-smooth " ref={carouselContainer}>        
    
              {data.map((char) => {
                return (
                  <div className="border-2 border-orange-500 mx-2 rounded-2xl " key={char.character.mal_id
                  }>
    
                    <div className="h-52 w-52 p-2">
                        <img src={char.character.images.jpg.image_url}  
                        alt="character" 
                        className="w-full h-full rounded-2xl"
                        />
                    </div>
    
                    <div className="text-center p-1">
                      <p className="text-sm">{char.character.name}</p>
                      <p>{char.role}</p>
                    </div>
    
                  </div>
                )
              })}
            </div>
              
            <button 
                className='
                hidden border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black 
                sm:inline
              '
              onClick={clickRight}
            >
              <FontAwesomeIcon icon={faArrowRight} /> 
            </button>
          </div>
        </div>

      )}
    </>
  )
}

export default Characters