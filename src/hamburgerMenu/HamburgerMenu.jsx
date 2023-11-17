import { useReducer, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import  {reducer, controls, actions}  from '../JS/reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

function HamburgerMenu({added, animelist, mangalist}) {
  // const { pathname } = useLocation()
  const [showSections, setShowSections] = useState({
    showMenu: false,
    showBrowse: false,
    showPopular: false,
    showA: false,
    showSearch: false,
    showList: false,
  })

  function toggleSection(section){
    setShowSections({
      ...showSections,
      [section]: !showSections[section],
    });
  }

  function closeAll(){
    setShowSections(() => {
      const updatedSections = {};
      
      Object.keys(showSections).forEach((section) => {
        updatedSections[section] = false;
      });

      return updatedSections;
    });
  }

  const burgerOneRotate = {
    transform: showSections.showMenu ? 'rotate(45deg) translate(3px, 2px)' : 'rotate(0)',
  }
  const burgerThreeRotate = {
    transform: showSections.showMenu ? 'rotate(-45deg) translate(2px, -2px)' : 'rotate(0)',
  }
 
  return (
    <div 
      className= 
        'sm:inline md:hidden'
    >

      {added && (
        <div className='relative top-16 left-0 text-white'>
          <div 
            className='absolute h-5 w-5 left-7 top-[-1px] rotate-45 bg-black border-orange-500 border-t-2 border-l-2 bg-black z-10'
          >
          </div>
          <p className='absolute border-2 py-2 px-4 w-48 left-1 top-2 border-orange-500 rounded-2xl bg-black'>
            Added to your list!
          </p>
        </div>
        )
      }

      <div 
        className='bg-black border-2 h-10 w-10 border-orange-500 flex  items-center rounded-[50%] m-5 fixed z-30 
        '>

        <button 
          onClick={() => toggleSection('showMenu')}
          className='flex flex-col justify-center items-center h-full w-full rounded-[50%]'
        >

          <div className ='flex flex-col justify-evenly items-center h-[50%] w-[50%] rounded-[50%]'>
            <div 
              style={burgerOneRotate}
              className='bg-orange-500 h-1 w-full rounded-2xl'
            ></div>

            <div
              style={burgerThreeRotate}
              className='bg-orange-500 h-1 w-full rounded-2xl '
            ></div>
          </div>

        </button>
      </div>

      <AnimatePresence>
        {showSections.showMenu && (
            <motion.div
              initial={{x: '-100vw'}}
              animate={{x: 0}}
              transition={{stiffness: 10, duration: .2}}
              exit={{x: '-100vw'}}
              className='h-screen w-44 fixed z-20 bg-black border-orange-500 border overflow-auto'
            >
              <div className='mt-20 w-full '>
                <div className='flex justify-center items-center'>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="75px" height="75px" fill='#fff'
                  >
                    <path
                      d="M 32.84375 1.96875 C 32.625 2.007813 32.429688 2.117188 32.28125 2.28125 L 28.0625 6.5 L 24.78125 2.375 C 24.570313 2.109375 24.242188 1.96875 23.90625 2 C 23.589844 2.039063 23.3125 2.222656 23.15625 2.5 L 20.65625 6.65625 L 14.5 3.125 C 14.164063 2.921875 13.742188 2.9375 13.417969 3.15625 C 13.09375 3.378906 12.933594 3.769531 13 4.15625 L 13.78125 8.8125 L 8.15625 8 C 7.777344 7.945313 7.398438 8.117188 7.183594 8.4375 C 6.972656 8.753906 6.960938 9.167969 7.15625 9.5 L 9.59375 13.5625 L 4.5625 16.09375 C 4.179688 16.285156 3.960938 16.695313 4.019531 17.121094 C 4.074219 17.542969 4.394531 17.882813 4.8125 17.96875 L 8.625 18.71875 L 7.0625 22.625 C 6.890625 23.023438 6.996094 23.488281 7.324219 23.773438 C 7.652344 24.058594 8.128906 24.101563 8.5 23.875 L 9 23.59375 L 9 26.1875 C 9.070313 26.875 9.527344 27.476563 10.125 27.78125 C 9.957031 27.914063 9.761719 28.085938 9.59375 28.3125 C 9.09375 29.011719 8.804688 30.113281 8.90625 31.3125 C 9.304688 34.914063 11.613281 36.199219 12.3125 36.5 C 12.613281 38.199219 13.40625 40.210938 14.90625 42.3125 C 16.40625 44.613281 23.40625 47.90625 24.90625 47.90625 C 26.40625 47.90625 33.40625 44.511719 34.90625 42.3125 C 36.304688 40.210938 37.105469 38.101563 37.40625 36.5 C 38.105469 36.199219 40.40625 34.914063 40.90625 31.3125 C 41.007813 30.113281 40.6875 29.011719 40.1875 28.3125 C 40.046875 28.125 39.921875 27.964844 39.78125 27.84375 C 40.429688 27.558594 40.925781 26.914063 41 26.1875 L 41 24.03125 C 41.34375 24.039063 41.664063 23.871094 41.855469 23.585938 C 42.046875 23.300781 42.078125 22.9375 41.9375 22.625 L 40.3125 18.5625 L 44.375 16.9375 C 44.75 16.792969 45.007813 16.4375 45.019531 16.035156 C 45.03125 15.632813 44.804688 15.261719 44.4375 15.09375 L 39.34375 12.53125 L 41.8125 7.4375 C 41.992188 7.078125 41.941406 6.648438 41.683594 6.339844 C 41.425781 6.035156 41.007813 5.914063 40.625 6.03125 L 34.8125 7.71875 L 34 2.84375 C 33.96875 2.570313 33.828125 2.324219 33.609375 2.15625 C 33.390625 1.992188 33.113281 1.925781 32.84375 1.96875 Z M 24.09375 4.71875 L 27.21875 8.625 C 27.394531 8.851563 27.660156 8.992188 27.949219 9.011719 C 28.234375 9.03125 28.515625 8.921875 28.71875 8.71875 L 32.3125 5.125 L 33 9.15625 C 33.042969 9.445313 33.207031 9.699219 33.453125 9.855469 C 33.699219 10.011719 34.003906 10.054688 34.28125 9.96875 L 39 8.59375 L 37.09375 12.5625 C 36.976563 12.800781 36.960938 13.078125 37.046875 13.332031 C 37.136719 13.585938 37.320313 13.792969 37.5625 13.90625 L 41.53125 15.90625 L 38.625 17.0625 C 38.375 17.160156 38.175781 17.355469 38.066406 17.601563 C 37.960938 17.847656 37.960938 18.125 38.0625 18.375 L 38.84375 20.3125 L 34.40625 18.09375 C 34.375 18.070313 34.34375 18.050781 34.3125 18.03125 C 34.265625 18.011719 34.195313 18.003906 34.125 18 C 34.09375 18 34.066406 18 34.03125 18 C 34.019531 18 34.011719 18 34 18 L 15 18 C 14.964844 18 14.9375 18 14.90625 18 C 14.78125 18 14.679688 18.023438 14.59375 18.0625 C 14.566406 18.074219 14.519531 18.074219 14.5 18.09375 L 13.46875 18.71875 L 10 20.6875 L 10.9375 18.375 C 11.042969 18.097656 11.023438 17.785156 10.878906 17.527344 C 10.734375 17.265625 10.480469 17.085938 10.1875 17.03125 L 8.03125 16.59375 L 11.4375 14.90625 C 11.683594 14.78125 11.871094 14.558594 11.945313 14.292969 C 12.023438 14.023438 11.988281 13.738281 11.84375 13.5 L 9.9375 10.3125 L 14.84375 11 C 15.164063 11.054688 15.492188 10.953125 15.722656 10.722656 C 15.953125 10.492188 16.054688 10.164063 16 9.84375 L 15.34375 5.9375 L 20.5 8.875 C 20.976563 9.132813 21.570313 8.96875 21.84375 8.5 Z M 19 20 L 31 20 C 32.101563 20 33 20.898438 33 22 L 33 24 C 33 25.101563 32.101563 26 31 26 L 19 26 C 17.898438 26 17 25.101563 17 24 L 17 22 C 17 20.898438 17.898438 20 19 20 Z M 12.65625 28 L 37.3125 28 C 37.371094 28.222656 37.476563 28.4375 37.6875 28.59375 C 37.886719 28.695313 38.300781 29.007813 38.5 29.40625 C 38.800781 29.804688 39.007813 30.292969 38.90625 31.09375 C 38.507813 34.292969 36.3125 34.90625 36.3125 34.90625 C 36.066406 34.96875 35.898438 35.148438 35.78125 35.34375 C 35.332031 35.082031 34.835938 34.871094 34.34375 34.6875 C 33.273438 34.285156 32.25 34.03125 32.25 34.03125 C 32.117188 33.992188 31.980469 33.984375 31.84375 34 C 31.359375 34.058594 30.992188 34.457031 30.96875 34.945313 C 30.945313 35.429688 31.273438 35.863281 31.75 35.96875 C 31.75 35.96875 32.726563 36.214844 33.65625 36.5625 C 34.121094 36.738281 34.570313 36.953125 34.84375 37.125 C 34.949219 37.191406 34.996094 37.21875 35.03125 37.25 C 35.054688 37.328125 35.085938 37.398438 35.125 37.46875 C 34.914063 38.03125 34.640625 38.632813 34.3125 39.28125 C 33.949219 38.828125 33.511719 38.4375 33.09375 38.125 C 32.257813 37.5 31.4375 37.09375 31.4375 37.09375 C 31.261719 37.007813 31.066406 36.976563 30.875 37 C 30.425781 37.046875 30.0625 37.386719 29.988281 37.832031 C 29.914063 38.28125 30.148438 38.71875 30.5625 38.90625 C 30.5625 38.90625 31.242188 39.25 31.90625 39.75 C 32.238281 40 32.550781 40.28125 32.75 40.53125 C 32.949219 40.78125 33 40.957031 33 41 C 33.003906 41.140625 33.035156 41.277344 33.09375 41.40625 C 32.746094 41.84375 32.246094 42.277344 31.65625 42.71875 C 31.410156 42.25 31.085938 41.84375 30.78125 41.46875 C 30.234375 40.800781 29.6875 40.28125 29.6875 40.28125 C 29.445313 40.03125 29.089844 39.925781 28.75 40 C 28.386719 40.085938 28.101563 40.367188 28.011719 40.726563 C 27.917969 41.089844 28.035156 41.46875 28.3125 41.71875 C 28.3125 41.71875 28.765625 42.164063 29.21875 42.71875 C 29.582031 43.164063 29.808594 43.65625 29.90625 43.84375 C 27.84375 45.058594 25.585938 46 25 46 C 24.410156 46 22.128906 45.074219 20.0625 43.875 C 20.144531 43.726563 20.394531 43.191406 20.78125 42.71875 C 21.234375 42.164063 21.6875 41.71875 21.6875 41.71875 C 22.019531 41.414063 22.109375 40.925781 21.90625 40.527344 C 21.699219 40.125 21.253906 39.910156 20.8125 40 C 20.621094 40.042969 20.449219 40.140625 20.3125 40.28125 C 20.3125 40.28125 19.765625 40.800781 19.21875 41.46875 C 18.90625 41.851563 18.558594 42.265625 18.3125 42.75 C 17.738281 42.328125 17.246094 41.878906 16.90625 41.46875 C 16.976563 41.324219 17.007813 41.160156 17 41 C 17 40.957031 17.050781 40.78125 17.25 40.53125 C 17.449219 40.28125 17.761719 40 18.09375 39.75 C 18.757813 39.25 19.4375 38.90625 19.4375 38.90625 C 19.964844 38.734375 20.25 38.167969 20.078125 37.640625 C 19.90625 37.113281 19.339844 36.828125 18.8125 37 C 18.726563 37.019531 18.640625 37.050781 18.5625 37.09375 C 18.5625 37.09375 17.742188 37.5 16.90625 38.125 C 16.488281 38.4375 16.050781 38.828125 15.6875 39.28125 C 15.664063 39.308594 15.648438 39.347656 15.625 39.375 C 15.289063 38.738281 15.027344 38.148438 14.8125 37.59375 C 14.886719 37.488281 14.9375 37.375 14.96875 37.25 C 15.003906 37.21875 15.050781 37.191406 15.15625 37.125 C 15.429688 36.953125 15.878906 36.738281 16.34375 36.5625 C 17.273438 36.214844 18.25 35.96875 18.25 35.96875 C 18.792969 35.847656 19.136719 35.308594 19.015625 34.765625 C 18.894531 34.222656 18.355469 33.878906 17.8125 34 C 17.792969 34.007813 17.769531 34.019531 17.75 34.03125 C 17.75 34.03125 16.726563 34.285156 15.65625 34.6875 C 15.144531 34.878906 14.617188 35.09375 14.15625 35.375 C 14.03125 35.195313 13.832031 35.058594 13.59375 35 C 13.59375 35 11.398438 34.292969 11 31.09375 C 10.898438 30.292969 11.105469 29.804688 11.40625 29.40625 C 11.707031 29.007813 11.988281 28.695313 12.1875 28.59375 C 12.425781 28.476563 12.601563 28.265625 12.65625 28 Z M 19.5 29 C 18.671875 29 18 29.671875 18 30.5 C 18 31.328125 18.671875 32 19.5 32 C 20.328125 32 21 31.328125 21 30.5 C 21 29.671875 20.328125 29 19.5 29 Z M 30.5 29 C 29.671875 29 29 29.671875 29 30.5 C 29 31.328125 29.671875 32 30.5 32 C 31.328125 32 32 31.328125 32 30.5 C 32 29.671875 31.328125 29 30.5 29 Z"
                    />
                  </svg>
                </div>

                <div className='text-white px-4 mt-4'>
                  <Link to='/' 
                    onClick={() => closeAll()}
                  >
                    Home
                  </Link>
                  
                  <div className=' my-2 relative'>
                    <button 
                      onClick={() => toggleSection('showBrowse')}
                      className='flex items-center justify-between w-full'
                    >
                      Browse
                   
                      <FontAwesomeIcon icon={faChevronDown} 
                        className={showSections.showBrowse ? 'rotate-180 duration-200 text-orange-500' : 'rotate-0 duration-200'}
                      />
                      
                    </button>

                    {showSections.showBrowse && (
                      <div 
                        className='w-full px-2 ease-in-out duration-500'
                      >
                   
                        <div className='my-1'>
                          <button 
                            onClick={() => toggleSection('showPopular')}
                            className='flex items-center justify-between w-full'
                          >
                            Popular
                            <FontAwesomeIcon 
                              icon={faChevronDown}
                              className={showSections.showPopular ? 'rotate-180 duration-200 text-orange-500' : 'rotate-0 duration-200'} 
                            />
                          </button>
                          {showSections.showPopular && (
                            <div className='flex flex-col mx-4 '>
                              <Link to='/anime/popular'
                                onClick={() => closeAll()}
                                className='my-1'
                              >
                                Anime
                              </Link>
                              <Link to='/manga/popular'
                                onClick={() => closeAll()}
                                className='my-1'
                              >
                                Manga
                              </Link>
                            </div>
                          )}
                        </div>
                      
                        <div className='my-1'>
                          <button 
                            onClick={() => toggleSection('showA')}
                            className='flex items-center justify-between w-full'
                          >
                            Alphabetical
                            <FontAwesomeIcon 
                              icon={faChevronDown}
                              className={showSections.showA ? 'rotate-180 duration-200 text-orange-500' : 'rotate-0 duration-200'}
                            />
                          </button>
                          {showSections.showA && (
                            <div className='flex flex-col mx-4 '>
                              <Link to='/anime/alphabetical'
                                onClick={() => closeAll()}
                                className='my-1'
                              >
                                Anime
                              </Link>
                              <Link to='/manga/alphabetical'
                                onClick={() => closeAll()}
                                className='my-1'
                              >
                                Manga
                              </Link>
                            </div>
                          )}
                        </div>
                        
                        <div className='my-1'>
                          <button 
                            onClick={() => toggleSection('showSearch')}
                            className='flex items-center justify-between w-full'
                          >
                            Search
                            <FontAwesomeIcon 
                              icon={faChevronDown}
                              className={showSections.showSearch ? 'rotate-180 duration-200 text-orange-500' : 'rotate-0 duration-200'}
                            />
                          </button>
                          {showSections.showSearch && (
                            <div className='flex flex-col mx-4 '>
                              <Link to='/anime/search'
                                onClick={() => closeAll()}
                                className='my-1'
                              >
                                Anime
                              </Link>
                              <Link to='/manga/search'
                                onClick={() => closeAll()}
                                className='my-1'
                              >
                                Manga
                              </Link>
                            </div>
                          )}
                        </div>                       
                      </div>
                    )}
                  </div>

                  <div>
                    <button 
                      onClick={() => toggleSection('showList')}
                      className='flex items-center justify-between w-full'
                    >
                      My List
                      <FontAwesomeIcon 
                        icon={faChevronDown}
                        className={showSections.showList ? 'rotate-180 duration-200 text-orange-500' : 'rotate-0 duration-200'}
                      />
                    </button>
                    {showSections.showList && (
                      <div className='flex flex-col mx-4 absolute text-white'>
                        <Link to='/animelist'
                          onClick={() => closeAll()}
                          className='my-1'
                        >
                          Anime List: <span>{animelist}</span>
                        </Link>
                        <Link to='/mangalist'
                          onClick={() => closeAll()}
                          className='my-1'
                        >
                          Manga List: <span>{mangalist}</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    
    </div>
  )
}

export default HamburgerMenu;