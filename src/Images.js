import React from "react";

export default function Images(props) {
	if (props.images) {
		console.log(props.images);
		return (
			<section className="imageGallery">
				<div className="row">
					{props.images.map(function (image, index) {
						return (
							<div className="col-md-3 col-sm-6" key={index}>
								<a href={image.src.original}>
									<img
										src={image.src.tiny}
										alt={image.alt}
										className="img-fluid"
									/>
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}
