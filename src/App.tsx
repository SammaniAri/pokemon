/** @format */

import "./App.css";
import {
	Routes,
	Route,
} from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetailComponent from "./pages/PokemonDetail";

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
					element={
						<PokemonDetailComponent />
					}
				/>
			</Routes>
		</>
	);
}

export default App;
