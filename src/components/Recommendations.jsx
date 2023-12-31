import {useRef} from 'react'
import fetchData from '../JS/api'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Recommendations = ({ id, type}) => {
  const recommendRef = useRef();

  const {data: related, error, errorMsg} = fetchData(`https://api.jikan.moe/v4/${type}/${id}/recommendations`)

  const {data} = related;

  function clickRight(){
    recommendRef.current.scrollLeft =  recommendRef.current.scrollLeft + 1000;
  }
  function clickLeft(){
    recommendRef.current.scrollLeft =  recommendRef.current.scrollLeft - 1000;
  }
  return (
    <>
      {
        error 
          ? 
        ( 
          <div className='my-10'>
            <p className="text-red-600 text-4xl text-center mt-4">
              Sorry!  Something went wrong loading the recommended list:
            </p>

            <p className="text-red-600 text-4xl text-center mt-4">        {errorMsg}
            </p>
            <p className="text-red-600 text-4xl text-center mt-4">Try reloading the page!</p>
          </div>
        )
          :
        (
          <>
            {data && (
              <> 
                <h2 className="text-3xl text-orange-500 mb-2">
                Recommendations : {data.length}
                </h2>
      
                <div>               
                  <div 
                    ref={recommendRef}
                    className='
                      flex pt-2 px-3 bar overflow-auto  
                      scroll-smooth xl:overflow-hidden
                    ' 
                  >
                    {data.map((recommend) => {
                      return (
                        <div className="mr-[1.6rem]" key={recommend.entry.mal_id}>
                          <div className="h-6/6 w-56 p-2">
                            <Link to={`/${type}/${recommend.entry.mal_id}`}>
                              <motion.img 
                                whileHover={{boxShadow: '0px 0px 20px orange'}}
                                src={recommend.entry.images.jpg.large_image_url} 
                                alt="recommended-anime"  className='rounded-2xl h-[360px]'
                              />
                            </Link>
                            <p className='text-center'>{recommend.entry.title}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {data.length > 5 && (
                    <div className='hidden lg:inline '>
                      <div className='flex w-full  justify-between mt-[-1.5rem] items-center px-6'>
                        <button 
                          className=' border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black 
                        '
                          onClick={clickLeft}
                        >
                          <FontAwesomeIcon icon={faArrowLeft}/> 
                        </button>

                        <button 
                          className=' border-2 rounded-xl py-1 px-3 bg-orange-500 text-white border-orange-500 hover:bg-black 
                          '
                          onClick={clickRight}
                        >
                          <FontAwesomeIcon icon={faArrowRight} /> 
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

          </>
        )
      }  
    </>              
  )
}

export default Recommendations