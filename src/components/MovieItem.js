// import { Link } from 'react-router-dom'
const MovieItem = (props) => {

    return (
        <div className='movieItems'>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <p>{props.genre.map((elt) =>
                <p>{elt}</p>)}
            </p>
            {/* <Link to={`/filmdetail/${props.key}`}>Read More</Link> */}
        </div>
    );
}

export default MovieItem;