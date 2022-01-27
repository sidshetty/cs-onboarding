import React from 'react';
import TextBox from '../UI/TextBox';

const Congratulations = (props) => {
	return <TextBox title={`Congratulations ${props.userName}`} subtitle="you can always change them later." />;
};

export default Congratulations;
