import React from "react";

export default function Phonetic(props) {
	if (props.phonetic.text) {
		return (
			<div className="phoentic">
				<a href={props.phonetic.audio}>Listen </a>
				<span>{props.phonetic.text}</span>
			</div>
		);
	}
}
