import React from 'react';
import Input from '../UI/Input';
const Form = (props) => {
	return (
		<React.Fragment>
			<form className="mx-auto p-3 d-grid gap-3">
				<Input type="text" name="name" label="Full Name" id="name" />
				<Input type="text" name="username" label="Display Name" id="username" />

				<Input type="text" id="basic-url" aria-describedby="basic-addon3">
					www.eden.com/
				</Input>

				{props.step === 4 ? (
					<button type="submit" className="btn btn-primary">
						Create WorkSpace
					</button>
				) : (
					<div className="btn btn-primary" onClick={props.onIncrementByOne}>
						Next
					</div>
				)}
			</form>
		</React.Fragment>
	);
};

export default Form;
