const AddMovies = (props) => {
    // console.log(props);
    const addMovie = () => {
        let inputTitle = document.querySelector('#title');
        let inputYear = document.querySelector('#year');
        let inputDirector = document.querySelector('#director');
        let inputDuration = document.querySelector('#duration');
        let inputRating = document.querySelector('#rating');
        let inputGenre = document.querySelector('#genre');

        let newMoviesSort = [...props.moviesSort]

        newMoviesSort.push({
            title: inputTitle.value,
            year: inputYear.value,
            director: inputDirector.value,
            duration: inputDuration.value,
            rate: inputRating.value,
            genre: [inputGenre.value]
        })
        props.setMoviesSort(newMoviesSort)
    }

    return (
        <div>
            <form action="" className="form">
                <label htmlFor="">Title: </label>
                <input type="text" name="" id="title" required="" />
                <label htmlFor="">Year: </label>
                <input type="number" name="" id="year" />
                <label htmlFor="">Director: </label>
                <input type="text" name="" id="director" />
                <label htmlFor="">Duration: </label>
                <input type="text" name="" id="duration" />
                <label htmlFor="">Rating: </label>
                <input type="number" name="" id="rating" />
                <label htmlFor="">Genre: </label>
                <input type="text" name="" id="genre" />
                <button type="button" onClick={addMovie}>Submit</button>
            </form>
        </div>
    );
}

export default AddMovies;