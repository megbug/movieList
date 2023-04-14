import { useParams } from 'react-router-dom'
import { useState } from 'react';

import movies from '../data/movies'
import MovieItem from './MovieItem';
import AddMovies from './AddMovies';

const MovieList = (props) => {

    const movieParams = useParams()
    console.log(movieParams);

    let [moviesSort, setMoviesSort] = useState(movies)

    // filter funktion für searchbar

    if (props.movieFilter !== '') {
        moviesSort = moviesSort.filter((elt) => {
            return (
                elt.title.includes(props.movieFilter)
                ||
                elt.genre.includes(props.movieFilter)
            )
        })
    }

    let sortingValue = movieParams.sorting;

    switch (sortingValue) {
        case 'sortAZ':
            moviesSort.sort((a, b) => {
                return (a.title.localeCompare(b.title))
            });
            break;
        case 'sortZA':
            moviesSort.sort((a, b) => {
                return (b.title.localeCompare(a.title))
            });
            break;
        case 'sortDateNO':
            moviesSort.sort((a, b) => {
                return (b.year - a.year)
            })
            break;
        case 'sortDateON':
            moviesSort.sort((a, b) => {
                return (a.year - b.year)
            })
            break;
        case 'sortDateGenre':
            moviesSort.sort((a, b) => {
                return (a.genre[0].localeCompare(b.genre[0]))
            })
            break;
        case 'sortRating':
            moviesSort.sort((a, b) => {
                return (b.rate - a.rate)
            })
            break;
        default:
            break;
    }

    return (
        <div>
            <AddMovies
                moviesSort={moviesSort}
                setMoviesSort={setMoviesSort}
            />
            {moviesSort.length} / {movies.length}
            <section className='movieList'>
                {moviesSort.map((item, i) => {
                    return (
                        <MovieItem
                            key={i}
                            title={item.title}
                            year={item.year}
                            director={item.director}
                            duration={item.duration}
                            genre={item.genre}
                            rate={item.rate}
                        />
                    )
                })}
            </section>
        </div>
    );
}

export default MovieList;

