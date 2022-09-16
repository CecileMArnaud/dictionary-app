import "./App.css";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
	return (
		<div className="App container">
			<header className="App-header">
				<h1>Dictionary</h1>
			</header>
			<main>
				<Dictionary />
			</main>
			<footer className="App-Footer">Coded with React</footer>
		</div>
	);
}
