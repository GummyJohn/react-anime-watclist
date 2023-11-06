import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faList, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar'


const Home = () => {

  return (
    <>
    <div className='showcase relative z-30 flex justify-center items-center'>
      <div className='max mt-36'>
        <div className='text-white w-6/12 border-2 rounded-2xl relative  mx-auto w-6/12  text-center '>

          <div className='absolute bg-black opacity-60 w-full h-full z-0 rounded-2xl'></div>

          <div className='relative z-10 p-6 '>
            <h1 className='text-5xl mb-6'>Anime Horizon </h1>
            <p className='text-xl text-left'>Welcome to Anime Horizon, your ultimate destination for all things anime! At Anime Horizon, we offer a free, user-friendly platform designed to make your anime-searching experience as enjoyable and convenient as possible. With our website, you can easily explore a vast selection of the latest and classic anime series and movies. What sets us apart? You can create your own personalized watchlist effortlessly, allowing you to curate your anime journey based on your preferences. The best part? No account is needed to get started! We believe in keeping things simple, so you can begin exploring and building your watchlist in just a few clicks.</p>

            <Link to='/search'>
              <button className='mt-7 text-3xl border-white	py-4 px-16 border-2 rounded-3xl'>Search</button>
            </Link>
          </div>

        </div>

      </div>
    </div>

    <div className="flex justify-between  my-6 mx-auto text-white"
      style={{maxWidth: '1500px'}}
    >
      <div className="text-center border-2 p-4 w-4/12 mx-5 rounded-3xl">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-5xl my-4 text-purple-500'/>
        <h2 className='text-3xl my-4 text-pink-500'>Search Animes</h2>
        <p className='text-left'>Searching for the perfect anime has never been easier. Our website provides a comprehensive and user-friendly anime search feature that allows you to explore a vast library of anime titles effortlessly. Whether you're looking for a classic series or the latest releases, our search tool enables you to filter and discover anime by genre, release year, or popularity. With a simple keyword search, you can quickly find your favorite shows and movies. We are committed to making your anime search experience as smooth as possible, ensuring that you can uncover the gems of the anime world with just a few clicks.</p>
      </div>
      <div className="text-center border-2 p-4 w-4/12 mx-5 rounded-3xl">
        <FontAwesomeIcon icon={faBookOpen} className='text-5xl my-4 text-purple-500'/>
        <h2 className='text-3xl my-4 text-pink-500'>Search Manga</h2>
        <p className='text-left'>Discovering the world of manga has never been more convenient. Our website offers an intuitive manga search feature that opens the door to a vast and diverse collection of manga titles. Whether you're in search of timeless classics or the latest releases, our search tool empowers you to explore manga by genre, author, release date, or popularity. With a simple keyword search, you can swiftly locate your favorite manga series and one-shots. We are dedicated to ensuring a seamless manga search experience, making it effortless for you to dive into the captivating world of manga with just a few clicks.</p>
      </div>
      <div className="text-center border-2 p-4 w-4/12 mx-5 rounded-3xl">
        <FontAwesomeIcon icon={faList} className='text-5xl my-4 text-purple-500'/>
        <h2 className='text-3xl my-4 text-pink-500'>WatchList</h2>
        <p className='text-left'>Take control of your anime-watching experience with our user-friendly watchlist feature. Our website offers a personalized watchlist, allowing you to curate a list of anime series and movies you want to watch, making sure you never miss a moment of your favorite shows. You can easily add and remove titles from your watchlist, prioritize what to watch next, and keep track of your progress. With a few simple clicks, you can create a tailored anime watchlist that suits your preferences, ensuring that your anime-watching journey is organized and enjoyable. Stay up-to-date with the latest releases and manage your anime queue effortlessly on our platform.</p>
      </div>
    </div>


    {/* <footer className='bg-black opacity-90 text-white flex justify-between py-5 px-7 h-24'>
      <div>
        <h2 className='text-3xl'>Anime Horizon</h2>
        <p>Created By: Johnny</p>
      </div>

      <div>
        <FontAwesomeIcon icon={faFacebookF} className='text-3xl mx-3 cursor-pointer border-2 rounded-2xl p-2 hover:bg-violet-600'/>
        <FontAwesomeIcon icon={faTwitter} className='text-3xl mx-3 cursor-pointer border-2 rounded-2xl p-2 hover:bg-violet-600'/>
        <FontAwesomeIcon icon={faInstagram} className='text-3xl mx-3 cursor-pointer border-2 rounded-2xl p-2 hover:bg-violet-600'/>
        <FontAwesomeIcon icon={faLinkedin} className='text-3xl mx-3 cursor-pointer border-2 rounded-2xl p-2 hover:bg-violet-600'/>
      </div>

      <div>
        <p>AnimeHorizon@gmail.com</p>
        <p>212-555-1910</p>
      </div>
    </footer> */}
    </>
  )
}

export default Home