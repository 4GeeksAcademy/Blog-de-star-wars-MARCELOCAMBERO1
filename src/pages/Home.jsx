
import AllPlanets from "../components/Planets/AllPlanets.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

// const {FavoritePlanets, setFavoritePlanets} = useState([])

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			{/* ACA ABRE HORIZONTAL SCROLL */}
			<AllPlanets  />
			{/* ACA CIERRA HORIZONTAL SCROLL */}
			{/* ListFavoritePlanets={FavoritePlanets} */}
		</div>
	);
}; 