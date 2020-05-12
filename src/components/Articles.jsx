import React from 'react';

import './static/styles/Articles.scss';

const Articles = ({ children }) => {
	return (
		<>
			<section className='articles'>
				<div className='articlesContainer'>
					<div className='articles__title'>
						<h3>Lastest Articles</h3>
					</div>
					<div className='articles__items'>{children}</div>
				</div>
			</section>
		</>
	);
};

export default Articles;
