import React, { useState } from "react";
import Slider from "./components/Slider/Slider";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import "./App.scss";

function App() {
	const [linePosition, setLinePosition] = useState(0);

	return (
		<>
			<header>
				<Navigation linePosition={linePosition} setLinePosition={setLinePosition} />
			</header>
			<main>
				<Slider linePosition={linePosition} setLinePosition={setLinePosition} />
			</main>
			<footer>
				<Logo />
			</footer>
		</>
	);
}

export default App;
