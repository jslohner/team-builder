import React from 'react';
import './ContentStyle.css';

function TeamMemberCard(props) {
	return (
		<div className='team-member-card'>
			<div className='card-details'>
				<h2 className='member-name'>Name - {props.member.name}</h2>
				<p className='age'>Age - {props.member.age}</p>
				<p className='email'>Email - {props.member.email}</p>
				<p className='role'>Role - {props.member.role}</p>
			</div>
		</div>
	);
}

export default TeamMemberCard;
