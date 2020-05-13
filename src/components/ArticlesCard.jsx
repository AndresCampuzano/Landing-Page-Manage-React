import React from 'react';

const ArticlesCard = ({ image, author, title, text }) => {
	return (
		<>
			<div className='articles__items--item'>
				<div>
					<img src={image} alt='article' />
				</div>
				<div className='articlesItemContainer'>
					<span>By {author}</span>
					<h4>{title}</h4>
					<p>{text} ...</p>
				</div>
			</div>
		</>
	);
};

export default ArticlesCard;
