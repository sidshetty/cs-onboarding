import React, { useState } from 'react';
import Form from './components/Form/Form';

import logo from './assets/logo.png';
import Step from './components/Step/Step';

import './App.css';
import Welcome from './components/Form/Welcome';
import Work from './components/Form/Work';
import Plan from './components/Form/Plan';
import Congratulations from './components/Form/Congratulations';
import Modal from './components/UI/Modal';
import TextBox from './components/UI/TextBox';
//import Button from './components/UI/Button';

const INITIAL_STATE = +1;

function App() {
	const [ step, setStep ] = useState(INITIAL_STATE);
	const [ userInfo, setUserInfo ] = useState({
		name: 'Red',
		username: '',
		workspaceName: '',
		workspaceUrl: '',
		plan: 0
	});

	const stepHandler = (clickedStep) => {
		if (clickedStep === 4) {
			return setStep(5);
		}
		if (clickedStep <= 4) {
			setStep(clickedStep);
		} else {
			setStep(1);
		}
	};
	const incrementByOne = () => {
		console.log('increment hua');
		setStep((prevStep) => {
			if (prevStep === 3) {
				return 4;
			} else return prevStep + 1;
		});
	};

	const formSubmitHandler = (userData) => {
		setUserInfo((prevUserInfo) => {
			return { ...prevUserInfo, ...userData };
		});
		console.log(userInfo);
	};

	let progressWidth = 0;
	let displayFormPart = <Welcome />;

	switch (step) {
		case 1:
			progressWidth = 20;
			displayFormPart = <Welcome />;
			break;
		case 2:
			progressWidth = 50;
			displayFormPart = <Work />;
			break;
		case 3:
			progressWidth = 80;
			displayFormPart = <Plan />;
			break;
		case 4:
			progressWidth = 100;
			displayFormPart = <Congratulations userName={userInfo.username} />;
			break;
		case 5:
			progressWidth = 20;

			displayFormPart = (
				<Modal onClose={setStep} step={step}>
					<TextBox title="Please fill in all the details" />
				</Modal>
			);
			break;
		default:
			progressWidth = 20;
			break;
	}

	return (
		<div className="container">
			<img src={logo} className="mx-auto d-block p-3" alt="Eden Logo" />
			<Step step={step} changeStep={stepHandler} stepWidth={progressWidth} />
			{displayFormPart}
			<Form onIncrementByOne={incrementByOne} step={step} userInfo={userInfo} onFormSubmit={formSubmitHandler} />
		</div>
	);
}

export default App;
