import { useState, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch'
import Bottom from './components/Bottom'
import {MovieProvider} from './context/MovieProvide'

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieUp, setMovieUp] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {
    const fechMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const url1 = 'https://api.themoviedb.org/3/movie/now_playing';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated';
      const url3 = 'https://api.themoviedb.org/3/movie/upcoming';

      const [res1, res2, res3] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
        fetch(url3, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
      setMovieUp(data3.results);
    };
    fechMovie();
  }, [])

  return (
    <MovieProvider>
      <div className="bg-black">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <Header onSearch={handleSearch}/>
            <Banner />
            {movieSearch.length > 0  ? <MovieSearch title = {'Kết quả tìm kiếm'}  data={movieSearch}/> : (
              <>
                <MovieList title={'Trending Now'} data={movie}/>
                <MovieList title={'New Releases'} data={movieRate}/>
                <MovieList title={'Must - Watch Movies'} data={movieUp}/>
              </>
            ) }
            <Bottom />
          </div>
        </div>     
      </div>
    </MovieProvider>
  )
}

export default App
