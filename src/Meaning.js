import React from "react";

export default function Meaning(props) {
	console.log(props);
	return (
		<div className="partOfSpeech">
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				if (index < 4) {
					return (
						<ul>
							<li key={index}>
								{definition.definition}
								<br />
								<span className="example">{definition.example}</span>
							</li>
						</ul>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
}
