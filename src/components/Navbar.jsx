import { Link } from "react-router-dom";
import "./componentsCss/Navbar.css";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn-primary">Explore Galaxy</button>
				</Link>
				<div className="ml-auto">
					<Link to="/favorites">
						<button className="btn btn-primary">Go to Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};