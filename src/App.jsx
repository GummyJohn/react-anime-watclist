import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './components/Home'
import AnimeAlphabetical from './components/alphabetical/AnimeAlphabetical'
import MangaAlphabetical from './components/alphabetical/MangaAlphabetical'
import Anime from './components/Anime'
import Manga from './components/Manga'
import NavBar from './components/NavBar'
import AnimePopular from './components/popular/AnimePopular'
import MagnaPopular from './components/popular/MagnaPopular'    
import AnimeSearch from './components/search/AnimeSearch'
import MangaSearch from './components/search/MangaSearch'
import AnimeList from './components/lists/AnimeList'
import MangaList from './components/lists/MangaList'

function App() {
  const [watchlist, setWatchList] = useState( () => {
    return JSON.parse(localStorage.getItem('watchlist')) || []} 
  );

  function addTolist(obj){
    let listItem = {};

    listItem.image = obj.images.jpg.image_url;
    listItem.title = obj.title_english === null ? obj.title : obj.title_english;
    listItem.duration = obj.duration;
    listItem.id = obj.mal_id;
    listItem.rating = obj.rating;

    setWatchList([...watchlist, listItem])
  }

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [])

  return (
    <BrowserRouter>
      <NavBar watchlist={watchlist}/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/anime/:id' element={<Anime addList={addTolist}/>}/>
        <Route path='/manga/:id' element={<Manga addList={addTolist}/>}/>

        <Route path='/animelist' element={<AnimeList />}/>
        <Route path='/mangalist' element={<MangaList />}/>

        <Route path='/anime/search' element={<AnimeSearch addList={addTolist}/>}/>
        <Route path='/manga/search' element={<MangaSearch addList={addTolist}/>}/>

        <Route path='/anime/popular' element={<AnimePopular addList={addTolist}/>}/>
        <Route path='/magna/popular' element={<MagnaPopular addList={addTolist}/>}/>

        <Route path='/anime/alphabetical' element={<AnimeAlphabetical addList={addTolist}/>}/>
        <Route path='/manga/alphabetical' element={<MangaAlphabetical addList={addTolist}/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
