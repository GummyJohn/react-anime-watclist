import {useState, useEffect} from 'react'
import fetchData from '../../JS/api'
import Card from '../Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSpinner, faXmark} from '@fortawesome/free-solid-svg-icons'


const AnimeSearch = () => {
  const [query, setQuery] = useState('');
  const [apiQuery, setApiQuery] = useState('');

  const {data: animes, loading, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/anime?q=${apiQuery}`)
  const { data } = animes;

  useEffect(() => {
    const timeoutSearch = setTimeout(() => {
      setApiQuery(query)
    }, 1000)

    return () => clearTimeout(timeoutSearch)
  }, [query])

  return (
    <div className="p-5 max m-auto">
      <div className='text-orange-500 p-4 my-4 text-center'>
        <label htmlFor="animeSearch" className='text-5xl'> 
          Search for Animes :
        </label>

        <div className='border bg-white w-3/4 flex justify-between items-center mt-3 m-auto px-4'>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          <input 
            className='p-2 w-full mx-3 focus:outline-none'
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
          <div className='mt-10'>
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

        {loading && (
          <div className="w-full flex items-center justify-center ">
              <FontAwesomeIcon icon={faSpinner} spin 
                className="text-9xl"
              />
          </div>
        )}
        {data && (
          <div className="grid grid-cols-5 gap-4 my-6">
            {data.map((anime) => {
              return (
                <Card
                  key={anime.mal_id}
                  id={anime.mal_id}
                  type='anime'
                  image={anime.images.jpg.image_url}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default AnimeSearch