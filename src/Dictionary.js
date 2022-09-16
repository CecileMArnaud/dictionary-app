import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	let [query, setQuery] = useState(null);
	function search(event) {
		event.preventDefault();
		alert(`searching ${query}`);
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
