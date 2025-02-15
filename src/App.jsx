import "./App.css";
import Shuffler from "./components/Shuffler";
import About from "./components/About";
import {Projects} from "./components/Projects";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

function App() {
	return (
		<>
			<Shuffler />
			<About />
			<Projects />
			<Contact />
			<Menu />
		</>
	);
}

export default App;
