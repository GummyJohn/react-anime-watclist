import { Link } from 'react-router-dom'
import ObitioIcon from '../svg/narutoIcon'
import { useRef, useReducer } from 'react'
import  {reducer, controls}  from '../JS/reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faFont, faMagnifyingGlass, faTv, faBook ,faChevronRight} from '@fortawesome/free-solid-svg-icons'

const NavBar = ({watchlist}) => {
  const navBar = useRef();

  const [state, dispatch] = useReducer(reducer, controls)
  

  return (
    <div className='navbar w-full'>
      <div className='p-5 flex justify-between items-center max m-auto'>
        <ObitioIcon/>

        <div 
          className='flex justify-evenly	items-center mr-5 text-white text-lg'
        >
          <div className='hover:text-orange-500 '
            onMouseEnter={() => dispatch({type: 'close-menu'})}
          >
            <Link to='/' className='mx-4'>Home</Link>
          </div>
          
          <div>

            <div 
              className={state.show ? 'mx-4 text-orange-500 cursor-pointer' : 'mx-4 cursor-pointer'}
              onMouseEnter={() => dispatch({type: 'show-menu'})}
            >
              Browse
            </div>

            {state.show && (
              <div className='relative z-10 top-5'>
                <div 
                  onMouseLeave={() => dispatch({type: 'close-menu'})}
                  className=' bg-black absolute right-5 p-4 border-2 border-orange-500'
                >
                  <div 
                    className='absolute h-5 w-5 right-3 top_point rotate-45 bg-black border-orange-500 border-t-2 border-l-2'
                  >
                  </div>

                  <div className=''>
                    <h2 className='text-xl text-orange-500 flex justify-center items-center'>
                      <FontAwesomeIcon icon={faTv} className='m-2'/>
                      <FontAwesomeIcon icon={faBook} className='m-2'/>
                    </h2>

                    <div className='flex flex-col justify-left mt-2 w-52'>

                        <div 
                          onMouseEnter={() => dispatch({type: 'show-popular'})}
                          onMouseLeave={() => dispatch({type: 'close-popular'})}
                          className='flex relative items-center justify-left hover:bg-orange-500 p-2 rounded-lg cursor-pointer'
                        >

                          <div
                            className='flex items-center justify-between w-full'
                          >
                            <div className='flex items-center'>
                              <FontAwesomeIcon icon={faFire} className='mr-3'/> 
                              <p>Popular</p>
                            </div>
                              <FontAwesomeIcon icon={faChevronRight}/>
                          </div>

                          {state.showPopular && (
                            <div
                              className='absolute left-52 bg-black border-2 border-orange-500 px-3 top-1'
                            >
                              <div 
                                className='w-5 h-5 absolute top-2 point  bg-black border-orange-500 border-b-2 border-l-2 rotate-45'
                              >
                              </div>

                              <div className='flex flex-col py-1'>

                                <Link to='/anime/popular'
                                className='hover:bg-orange-500 py-1 px-2 rounded-lg my-1'
                                >
                                  Anime
                                </Link>

                                <Link to='/magna/popular'
                                className='hover:bg-orange-500 py-1 px-2 rounded-lg my-1'
                                >
                                  Magna
                                </Link>

                              </div>
                            </div>
                          )}
                        </div>


                        <div 
                          onMouseEnter={() => dispatch({type: 'show-alph'})}
                          onMouseLeave={() => dispatch({type: 'close-alph'})}
                          className='flex relative items-center justify-left hover:bg-orange-500 p-2 rounded-lg cursor-pointer'
                        >

                          <div  
                            className='flex items-center justify-between w-full'
                          >
                            <div className='flex items-center'>
                              <FontAwesomeIcon icon={faFont} className='mr-3'/> 
                              <p>Alphabetical</p>
                            </div>
                              <FontAwesomeIcon icon={faChevronRight}/>
                          </div>

                          {state.showAlph && (
                            <div
                              className='absolute left-52 bg-black border-2 border-orange-500 px-3 top-1'
                            >
                              <div 
                                className='w-5 h-5 absolute top-2 point  bg-black border-orange-500 border-b-2 border-l-2 rotate-45'
                              >
                              </div>

                              <div className='flex flex-col py-1'>

                                <Link to='/anime/alphabetical'
                                className='hover:bg-orange-500 py-1 px-2 rounded-lg my-1'
                                >
                                  Anime
                                </Link>

                                <Link to='/manga/alphabetical'
                                className='hover:bg-orange-500 py-1 px-2 rounded-lg my-1'
                                >
                                  Magna
                                </Link>

                              </div>
                            </div>
                          )}
                        </div>

                        <div 
                          onMouseEnter={() => dispatch({type: 'show-search'})}
                          onMouseLeave={() => dispatch({type: 'close-search'})}
                          className='flex relative items-center justify-left hover:bg-orange-500 p-2 rounded-lg cursor-pointer'
                        >

                          <div  
                            className='flex items-center justify-between w-full'
                          >
                            <div className='flex items-center'>
                              <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-3'/> 
                              <p>Search</p>
                            </div>
                              <FontAwesomeIcon icon={faChevronRight}/>
                          </div>

                          {state.showSearch && (
                            <div
                              className='absolute left-52 bg-black border-2 border-orange-500 px-3 top-1'
                            >
                              <div 
                                className='w-5 h-5 absolute top-2 point  bg-black border-orange-500 border-b-2 border-l-2 rotate-45'
                              >
                              </div>

                              <div className='flex flex-col py-1'>

                                <Link to='/anime/search'
                                className='hover:bg-orange-500 py-1 px-2 rounded-lg my-1'
                                >
                                  Anime
                                </Link>

                                <Link to='/manga/search'
                                className='hover:bg-orange-500 py-1 px-2 rounded-lg my-1'
                                >
                                  Magna
                                </Link>

                              </div>
                            </div>
                          )}
                        </div>

                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

          <div className='mx-4'>
            
            <div
              className={state.showList ? 'mx-4 text-orange-500 cursor-pointer' : 'mx-4 cursor-pointer'}
              onMouseEnter={() => dispatch({type: 'show-list'})}
            >
              My Lists
            </div>

            {state.showList && (
              <div className='relative z-10'
                onMouseLeave={() => dispatch({type: 'close-menu'})}
              >


                <div className=' bg-black absolute right-3 top-5 p-4 border-2 border-orange-500 w-44'>
                  <div 
                    className='absolute h-5 w-5 right-3 top_point rotate-45 bg-black border-orange-500 border-t-2 border-l-2'
                  >
                  </div>

                  <div className='hover:bg-orange-500 p-2 rounded-lg cursor-pointer'>
                    <Link to='/animelist'
                      className='flex justify-between items-center'
                    >
                      Anime list : 
                      <span className='ml-2'>{watchlist}</span>
                    </Link>
                  </div>

                  <div className='hover:bg-orange-500 p-2 rounded-lg cursor-pointer'>
                    <Link to='/mangalist'
                      className='flex justify-between items-center'
                    >
                      Magna list : 
                      <span className='ml-2'>{watchlist}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}                  

          </div>

        </div>
      </div>
    </div>
  )
}

export default NavBar