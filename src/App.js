import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';
// import MovieItemDetail from './components/MovieItemDetail';


function App() {

	const [movieFilter, setMovieFilter] = useState('')

	return (
		<div className="App">
			<Header setMovieFilter={setMovieFilter} />
			<Routes>
				<Route path='/' element={<MovieList movieFilter={movieFilter} />} />
				<Route path='/:sorting' element={<MovieList movieFilter={movieFilter} />} />
				{/* <Route path='/filmdetail/:movie' element={MovieItemDetail} /> */}
			</Routes>
		</div>
	);
}

export default App;
