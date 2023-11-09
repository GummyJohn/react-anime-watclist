import { useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from 'framer-motion'
import AnimeHorizon from './sildes/AnimeHorizon'
import CharacterExplore from './sildes/CharacterExplore'
import RecommendationTxt from './sildes/RecommendationTxt'
import Background from './sildes/Background'
import { 
  faBookOpen, faList, faMagnifyingGlass , 
  faChevronLeft, faChevronRight, faCircle,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const homeRef = useRef()
  const [currentImg, setCurrentImg] = useState(0);
  const [hide, setHide] = useState(false)

  const images = [
    {
      id: 1, 
      url: '../src/img/girl-7628308_1920.jpg', 
      element: <AnimeHorizon/>
    },
    {
      id: 2,
      url: '../src/img/sunset-7628289_1920.jpg', 
      element: <CharacterExplore/>
    },
    {
      id: 3,
      url: '../src/img/man-7628305_1920.jpg', 
      element: <RecommendationTxt/>
    },
    {
      id: 4,
      url: '../src/img/backpacker-7628303_1920.jpg', 
      element: <Background/>
    },
  ]

  const bgImg = {
    backgroundImage: `url(${images[currentImg].url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '55vh',
    transition: 'ease-in-out 1s'
  }

  function nextImage(index){
    if(index === (images.length - 1)){
      setCurrentImg(0)
    }else{
      setCurrentImg(index + 1)
    }
  }

  function pervImage(index){
    if(index === 0){
      setCurrentImg((images.length-1))
    }else{
      setCurrentImg(index - 1)
    }
  }


  return (
    <>
      <div
        ref={homeRef} 
        style={bgImg}
        className='flex justify-center items-center relative'
      >
        <div className='max-w-[1750px] mt-12 flex items-center px-5'>
          <button
            className=' text-white p-2 rounded-full hover:bg-black'
            onClick={() => pervImage(currentImg)}
          >
            <FontAwesomeIcon 
              icon={faChevronLeft} 
              className='text-5xl p-2 '
            />
          </button>
          

          <motion.div 
            initial={{x: '100vw'}}
            animate={{x: 0}} 
            transition={{delay: .5}}  
            className='text-white w-6/12 border-2 rounded-2xl relative  mx-auto w-6/12  text-center flex flex-col justify-between h-[480px]'
          >

            <div className='absolute bg-black opacity-60 w-full h-full z-0 rounded-2xl'></div>

            <div className='relative z-10 p-6 '>
              {images.map((ele, index) => {
                if(index === currentImg){
                  return (
                    <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}} 
                      transition={{delay: .9}}
                      key={ele.id}
                    >
                      {ele.element}
                    </motion.div> 
                  )
                }
              })}
            </div>

            <div className='relative z-20 pb-4 px-4'>
              <div className='flex items-center justify-center '>
                {images.map((btn, index) => {
                  return (
                    <button 
                      key={btn.id}
                      className='mx-2'
                      onClick={() => setCurrentImg(index)}
                    >
                      {
                        currentImg === index ?
                        <FontAwesomeIcon icon={faCircleXmark} className='text-3xl'/> : 
                        <FontAwesomeIcon icon={faCircle}/> 
                      }
                    </button>
                  )
                  })
                }
              </div>
            </div>
          </motion.div>


          <button
            className=' text-white p-2 rounded-full hover:bg-black'
            onClick={() => nextImage(currentImg)}
          >
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className='text-5xl p-2 '
            />
          </button>
        </div>
      </div>

      <div className="max-w-[1750px] flex justify-between  my-6 mx-auto text-white">
        <motion.div 
          initial={{y: '+100vh'}}
          animate={{y: 0}}
          transition={{delay: .2, stiffness: 10}}
          className="text-center border-2 p-4 w-4/12 mx-5 rounded-3xl"
        >
          <FontAwesomeIcon 
            icon={faMagnifyingGlass} className='text-5xl my-4 text-orange-500'
          />
          <h2 className='text-3xl my-4 text-orange-500'>Search Animes</h2>
          <p className='text-left'>Searching for the perfect anime has never been easier. Our website provides a comprehensive and user-friendly anime search feature that allows you to explore a vast library of anime titles effortlessly. Whether you're looking for a classic series or the latest releases, our search tool enables you to filter and discover anime by genre, release year, or popularity. With a simple keyword search, you can quickly find your favorite shows and movies. We are committed to making your anime search experience as smooth as possible, ensuring that you can uncover the gems of the anime world with just a few clicks.</p>
        </motion.div>

        <motion.div 
          initial={{y: '+100vh'}}
          animate={{y: 0}}
          transition={{delay: .3, stiffness: 10}}
          className="text-center border-2 p-4 w-4/12 mx-5 rounded-3xl"
        >
          <FontAwesomeIcon icon={faBookOpen} className='text-5xl my-4 text-orange-500'/>
          <h2 className='text-3xl my-4 text-orange-500'>Search Manga</h2>
          <p className='text-left'>Discovering the world of manga has never been more convenient. Our website offers an intuitive manga search feature that opens the door to a vast and diverse collection of manga titles. Whether you're in search of timeless classics or the latest releases, our search tool empowers you to explore manga by genre, author, release date, or popularity. With a simple keyword search, you can swiftly locate your favorite manga series and one-shots. We are dedicated to ensuring a seamless manga search experience, making it effortless for you to dive into the captivating world of manga with just a few clicks.</p>
        </motion.div>

        <motion.div 
          initial={{y: '+100vh'}}
          animate={{y: 0}}
          transition={{delay: .4, stiffness: 10}}
          className="text-center border-2 p-4 w-4/12 mx-5 rounded-3xl"
        >
          <FontAwesomeIcon icon={faList} className='text-5xl my-4 text-orange-500'/>
          <h2 className='text-3xl my-4 text-orange-500'>Anime List</h2>
          <p className='text-left'>Take control of your anime-watching experience with our user-friendly watchlist feature. Our website offers a personalized watchlist, allowing you to curate a list of anime series and movies you want to watch, making sure you never miss a moment of your favorite shows. You can easily add and remove titles from your watchlist, prioritize what to watch next, and keep track of your progress. With a few simple clicks, you can create a tailored anime watchlist that suits your preferences, ensuring that your anime-watching journey is organized and enjoyable. Stay up-to-date with the latest releases and manage your anime queue effortlessly on our platform.</p>
        </motion.div>

        <motion.div 
          initial={{y: '+100vh'}}
          animate={{y: 0}}
          transition={{delay: .5, stiffness: 10}}
          className="text-center border-2 p-4 w-4/12 mx-5 rounded-3xl"
        >
          <FontAwesomeIcon icon={faList} className='text-5xl my-4 text-orange-500'/>
          <h2 className='text-3xl my-4 text-orange-500'>Manga List</h2>
          <p className='text-left'>Creating your own manga read list is a delightful journey for any manga enthusiast. At our site, we empower you to curate a personalized collection of your favorite manga titles, ensuring that your reading experience is as convenient and enjoyable as possible. With just a few clicks, you can easily explore a vast selection of manga series, both classic and contemporary, and add them to your list. No account is required to get started, keeping the process simple and accessible for all. Whether you're into thrilling adventures, heartwarming romances, or epic fantasies, our platform allows you to tailor your manga journey to your unique tastes. Dive into the captivating world of manga and start building your own read list today, right here on our site!</p>
        </motion.div>
      </div>
    </>
  )
}

export default Home