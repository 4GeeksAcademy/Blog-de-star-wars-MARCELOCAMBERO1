import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn-primary">Home</button>
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