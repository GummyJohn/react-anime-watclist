import Recommendations from './Recommendations';
import fetchData from '../JS/api';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faXmark} from '@fortawesome/free-solid-svg-icons'

const Manga = ({addList, already}) => {
  const { id } = useParams();
  
  const {data: manga, loading, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/manga/${id}/full`)
  const {data} = manga;

  return (
  <div 
  className="border-2 rounded-2xl bg-white max-w-[1750px] m-auto py-1 px-2"
  >

    {error && 
      <div className='mt-56 h-screen'>
        <p className="text-red-600 text-4xl text-center mt-4">
          Sorry!  Something went wrong :
        </p>

        <p className="text-red-600 text-4xl text-center mt-4">        {errorMsg}
        </p>

        <p className="text-red-600 text-4xl text-center mt-4">Try refreshing the page</p>

        <div className="text-red-600 text-9xl text-center mt-4">
          <FontAwesomeIcon icon={faXmark}/> 
        </div>
     </div>
    }

    { 
      loading 
        ? 
      (
        <div className="w-full flex items-center justify-center mt-36 h-screen">
          <FontAwesomeIcon icon={faSpinner} spin 
            className="text-9xl"
          />
        </div>
      )
        :
      (
        <>
          {data && (
            <>
              <div className="flex justify-between items-center mt-36 phone_media_flex">

                <div className="w-6/12 ">
                  <div>
                    <img src={data.images.jpg.large_image_url} className='rounded-xl  w-10/12 h-full m-auto'/>
                  </div>

                  <div className="flex justify-center items-center mt-5">
                    <button
                      onClick={() => addList(data, 'manga')} 
                      className="border-2 py-2 px-4 border-orange-500 rounded-2xl bg-orange-500 text-white hover:bg-black"
                    >
                      {already ? 'Already Added' : 'Add to Manga List'}
                    </button>
                  </div>
                </div>
                
                <div className="w-6/12 p-5 text-center phone_media_width">
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

                  <div className='text-center'>
                    {data.genres.length === 0 ? 
                      ''
                      :
                      <div>
                        <p className="text-xl text-orange-500">Genres: </p>
                        {data.genres.map((genre) => {
                          return (
                            <span className="mx-1">{genre.name}</span>
                          )
                        })}
                      </div>
                    }
                  </div>



                  <p className="text-left mt-5 w-10/12 m-auto phone_media_textscroll">
                    <span className="text-xl text-orange-500">Description: </span>
                    {data.synopsis === null ? <p>Manga not popular enough to have a description about it!</p> : data.synopsis}
                  </p>

                </div>
              </div>

              <div className='my-5'>
                <Recommendations id={id} type='manga'/>
              </div>
            </>
          )}

        </>
      )
    }
  </div>
  )
}

export default Manga