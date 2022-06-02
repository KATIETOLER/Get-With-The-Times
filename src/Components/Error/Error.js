import React from 'react'
import './Error.css'

const Error = (error) => {
	return (
		<div className='error-modal-container'>
			<div className='error-modal'>
				<h3>oops! {error}</h3>
			</div>
		</div>
	)
}
export default Error
