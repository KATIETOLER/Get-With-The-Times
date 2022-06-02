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
				<img src={img} alt={title} />
				<p className='title-container article-card'>{title}</p>
				<hr />
			</div>
		</Link>
	)
}

export default SingleArticle
