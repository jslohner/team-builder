import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

import TeamMemberCard from './components/TeamMemberCard.js';

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

const initMemberValues = {
	name: '',
	age: '',
	email: '',
	role: '',
	hobbies: ['', '', '']
}

function App() {

	const [teamMembers, setTeamMembers] = useState(initTeamMembers);

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
			</header>
		</div>
	);
}

export default App;

// const initTeamMembers = [
// 	{
// 		name: 'Justin',
// 		age: '19',
// 		occupation: 'Lambda School Student',
// 		hobbies: []
// 	}
// ]
