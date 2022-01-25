import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const style = {
	table: {
		borderCollapse: 'collapse'
	},
	tableCell: {
		border: '1px solid gray',
		margin: 0,
		padding: '5px 10px',
		width: 'max-content',
		minWidth: '150px'
	},
	form: {
		container: {
			padding: '20px',
			border: '1px solid #F0F8FF',
			borderRadius: '15px',
			width: 'max-content',
			marginBottom: '40px'
		},
		inputs: {
			marginBottom: '5px'
		},
		submitBtn: {
			marginTop: '10px',
			padding: '10px 15px',
			border: 'none',
			backgroundColor: 'lightseagreen',
			fontSize: '14px',
			borderRadius: '5px'
		}
	}
};

function PhoneBookForm(props) {
	const [ firstNameRef ] = useRef('Coder');
	const [ lastNameRef ] = useRef('Byte');
	const [ phoneRef ] = useRef('8885559999');

	const submitHandler = (e) => {
		e.preventDefault();
		let finalObj = {
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			phone: phoneRef.current.value
		};
		props.addEntryToPhoneBook(finalObj);
	};

	return (
		<form onSubmit={submitHandler} style={style.form.container}>
			<label>First name:</label>
			<br />
			<input style={style.form.inputs} className="userFirstname" name="userFirstname" type="text" />
			<br />
			<label>Last name:</label>
			<br />
			<input style={style.form.inputs} className="userLastname" name="userLastname" type="text" />
			<br />
			<label>Phone:</label>
			<br />
			<input style={style.form.inputs} className="userPhone" name="userPhone" type="text" />
			<br />
			<input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" />
		</form>
	);
}

function InformationTable(props) {
	const phoneBookList = props.phoneBookData.map((item, i) => (
		<tr key={i}>
			<td style={style.tableCell}>{item.firstName}</td>
			<td style={style.tableCell}>{item.lastName}</td>
			<td style={style.tableCell}>{item.phone}</td>
		</tr>
	));

	return (
		<table style={style.table} className="informationTable">
			<thead>
				<tr>
					<th style={style.tableCell}>First name</th>
					<th style={style.tableCell}>Last name</th>
					<th style={style.tableCell}>Phone</th>
				</tr>
				{phoneBookList}
			</thead>
		</table>
	);
}

const DEFAULT_PHONEBOOK = [
	{ firstName: 'Coder', lastName: 'Byte', phone: '7897451230', key: 1 },
	{ firstName: 'Coder', lastName: 'Byte', phone: '7897451110', key: 2 }
];

function Application(props) {
	const [ phoneBook, SetPhoneBook ] = useState(DEFAULT_PHONEBOOK);

	const addEntryToPhoneBookHandler = (finalObj) => {
		SetPhoneBook((prevState) => {
			return [ ...prevState, finalObj ];
		});
	};

	return (
		<section>
			<PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBookHandler} />
			<InformationTable phoneBookData={phoneBook} />
		</section>
	);
}

ReactDOM.render(<Application />, document.getElementById('root'));
