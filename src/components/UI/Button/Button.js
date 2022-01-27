import React from 'react';

const Button = (props) => {
	return (
		<button
			src={props.source}
			className="btn btn-primary w-50 p-3 mx-auto d-block"
			type={props.type}
			onClick={props.onClickHandler}
		>
			{props.children}
		</button>
	);
};

export default Button;
