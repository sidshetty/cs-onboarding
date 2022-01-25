import React, { useState } from 'react';
import Form from './components/Form/Form';

import logo from './assets/logo.png';
import Step from './components/Step/Step';
import TextBox from './components/UI/TextBox';
import './App.css';

const INITIAL_STATE = +1;

function App() {
	const [ step, setStep ] = useState(INITIAL_STATE);

	const stepHandler = (clickedStep) => {
		console.log(clickedStep);
		setStep(clickedStep);
	};
	const incrementByOne = () => {
		setStep((prevStep) => {
			if (prevStep === 3) {
				return 4;
			} else return prevStep + 1;
		});
	};

	let progressWidth = 0;
	switch (step) {
		case 1:
			progressWidth = 20;
			break;
		case 2:
			progressWidth = 50;
			break;
		case 3:
			progressWidth = 80;
			break;
		case 4:
			progressWidth = 100;
			break;
		default:
			progressWidth = 20;
			break;
	}

	return (
		<div className="container">
			<img src={logo} className="mx-auto d-block p-3" alt="Eden Logo" />
			<Step step={step} changeStep={stepHandler} stepWidth={progressWidth} />
			<TextBox title="Welcome! First things first.." subtitle="you can always change them later." />
			<Form onIncrementByOne={incrementByOne} step={step} />
		</div>
	);
}

export default App;
