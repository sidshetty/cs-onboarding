import React from 'react';

const TextBox = (props) => {
	return (
		<div className="mx-auto text-center">
			<h3>{props.title}</h3>
			<p className="card-subtitle mb-2 text-muted">{props.subtitle}</p>
		</div>
	);
};

export default TextBox;
