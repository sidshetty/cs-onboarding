import React from 'react';

const Input = (props) => {
	const inputGroup = `${props.children ? 'input-group' : ''}`;

	return (
		<div className={`mb-3 ${inputGroup}`}>
			{props.label ? (
				<label className="form-label" htmlFor={props.id}>
					{props.label}
				</label>
			) : (
				''
			)}
			{props.children ? <span className="input-group-text">{props.children}</span> : ''}
			<input type={props.type} name={props.name} className="form-control" id={props.id} />
		</div>
	);
};

export default Input;
