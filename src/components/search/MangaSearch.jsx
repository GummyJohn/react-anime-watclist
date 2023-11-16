import {useState, useEffect} from 'react'
import fetchData from '../../JS/api'
import Card from '../Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSpinner, faXmark} from '@fortawesome/free-solid-svg-icons'

const MangaSearch = ({addList, already}) => {
  const [query, setQuery] = useState('');
  const [apiQuery, setApiQuery] = useState('');

  const {data: mangas, loading, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/manga?q=${apiQuery}`)
  const { data } = mangas;

  useEffect(() => {
    const timeoutSearch = setTimeout(() => {
      setApiQuery(query)
    }, 1000)

    return () => clearTimeout(timeoutSearch)
  }, [query])

  return (
    <div className="p-5 max-w-[1750px] m-auto">
      <div className='text-orange-500 p-4 my-4 text-center mt-36'>
        <label htmlFor="animeSearch" className='text-5xl'> 
          Search for Mangas :
        </label>

        <div className='border bg-white w-3/4 flex justify-between items-center mt-5 m-auto px-4'>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          <input 
            className='p-2 w-full mx-3 focus:outline-none text-black'
            type="text" 
            id="animeSearch"
            autoComplete = 'off'
            autoCapitalize='on'
            placeholder='naruto....'
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
          />

          <button 
            onClick={() => setQuery('')}
          >
            X
          </button>
        </div>
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

        {
          loading 
            ? 
          (
            <div className="w-full flex items-center justify-center mt-20 text-white">
                <FontAwesomeIcon icon={faSpinner} spin 
                  className="text-9xl"
                />
            </div>
          )
            :
          <>
            {data && (
              <div className="
              grid grid-cols-1 gap-4 my-6 sm:grid-cols-3 md:grid-cols-4
              
              ">
                {data.map((manga) => {
                  return (
                    <Card
                      key={manga.mal_id}
                      id={manga.mal_id}
                      type='manga'
                      image={manga.images.jpg.image_url}
                      onClick={() => addList(manga, 'manga')}
                      already={already}
                      title={manga.title_english === null ? manga.title: manga.title_english}
                    />
                  )
                })}
              </div>
              )
            }
          </>
        }
      </div>
    </div>
  )
}

export default MangaSearch