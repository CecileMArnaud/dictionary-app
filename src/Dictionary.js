import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
	let [query, setQuery] = useState(null);
	let [results, setResults] = useState(null);
	function search(event) {
		event.preventDefault();
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
		axios.get(apiURL).then(showDefinition);
	}

	function showDefinition(response) {
		setResults(response.data[0]);
	}

	function getQuery(event) {
		setQuery(event.target.value);
	}
	return (
		<div className="dictionary">
			<form onSubmit={search}>
				<input type="search" onChange={getQuery} />
				<input type="submit" className="search-submit-btn btn btn-primary" />
			</form>
			<Results results={results} />
		</div>
	);
}
