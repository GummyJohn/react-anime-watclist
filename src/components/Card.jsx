import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Card = ({image, id, type, title = '', onClick, already, customvalue}) => {
  const [hoverMsg, setHoverMsg] = useState(false)

  return (
    <div>
      <div className='relative z-0'>

        <div className='card_height'>
          <Link to={`/${type}/${id}`}>
            <img src={image} alt={type === 'anime' ? 'anime': 'magna'} className='h-full w-full rounded-2xl'/>
          </Link>
        </div>



          <div 
            onMouseEnter={() => setHoverMsg(true)}
            onMouseLeave={() => setHoverMsg(false)}

            className='absolute bottom-3 right-3 border  rounded-xl border-orange-500 bg-orange-500 text-white hover:bg-black cursor-pointer'>
            <button onClick={onClick} className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faPlus} customvalue={customvalue} className='p-1 rounded-xl' />
            </button>
          </div>

          {hoverMsg && (
            <div className='absolute bottom-10 right-3 border border-orange-500 bg-black p-1 px-2 rounded-xl'>

              <div className='absolute w-2 h-2 bottom-0 right-2 top-7 rotate-45 bg-black border-b border-r border-orange-500'>
              </div>

              <p className='text-orange-500 '>
                { already ? 'Already Added' : 'Quick Add'}
              </p>
            </div>
          )}
      </div>
      <p className="text-sm text-center">{title}</p>
    </div>

  )
}

export default Card