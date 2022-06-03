import './App.css'
import React, { useState, useEffect } from 'react'
import ArticleBox from '../ArticleBox/ArticleBox'
import fetchData from '../../apiCalls'
import { Route, Routes } from 'react-router-dom'
import Error from '../Error/Error'
import ExpandedView from '../ExpandedView/ExpandedView'
import Header from '../Header/Header'
import Search from '../SearchBar/Search'

function App() {
	const [allArticles, setAllArticles] = useState(null)
	const [error, setError] = useState('')
	const [currentArticle, setCurrentArticle] = useState(null)

	useEffect(() => {
		fetchData('obituaries')
			.then((data) => setAllArticles([data.results]))
			.catch((error) => setError(error))
	}, [])

	const filterOptions = (type) => {
		fetchData(type).then((data) => setAllArticles([data.results]))
	}

	return (
		<div className='App'>
			<main className='App-main'>
				<Header />
				<Search filterOptions={filterOptions} />
			</main>
			<div className='content-container'>
				<div className='stripe1'>
					<div className='stripe2'>
						<div className='stripe3'>
							<div className='stripe4'>
								<Routes>
									<Route
										path='/articles/:id'
										element={
											<ExpandedView
												allArticles={allArticles}
												currentArticle={currentArticle}
											/>
										}
									/>
									<Route
										path='/'
										element={
											allArticles && (
												<ArticleBox
													allArticles={allArticles}
													setCurrentArticle={setCurrentArticle}
												/>
											)
										}
									/>
									<Route path='/error' element={<Error error={error} />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
