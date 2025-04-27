import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className ="link"> 
                        <Link to="/read">Read</Link>
                    </li>
                    <li className="link">
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;