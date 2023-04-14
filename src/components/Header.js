import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <nav className="navBar">
            <Link to='/sortAZ' className='link-button'>Sort by Name A-Z</Link>
            <Link to='/sortZA' className='link-button'>Sort by Name Z-A</Link>
            <Link to='/sortDateNO' className='link-button'>Sort Newest to Oldest</Link>
            <Link to='/sortDateON' className='link-button'>Sort Oldest to Newest</Link>
            <Link to='/sortRating' className='link-button'>Sort by Rating</Link>
        </nav>
    );
}

export default Header;