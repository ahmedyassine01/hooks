import './App.css';
import { useState } from 'react';
import { moviesdata } from './data';
import Movielist from './Components/MovieList';
import AddNewMovie from './Components/AddNewMovie';
import Search from './Components/Search';

function App() {
  const [movies, setMovies] = useState(moviesdata);
  const [searchText, setSearchText] = useState("");
  const [rating, setRating] = useState(1);


  // console.log(movies)
  const handleDelete=(ID)=>setMovies(movies.filter(movie=>movie.id!==ID));
  const handleAdd=(newMovie)=>setMovies([...movies,newMovie])
  const handleEdit=(editedMovie)=>setMovies(movies.map(film=>film.id===editedMovie.id?editedMovie:film))
  const hadleText=(x)=>setSearchText(x);
  const hadleRating=(x)=>setRating(x);
  return (
    <div className="App">
     <Search  searchText={searchText} rating={rating} hadleText={hadleText} hadleRating={hadleRating}/>
    <Movielist   list={movies.filter(el=>el.name.toLowerCase().includes(searchText.toLowerCase())&&el.rating>=rating)} deleteFunction={handleDelete} handleEdit={handleEdit}/>
    <AddNewMovie AddFunction={handleAdd}/>
    </div>
  );
}

export default App;
