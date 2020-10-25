import React from 'react';
import { InputBase } from './ValidationInput.style';

interface ValidationInputProps {
	field: string;
	register: any;
	errors: any;
	label: string;
	watch: any;
	defaultValue?: string;
	type?: string;
}

const ValidationInput = ({
	field,
	register,
	errors,
	label,
	defaultValue = '',
	type = 'string',
	watch,
}: ValidationInputProps) => {
	return (
		<InputBase isEmpty={!watch(field) || watch(field).length === 0}>
			<div className='group'>
				<input
					id={field}
					type={type}
					defaultValue={defaultValue}
					name={field}
					ref={register({ required: true })}
					value={watch(field)}
				/>
				<label>{label}</label>
			</div>
			{errors[field] && <div className='error'>{field + ' is required'}</div>}
		</InputBase>
	);
};

export default ValidationInput;
