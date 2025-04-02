import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import AllPlanets from "../components/Planets/AllPlanets.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<AllPlanets />
		</div>
	);
}; 