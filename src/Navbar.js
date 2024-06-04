import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Review-Site</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Review</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;