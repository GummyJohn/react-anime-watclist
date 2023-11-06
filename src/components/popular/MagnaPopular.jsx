import fetchData from "../../JS/api";
import Card from '../Card'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const MagnaPopular = ({already, addList}) => {
  const [page, setPage] = useState(1)

  const {data: mangas, loading, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/top/manga?page=${page}`)
  const {data} = mangas;

  return (
    <div className='m-auto max p-5 bg-black text-orange-500'>
      <h2 className="text-5xl mt-36 px-4">
        Popular Mangas:
      </h2>

      {error && 
        <div>
          <p className="text-red-600 text-4xl text-center mt-4">Sorry! Something went wrong :</p>
          <p className="text-red-600 text-4xl text-center mt-4">{errorMsg}</p>
        </div>
      }

      {
        loading ? 
        (
          <div className="w-full flex items-center justify-center text-white mt-36">
            <FontAwesomeIcon icon={faSpinner} spin 
              className="text-9xl"
            />
        </div>
       )
        :
       ( <div className="px-4 my-2">
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
            {data && data.map((manga) => {
              return (
                <Card 
                  key={manga.mal_id}
                  type='manga'
                  id={manga.mal_id}
                  image={manga.images.jpg.image_url}
                  already={already}
                  onClick={() => addList(manga, 'manga')}
                />
              ) 
              }
            )}
          </div>
        </div>
       )
      }

    </div>
  )
}

export default MagnaPopular