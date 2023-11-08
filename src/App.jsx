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
  const storageAnimes = JSON.parse(localStorage.getItem('animes'))
  const storageMangas = JSON.parse(localStorage.getItem('mangas'))

  const [already, setAlready] = useState(false);
  const [added, setAdded] = useState(false);
  const [watchList, setWatchList] = useState(storageAnimes || []);
  const [readList, setReadList] = useState(storageMangas || []);

  function addTolist(obj, type){
    if(type === 'anime'){
      for(let i = 0; i < watchList.length; i++){
        if(obj.mal_id === watchList[i].id){
          setAlready(true);
          setTimeout(() => { 
            setAlready(false);
          }, 1200)
          return;
        }
      }
      
      let animeItem = {};
      animeItem.id = obj.mal_id;
      animeItem.image= obj.images.jpg.image_url;
      animeItem.title = obj.title_english;
      animeItem.duration = obj.duration;
      animeItem.rating = obj.rating;
      animeItem.episodes = obj.epsiodes;
      animeItem.trailer = obj.trailer;
      animeItem.synopsis = obj.synopsis;
      
      setWatchList([...watchList, animeItem])
      setAdded(true)
      setTimeout(() => {setAdded(false)}, 1200)
    }
    if(type === 'manga') {
      for(let i = 0; i < readList.length; i++){
        if(obj.mal_id === readList[i].id){
          setAlready(true);
          setTimeout(() => { setAlready(false) }, 1200)
          return;
        }
      }
  
      let mangaItem = {};
      mangaItem.id = obj.mal_id;
      mangaItem.image= obj.images.jpg.image_url;
      mangaItem.title = obj.title;
      mangaItem.rating = obj.score;
      mangaItem.synopsis = obj.synopsis;
      mangaItem.authors = obj.authors;
      
      setReadList([...readList, mangaItem])
      setAdded(true)
      setTimeout(() => {setAdded(false)}, 1200)
    }
    
  }

  useEffect(() => {
    localStorage.setItem('animes', JSON.stringify(watchList))
    localStorage.setItem('mangas', JSON.stringify(readList))
  }, [watchList, readList])


  return (
    <BrowserRouter>
      <NavBar animelist={watchList.length} mangalist={readList.length} added={added}/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/anime/:id' 
          element={<Anime addList={addTolist} already={already}/>}
        />
        <Route path='/manga/:id' 
          element={<Manga addList={addTolist} already={already}/>}
        />

        <Route path='/animelist' 
          element={<AnimeList watchList={watchList} setWatchList={setWatchList} addList={addTolist}/>}
        />
        <Route path='/mangalist' 
          element={<MangaList readList={readList} setReadList={setReadList}/> }
        />

        <Route path='/anime/search' 
          element={<AnimeSearch addList={addTolist} already={already}/>}
        />
        <Route path='/manga/search' 
          element={<MangaSearch addList={addTolist} already={already}/>}
        />

        <Route path='/anime/popular' 
          element={<AnimePopular addList={addTolist} already={already}/>}
        />
        <Route path='/magna/popular' 
          element={<MagnaPopular addList={addTolist} already={already}/>}
        />

        <Route path='/anime/alphabetical' 
          element={<AnimeAlphabetical addList={addTolist} already={already}/>}
        />
        <Route path='/manga/alphabetical' 
          element={<MangaAlphabetical addList={addTolist} already={already}/>}
        />

      </Routes>
    </BrowserRouter>
  )
}


export default App
