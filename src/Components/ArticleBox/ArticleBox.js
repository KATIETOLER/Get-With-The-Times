import React, { useState, useEffect } from 'react'
import SingleArticle from '../SingleArticle/SingleArticle'
import './ArticleBox.css'
import nextId from 'react-id-generator'

const ArticleBox = ({ allArticles, setCurrentArticle }) => {
	const articleCards = allArticles[0].map((article) => {
		return (
			<SingleArticle
				allArticles={allArticles}
				setCurrentArticle={setCurrentArticle}
				uri={article.uri}
				id={nextId()}
				title={article.title}
				abstract={article.abstract}
				byline={article.byline}
				img={article.multimedia[0].url}
				alt={article.multimedia[0].caption}
				section={article.section}
				key={nextId()}
			/>
		)
	})

	return (
		<div className='article-box-container'>
			<div className='title-container'>
				<p className='articles'>Articles</p>
			</div>
			<div className='article-cards-container'>{articleCards}</div>
		</div>
	)
}

export default ArticleBox
