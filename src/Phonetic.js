import React from "react";

export default function Phonetic(props) {
	if (props.phonetic.text) {
		return (
			<div className="phoentic">
				<div className="audio-phonetic">
					<a href={props.phonetic.audio}>Listen</a>
				</div>
				<div className="text-phonetic">{props.phonetic.text}</div>
			</div>
		);
	}
}
