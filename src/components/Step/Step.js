import React from 'react';
import classes from './Step.module.css';

const NUMBER_OF_STEPS = [ 1, 2, 3, 4 ];

const Step = (props) => {
	const myStyle = {
		width: `${props.stepWidth}%`
	};
	const progressBar = NUMBER_OF_STEPS.map((id) => {
		if (id <= props.step) {
			return (
				<div
					key={id}
					onClick={() => props.changeStep(id)}
					className={` ${classes['progress-step']}  ${classes['progress-step-active']}`}
				/>
			);
		} else {
			return <div key={id} onClick={() => props.changeStep(id)} className={classes['progress-step']} />;
		}
	});

	return (
		<React.Fragment>
			<div className={classes.progressbar}>
				<div className={classes.progress} style={myStyle} />
				{progressBar}
			</div>
		</React.Fragment>
	);
};

export default Step;
