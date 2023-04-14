import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';


function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path='/' element={<MovieList />} />
				<Route path='/:sorting' element={<MovieList />} />
			</Routes>
		</div>
	);
}

export default App;
