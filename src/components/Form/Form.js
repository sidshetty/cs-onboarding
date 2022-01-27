import React from 'react';
import Button from '../UI/Button';
const Form = (props) => {
	const formSubmitHandler = (e) => {
		e.preventDefault();
		let userData = {
			username: 'Sid'
		};
		props.onFormSubmit(userData);
	};

	return (
		<React.Fragment>
			<form className="mx-auto p-3 d-grid gap-3" onSubmit={formSubmitHandler}>
				<div classNameName="mb-3 ">
					<label className="form-label" htmlFor="name">
						Full Name
					</label>
					<input type="text" name="name" className="form-control" id="name" />
				</div>
				<div className="mb-3 ">
					<label className="form-label" for="username">
						Display Name
					</label>
					<input type="text" name="username" className="form-control" id="username" />
				</div>
				<div className="mb-3 input-group">
					<span className="input-group-text">www.eden.com/</span>
					<input type="text" className="form-control" id="basic-url" />
				</div>

				{props.step === 3 ? (
					<Button type="submit">Create WorkSpace</Button>
				) : (
					<Button onClickHandler={props.onIncrementByOne}>Next</Button>
				)}
			</form>
		</React.Fragment>
	);
};

export default Form;
