import React, { useRef, useState } from 'react';
import Button from '../UI/Button/Button';

const Form = (props) => {
	const usernameRef = useRef('');
	const nameRef = useRef();
	const workspaceNameRef = useRef();
	const workspaceUrlRef = useRef();
	const [ planState, setPlanState ] = useState(0);

	const setMyselfHandler = () => {
		setPlanState(0);
	};
	const setMyTeamHandler = () => {
		setPlanState(1);
	};
	let isMyselfActive = true;
	if (planState === 1) {
		isMyselfActive = false;
	} else {
		isMyselfActive = true;
	}

	const planStateClasses = 'd-inline-block border border-primary p-3 m-3 w-25 rounded pe-auto';

	const formSubmitHandler = (e) => {
		e.preventDefault();
		let userData = {
			username: usernameRef.current.value,
			name: nameRef.current.value,
			workspaceName: workspaceNameRef.current.value,
			workspaceUrl: workspaceUrlRef.current.value,
			plan: planState
		};
		props.onFormSubmit(userData);
	};

	return (
		<React.Fragment>
			<form className="mx-auto p-3 d-grid gap-3" onSubmit={formSubmitHandler}>
				<div className={`mb-3 ${props.step === 1 ? '' : 'd-none'}`}>
					<label className="form-label" htmlFor="name">
						Full Name
					</label>
					<input
						type="text"
						name="name"
						className="form-control"
						id="name"
						ref={nameRef}
						placeholder="Steve Jobs"
					/>
				</div>
				<div className={`mb-3 ${props.step === 1 ? '' : 'd-none'}`}>
					<label className="form-label" for="username">
						Display Name
					</label>
					<input
						type="text"
						name="username1"
						className="form-control"
						id="username"
						ref={usernameRef}
						placeholder="Steve"
					/>
				</div>

				<div className={`mb-3 ${props.step === 2 ? '' : 'd-none'}`}>
					<label className="form-label" for="workspacename">
						Workspace Name
					</label>
					<input
						type="text"
						name="workspacename"
						className="form-control"
						id="workspacename"
						placeholder="Eden"
						ref={workspaceNameRef}
					/>
				</div>
				<div className={`mb-3 input-group ${props.step === 2 ? '' : 'd-none'}`}>
					<span className="input-group-text">www.eden.com/</span>
					<input
						type="text"
						className="form-control"
						id="basic-url"
						ref={workspaceUrlRef}
						placeholder="Example"
					/>
				</div>

				<div className={`text-center mx-auto  ${props.step === 3 ? '' : 'd-none'}`}>
					<div
						className={`${planStateClasses} ${isMyselfActive ? 'border-primary' : 'border-dark'}`}
						onClick={setMyselfHandler}
					>
						<i class="fa fa-user fa-lg" />
						<h5>For Myself</h5>
						<p>Write better. Think more clearly. Stay organized</p>
					</div>
					<div
						className={`${planStateClasses} ${!isMyselfActive ? 'border-primary' : 'border-dark'}`}
						onClick={setMyTeamHandler}
					>
						<i class="fa fa-users fa-lg" />
						<h5>For My Team</h5>
						<p>Wikis, docs, tasks & projects, all in one place.</p>
					</div>
				</div>

				{props.step === 3 && <Button type="submit">Create WorkSpace</Button>}
			</form>

			{props.step < 3 && <Button onClickHandler={props.onIncrementByOne}>Next</Button>}
		</React.Fragment>
	);
};

export default Form;
