import Recommendations from './Recommendations';
import fetchData from '../JS/api';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'

const Manga = () => {
  const { id } = useParams();
  
  const {data: manga, loading, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/manga/${id}/full`)

  const {data} = manga;

  console.log(data)
  return (
    <div 
    className="border-2 rounded-2xl bg-white max m-auto py-1 px-2"
  >
    {loading && (
      <div className="w-full flex items-center justify-center mt-5">
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
        <div className="flex justify-between items-center ">
          
          <div className="w-6/12 p-5">
            <img src={data.images.jpg.large_image_url} className='rounded-xl  w-10/12 h-full m-auto'/>
          </div>
          
          <div className="w-6/12 p-5 text-center">
            <h2 className="text-3xl my-5 text-orange-500">
              {data.title_english === null ? data.title : data.title_english}
            </h2>

            <p className="my-5">
              <span className="text-orange-500 text-xl">{data.type}</span> 
            </p>

            <p className="my-5">
              <span className="text-xl text-orange-500">{data.score}</span> 
              /10
            </p>

            <div>
              {data.genres.length === 0 ? 
                ''
                :
                <div>
                  <span className="text-xl text-orange-500">Genres: </span>
                  {data.genres.map((genre) => {
                    return (
                      <span className="mx-1">{genre.name}</span>
                    )
                  })}
                </div>
              }
            </div>

    

            <p className="text-left mt-5 w-10/12 m-auto">
              <span className="text-xl text-orange-500">Description: </span>
              {data.synopsis === null ? <p>Manga not popular enough to have a description about it!</p> : data.synopsis}
            </p>

          </div>
        </div>

        <div className='my-2'>
          <Recommendations id={id} type='manga' />
        </div>
      </>
    )}
  </div>
  )
}

export default Manga