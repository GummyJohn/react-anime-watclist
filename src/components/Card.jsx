import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Card = ({image, id, type, title = '', onClick, already, customvalue}) => {
  const [hoverMsg, setHoverMsg] = useState(false)
  const [flipped, setFlipped] = useState(false)

  return (
    <div>
      <div className='relative z-0'>

        <motion.div 
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
          whileHover={{boxShadow: '0px 0px 20px orange'}}
          className='h-[360px] rounded-2xl relative cursor-pointer'
        > 
          <img src={image} alt={type === 'anime' ? 'anime': 'magna'} className='h-full w-full rounded-2xl'/>

          {flipped && (
            <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 0.8}}
              className='absolute h-full w-full top-0 bg-black opacity-70 rounded-2xl text-white '
            >
              <Link to={`/${type}/${id}`} 
                className='flex flex-col items-center justify-center text-center items-center h-full'
              >
                <p className='my-10 w-10/12 text-orange-500 text-xl'>{title}</p>
                <p>Click for more Details</p>
              </Link>
            </motion.div>
          )}
        </motion.div>

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
    </div>

  )
}

export default Card