import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initTeamMembers = [
	{
		name: 'Justin',
		age: '19',
		email: 'lohner4@gmail.com'
		role: 'Lambda School Student',
		hobbies: ['golf', 'video games', 'music']
	},
	{
		name: 'Bingus',
		age: '25',
		email: 'bingus@bingus.com',
		role: 'CEO of Starbucks',
		hobbies: ['golf', 'skiing', 'travelling']
	},
	{
		name: 'Rick',
		age: 'unknown',
		email: 'thatsthewaythenewsgoes@plumbus.com',
		role: 'Smartest man in the universe',
		hobbies: ['drinking', 'drinking', 'drinking']
	}
]

function App() {

	const [teamMembers, setTeamMembers] = useState([]);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>App Header</h1>
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
