import React from "react";

export default function Synonyms(props) {
	if (props.synonyms.length > 0) {
		return (
			<div className="Synonyms">
				{props.synonyms.map(function (synonym, index) {
					if (index < 5) {
						return (
							<ul>
								<li key={index}>{synonym}</li>
							</ul>
						);
					} else return null;
				})}
			</div>
		);
	} else {
		return null;
	}
}
