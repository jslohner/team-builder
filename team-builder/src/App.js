import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

import TeamMemberCard from './components/TeamMemberCard.js';
import Form from './components/Form.js';

const initTeamMembers = [
	{
		id: uuid(),
		name: 'Justin',
		age: '19',
		email: 'lohner4@gmail.com',
		role: 'Lambda School Student',
		hobbies: ['golf', 'video games', 'music']
	},
	{
		id: uuid(),
		name: 'Bingus',
		age: '25',
		email: 'bingus@bingus.com',
		role: 'CEO of Starbucks',
		hobbies: ['golf', 'skiing', 'travelling']
	},
	{
		id: uuid(),
		name: 'Rick',
		age: 'unknown',
		email: 'thatsthewaythenewsgoes@plumbus.com',
		role: 'Smartest man in the universe',
		hobbies: ['drinking', 'drinking', 'drinking']
	}
]

const initMemberFormValues = {
	name: '',
	age: '',
	email: '',
	role: '',
	hobbies: ['', '', '']
}

function App() {

	const [teamMembers, setTeamMembers] = useState(initTeamMembers);
	const [formValues, setFormValues] = useState(initMemberFormValues);

	console.log(teamMembers);

	const inputChange = evt => {
		setFormValues({
			...formValues,
			[evt.target.name]: evt.target.value
		});
	}

	const submit = evt => {
		evt.preventDefault();
		const newTeamMember = {
			id: uuid(),
			name: formValues.name,
			age: formValues.age,
			email: formValues.email,
			role: formValues.role,
			// hobbies: ['', '', '']
		}
		setTeamMembers([...teamMembers, newTeamMember]);
		setFormValues(initMemberFormValues);
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Team Member List</h1>
				{
					teamMembers.map(member => {
						return (
							<TeamMemberCard key={member.id} member={member}/>
						);
					})
				}
				<Form values={formValues} inputChange={inputChange} submit={submit}/>
			</header>
		</div>
	);
}

export default App;
