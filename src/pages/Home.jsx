
import AllPeople from "../components/People/AllPeople.jsx";
import AllPlanets from "../components/Planets/AllPlanets.jsx";
import AllStarships from "../components/Starships/AllStarships.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../pagesCss/Home.css";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
  
	return (
	  <div className="home-wrapper">
		<div className="section-group">
		  <h2 className="section-title">PLANETS</h2>
		  <div className="scroll-row">
			<AllPlanets />
		  </div>
		</div>
  
		<div className="section-group">
		  <h2 className="section-title">PEOPLE</h2>
		  <div className="scroll-row">
			<AllPeople />
		  </div>
		</div>
  
		<div className="section-group">
		  <h2 className="section-title">STARSHIPS</h2>
		  <div className="scroll-row">
			<AllStarships />
		  </div>
		</div>
	  </div>
	);
  };
  