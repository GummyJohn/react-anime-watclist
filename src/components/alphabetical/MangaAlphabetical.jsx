import { useState, useEffect } from 'react'
import fetchData from '../../JS/api'
import AlphButtons from '../alphButtons'
import Card from '../Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faArrowLeft, faArrowRight, faXmark} from '@fortawesome/free-solid-svg-icons'

const MangaAlphabetical = ({addList, already}) => {
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

          <div className="mt-2 mb-6 mt-36">
            <AlphButtons onClick={(e) => setMangaAlph(e.target.value)} letter={mangaAlph}/>
          </div>

          <div className="flex justify-between items-center px-5">
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


          <div>
            {error && 
              <div className='mt-36'>
                <p className="text-red-600 text-4xl text-center mt-4">
                  Sorry!  Something went wrong :
                </p>
    
                <p className="text-red-600 text-4xl text-center mt-4">        {errorMsg}
                </p>
    
                <div className="text-red-600 text-9xl text-center mt-4">
                  <FontAwesomeIcon icon={faXmark}/> 
                </div>
              </div>
            }

            {loading 
                ? 
              (
                <div className="w-full flex items-center justify-center mt-36">
                    <FontAwesomeIcon icon={faSpinner} spin 
                      className="text-9xl"
                    />
                </div>
              ) 
                :
              <>
                {data && (
                  <div 
                    className='m-auto max-w-[1750px] px-5'
                  >
                    <div className="grid grid-cols-5 gap-4 my-5 phone_media_grid">
                      {data.map((manga) => {
                        return (
                          <Card 
                            key={manga.mal_id}
                            type='manga'
                            id={manga.mal_id}
                            image={manga.images.jpg.image_url}
                            onClick={() => addList(manga, 'manga')}
                            already={already}
                            title={manga.title_english === null ? manga.title: manga.title_english}
                          />
                        )
                      })}

                    </div>    
                  </div>
                  )
                }
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MangaAlphabetical