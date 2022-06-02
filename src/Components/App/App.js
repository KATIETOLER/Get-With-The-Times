import './App.css'
import React, { useState, useEffect } from 'react'
import ArticleBox from '../ArticleBox/ArticleBox'
import fetchData from '../../apiCalls'
import { Route, Routes } from 'react-router-dom'
import Error from '../Error/Error'
import ExpandedView from '../ExpandedView/ExpandedView'
import Header from '../Header/Header'
function App() {
	const [allArticles, setAllArticles] = useState(null)
	const [error, setError] = useState('')
	const [currentArticle, setCurrentArticle] = useState(null)
	useEffect(() => {
		fetchData()
			.then((data) => setAllArticles([data.results]))
			.catch((error) => setError(error))
	}, [])

	return (
		<div className='App'>
			<main className='App-main'>
				<Header />
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
					<Route path='/error' element={<Error />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
