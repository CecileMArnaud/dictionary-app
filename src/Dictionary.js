import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
	let [query, setQuery] = useState(null);
	function search(event) {
		event.preventDefault();
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
		axios.get(apiURL).then(showDefinition);
	}

	function showDefinition(response) {
		console.log(response.data[0]);
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
		</div>
	);
}
