import fetchData from "../JS/api";
import ReactPlayer from 'react-player'
import Characters from "./Characters";
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import Recommendations from "./Recommendations";

const Anime = ({already, addList}) => {
  const { id } = useParams();

  const {data: anime, loading, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/anime/${id}`)

  const {data} = anime;

  return (
    <div 
      className="border-2 rounded-2xl bg-white max m-auto py-1 px-2"
    >
      {loading && (
        <div className="w-full flex items-center justify-center mt-36">
          <FontAwesomeIcon icon={faSpinner} spin 
            className="text-9xl"
          />
        </div>
      )}

      {error && 
        <div>
          <p className="text-red-600 text-4xl text-center mt-4">Sorry! Something went wrong :</p>
          <p className="text-red-600 text-4xl text-center mt-4">{errorMsg}</p>
        </div>
      }

      {data && (
        <>
          <div className="flex justify-between items-center mt-36">
            <div className="w-6/12 ">
              <div>
                <img src={data.images.jpg.large_image_url} className='rounded-xl  w-10/12 h-full m-auto'/>
              </div>

              <div className="flex justify-center items-center mt-5">
                <button
                  onClick={() => addList(data, 'anime')} 
                  className="border-2 py-2 px-4 border-orange-500 rounded-2xl bg-orange-500 text-white hover:bg-black"
                >
                  {already ? 'Already Added' : 'Add to Watchlist'}
                </button>
              </div>
            </div>
            
            <div className="w-6/12 p-5 text-center">
              <h2 className="text-3xl my-5 text-orange-500 ">
                {data.title_english}
              </h2>
              <p className="my-5"> 
                <span className="text-orange-500 text-xl">Rated: </span>
                {data.rating}
              </p>

              <p className="my-5"><span className="text-orange-500 text-xl">{data.type}</span> - <span>{data.duration}</span></p>

              <p className="my-5">
                <span className="text-xl text-orange-500">{data.score}</span> 
                /10
              </p>

              <div>
                <span className="text-xl text-orange-500">Genres: </span>
                {data.genres.map((genre) => {
                  return (
                    <span className="mx-1">{genre.name}</span>
                  )
                })}
              </div>

      

              <p className="text-left mt-5 w-10/12 m-auto">
                <span className="text-xl text-orange-500">Description: </span>
                {data.synopsis}
              </p>

            </div>
          </div>
          
          <div>
            <Characters id={ id }/>
          </div>

          {/* trailer */}
          {data.trailer.url ?  (
            <div className="py-4  text-center mt-5">
              <h2 className="text-3xl text-orange-500">Trailer: </h2>
              <div className="flex justify-center items-center my-5">
                <ReactPlayer 
                  url={data.trailer.url}
                  controls={true}
                  height='450px'
                  width= '800px'
                />
              </div>
            </div>
            ) : null
          }

          <div className="my-5">
            <Recommendations id={ id } type='anime'/>
          </div>
        </>
      )}

    </div>
  )
}

export default Anime