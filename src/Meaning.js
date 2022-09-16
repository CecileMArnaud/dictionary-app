import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
	return (
		<div className="partOfSpeech">
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				if (index < 4) {
					return (
						<p key={index}>
							{definition.definition}
							<br />
							<span className="meaning-example">{definition.example}</span>
						</p>
					);
				} else {
					return null;
				}
			})}
			<div className="synonyms">
				<Synonyms synonyms={props.meaning.synonyms} />
			</div>
		</div>
	);
}
