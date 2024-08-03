/** @format */

import "./App.css";
import {
	Routes,
	Route,
} from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<PokemonList />}
				/>
				<Route
					path="pokemondetail"
					element={<PokemonDetail />}
				/>
			</Routes>
		</>
	);
}

export default App;
