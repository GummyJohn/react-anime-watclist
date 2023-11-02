import fetchData from "../../JS/api";
import Card from '../Card'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const AnimePopular = ({addList}) => {
  const [page, setPage] = useState(1)

  const {data: animes, loading, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/top/anime?page=${page}`)
  const { data } = animes

  return (
    <div className='m-auto max p-5 bg-black text-orange-500'>

      {error && 
        <div>
          <p className="text-red-600 text-4xl text-center mt-4">Sorry! Something went wrong :</p>
          <p className="text-red-600 text-4xl text-center mt-4">{errorMsg}</p>
        </div>
      }

      {loading && (
        <div className="w-full flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faSpinner} spin 
              className="text-9xl"
            />
        </div>
      )}

      {data && (
        <div className="px-4">
          <h2 className="text-5xl">
            Popular Animes:
          </h2>

          <div className="flex justify-between items-center mt-10 text-white">
            <button 
              onClick={() => setPage(page - (page > 1 ? 1: 0))}
              className='border-2 rounded-xl py-1 px-3 bg-orange-500 border-orange-500 hover:bg-black'
            >
              <FontAwesomeIcon icon={faArrowLeft}/> 
            </button>

            <div>
              <span className="text-xl text-orange-500">{page}</span>
              <span className="text-white">/4</span>
            </div>

            <button 
              onClick={() => setPage(page + (page < 4 ? 1: 0))}
              className='border-2 rounded-xl py-1 px-3 bg-orange-500 border-orange-500 hover:bg-black'
            >
              <FontAwesomeIcon icon={faArrowRight} /> 
            </button>
          </div>

          <div className="grid grid-cols-5 gap-4 my-6">
            {data.map((anime) => {
              return (
                <Card 
                  key={anime.mal_id}
                  type='anime'
                  id={anime.mal_id}
                  image={anime.images.jpg.image_url}
                  onClick={() => addList(anime)}
                />
              ) 
              }
            )}
          </div>
        </div>
      )}

    </div>
  )
}

export default AnimePopular;