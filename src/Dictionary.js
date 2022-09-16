import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Images from "./Images.js";

export default function Dictionary() {
	let [query, setQuery] = useState(null);
	let [results, setResults] = useState(null);
	let [images, setImages] = useState(null);

	function search(event) {
		event.preventDefault();
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
		axios.get(apiURL).then(showDefinition);

		let pexelsApiKey =
			"563492ad6f91700001000001aa42f359e76542b78155e06c39a40c33";
		let pexelsApiURL = `https://api.pexels.com/v1/search?query=${query}&per_page=8`;
		axios
			.get(pexelsApiURL, {
				headers: { Authorization: `Bearer ${pexelsApiKey}` },
			})
			.then(getImages);
	}

	function getImages(response) {
		setImages(response.data.photos);
	}

	function showDefinition(response) {
		setResults(response.data[0]);
	}

	function getQuery(event) {
		setQuery(event.target.value);
	}
	return (
		<div className="dictionary">
			<section>
				<form onSubmit={search}>
					<input type="search" onChange={getQuery} />
					<input type="submit" className="search-submit-btn" />
				</form>
			</section>
			<Results results={results} />
			<Images images={images} />
		</div>
	);
}
