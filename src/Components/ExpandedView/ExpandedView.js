import React from 'react'
import './ExpandedView.css'
import { Link } from 'react-router-dom'

const ExpandedView = ({ allArticles, currentArticle }) => {
	const article = allArticles[0].find(
		(article) => article.uri === currentArticle
	)
	return (
		<div className='view-container'>
			<p>{article.title}</p>
			<p>{article.byline}</p>
			<img
				id='img'
				src={article.multimedia[0].url}
				alt={article.multimedia[0].caption}
			/>
			<p>{article.abstract}</p>
			<button id='readMore'>
				<a href={article.url} id='readMore'>
					Read More
				</a>
			</button>
			<p id='cr'>Above content copyright The New York Times Company 2022</p>
		</div>
	)
}

export default ExpandedView
