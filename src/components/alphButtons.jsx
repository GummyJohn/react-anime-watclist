import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const AlphButtons = ({onClick, letter}) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  function clickRight(){
    recommendRef.current.scrollLeft =  recommendRef.current.scrollLeft + 1160;
  }
  function clickLeft(){
    recommendRef.current.scrollLeft =  recommendRef.current.scrollLeft - 1160;
  }

  return ( 
    <div>
      <div className='h-9 m-auto flex align-center justify-center phone_media_hidden'>
        {alphabet.map((alph) => {
          return (
            <button key={alph} value={alph} onClick={onClick}
              className={ letter === alph ? 'px-2 mx-2 text-orange-500 text-2xl' : 'px-2 mx-2'}
            >
              {alph.toUpperCase()}
            </button>
          )
        })}
      </div>

      {/* show on phones */}
      <div className=" flex items-center collapse phone_media_show">
        <div className="flex overflow-auto pl-2 w-[80%] m-auto bar">
          {alphabet.map((alph) => {
            return (
              <button key={alph} value={alph} onClick={onClick}
                className={ letter === alph ? 'px-2 mx-2 text-orange-500 text-2xl' : 'px-2 mx-2'}
              >
                {alph.toUpperCase()}
              </button>
            )
          })}
        </div>
      </div>
    </div> 
  )
}

export default AlphButtons;