import React, { useState } from 'react'
import './Search.css'
import artIcon from '../../arts-icon.png'
import obitIcon from '../../obits-icon.png'
import fashionIcon from '../../fashion-icon.png'
const Search = ({ filterOptions }) => {
	return (
		<div className='search-container'>
			<div className='button-wrapper'>
				<button onClick={() => filterOptions('arts')}>
					<img src={artIcon} alt='arts-icon' id='btnIcon' />
				</button>
			</div>

			<div className='button-wrapper'>
				<button onClick={() => filterOptions('obituaries')}>
					{' '}
					<img src={obitIcon} alt='obituaries-icon' id='btnIcon' />
				</button>
			</div>
			<div className='button-wrapper'>
				<button onClick={() => filterOptions('fashion')}>
					<img src={fashionIcon} alt='fashion-icon' id='btnIcon' />
				</button>
			</div>
		</div>
	)
}

export default Search
