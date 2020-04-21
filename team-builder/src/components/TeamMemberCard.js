import React from 'react';

function TeamMemberCard(props) {
	return (
		<div className='team-member-card'>
			<h2 className='member-name'>{props.member.name}</h2>
			<p className='age'>{props.member.age}</p>
			<p className='email'>{props.member.email}</p>
			<p className='role'>{props.member.role}</p>
			{
				props.member.hobbies.map((hobby, index) => {
					return <p key={index}>{hobby}</p>
				})
			}
		</div>
	);
}

export default TeamMemberCard;
