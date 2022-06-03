import React from 'react'
import './SingleArticle.css'
import { Link } from 'react-router-dom'
import ExpandedView from '../ExpandedView/ExpandedView'

const SingleArticle = ({
	id,
	title,
	abstract,
	byline,
	img,
	alt,
	section,
	allArticles,
	uri,
	setCurrentArticle,
}) => {
	return (
		<Link
			to={`/articles/${id}`}
			style={{ textDecoration: 'none', color: 'white' }}>
			<div className='article-card' onClick={() => setCurrentArticle(uri)}>
				<p className='title-container article-card'>{title}</p>
				<img src={img} alt={alt} className='icon' />
			</div>
			<hr />
		</Link>
	)
}

export default SingleArticle
