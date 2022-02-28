import Slider from "./components/Slider/Slider";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import "./App.scss";

function App() {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<Slider />
			</main>
			<footer>
				<Logo />
			</footer>
		</>
	);
}

export default App;
