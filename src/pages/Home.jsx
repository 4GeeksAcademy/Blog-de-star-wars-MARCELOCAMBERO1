
import AllPeople from "../components/People/AllPeople.jsx";
import AllPlanets from "../components/Planets/AllPlanets.jsx";
import AllStarships from "../components/Starships/AllStarships.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

// const {FavoritePlanets, setFavoritePlanets} = useState([])

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			{/* ACA ABRE HORIZONTAL SCROLL */}
			<div className="Planets"><h2>PLANETS</h2>
			<AllPlanets  />
			</div>
			<div className="People"><h2>PEOPLE</h2>
			<AllPeople   />
			</div>
			<div className="Starships"><h2>Starships</h2>
			<AllStarships  />
			</div>
			{/* ACA CIERRA HORIZONTAL SCROLL */}
			{/* ListFavoritePlanets={FavoritePlanets} */}
		</div>
	);
}; 