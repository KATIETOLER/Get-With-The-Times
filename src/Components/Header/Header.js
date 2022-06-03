import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ options }) => {
	return (
		<main className='App-main'>
			<div className='header-container'>
				<div className='get-with'>get with The Times</div>
				{options}
			</div>
		</main>
	)
}

export default Header
