import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>The Philip Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
    );
};

export default Navbar;

