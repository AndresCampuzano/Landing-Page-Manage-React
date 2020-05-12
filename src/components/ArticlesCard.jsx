import React from 'react';

const ArticlesCard = ({ image }) => {
	return (
		<>
			<div className='articles__items--item'>
				<div>
					<img src={image} alt='article' />
				</div>
				<div className='articlesItemContainer'>
					<span>By Claire Robinson</span>
					<h4>Receive money in any currency with no fees</h4>
					<p>
						The world is getting smaller and we’re becoming more mobile.
						So why should you be forced to only receive money in a single.
					</p>
				</div>
			</div>
		</>
	);
};

export default ArticlesCard;
