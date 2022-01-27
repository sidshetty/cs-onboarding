import React from 'react';
import Button from '../UI/Button/Button';
import TextBox from '../UI/TextBox/TextBox';

const Congratulations = (props) => {
	return (
		<React.Fragment>
			<TextBox
				title={`Congratulations ${props.name}`}
				subtitle="You have completed onboarding, you can start using Eden!"
			>
				<i className="fa fa-check-circle fa-5x mx-auto text-center" />
			</TextBox>;
			<Button source="mailto:developersiddharths@gmail.com">Launch Eden</Button>
		</React.Fragment>
	);
};

export default Congratulations;
