import React from 'react';

function Form(props) {
	return (
		<form className='team-member-form'>
			<h2>Team Member Form</h2>
			<label>Name: <input value={props.values.name} onChange={props.inputChange} name='name' type='text'/></label>
			<label>Age: <input value={props.values.age} onChange={props.inputChange} name='age' type='text'/></label>
			<label>Email: <input value={props.values.email} onChange={props.inputChange} name='email' type='text'/></label>
			<label>Role: <input value={props.values.role} onChange={props.inputChange} name='role' type='text'/></label>
			<button onClick={props.submit}>Submit</button>
		</form>
	);
}

export default Form;

// hobbies
