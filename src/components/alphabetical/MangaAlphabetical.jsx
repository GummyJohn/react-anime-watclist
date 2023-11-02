import { useState, useEffect } from 'react'
import fetchData from '../../JS/api'
import AlphButtons from '../alphButtons'
import Card from '../Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const MangaAlphabetical = () => {
  const mangaStorageLetter = localStorage.getItem('mangaLetter')

  const [mangaAlph, setMangaAlph] = useState(mangaStorageLetter || 'a')
  const [page, setPage] = useState(1)

  const {data: mangas, loading, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/manga?letter=${mangaAlph}&page=${page}`)

  const {data} = mangas

  useEffect(() => {
    localStorage.setItem('mangaLetter', mangaAlph)
    setPage(1)
  }, [mangaAlph])

  return (
    <div className="bg-black h-screen">
      <div className="text-white bg-black">

        <div className="mx-auto p-3 w-full ">
          <h1></h1>
          <div className="mt-2 mb-6">
            <AlphButtons onClick={(e) => setMangaAlph(e.target.value)} letter={mangaAlph}/>
          </div>

          <div>
            {error && 
              <div>
                <p className="text-red-600 text-4xl text-center mt-4">Sorry! Something went wrong :</p>
                <p className="text-red-600 text-4xl text-center mt-4">{errorMsg}</p>
              </div>
            }

            {loading && (
              <div className="w-full flex items-center justify-center ">
                  <FontAwesomeIcon icon={faSpinner} spin 
                    className="text-9xl"
                  />
              </div>
            )}

            {data && (
              <div 
                className='m-auto max p-5'
              >
                <div className="flex justify-between items-center">

                  <button 
                    onClick={() => setPage(page - (page > 1 ? 1: 0))}
                    className='border-2 rounded-xl py-1 px-3 bg-orange-500 border-orange-500 hover:bg-black'
                  >
                    <FontAwesomeIcon icon={faArrowLeft}/> 
                  </button>

                  <div>
                    <span className="text-xl text-orange-500">{page}</span>
                    <span className="text-white">/50</span>
                  </div>

                  <button 
                    onClick={() => setPage(page + (page < 50 ? 1: 0))}
                    className='border-2 rounded-xl py-1 px-3 bg-orange-500 border-orange-500 hover:bg-black'
                  >
                    <FontAwesomeIcon icon={faArrowRight} /> 
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-4 my-5">
                  {data.map((manga) => {
                    return (
                      <Card 
                        key={manga.mal_id}
                        type='manga'
                        id={manga.mal_id}
                        image={manga.images.jpg.image_url}
                      />
                    )
                  })}

                </div>    
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MangaAlphabetical