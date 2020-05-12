import React from 'react';

import './static/styles/Features.scss';

const Features = ({ children }) => {
	return (
		<section className='features'>
			<div className='featuresContainer'>
				<div className='features__title'>
					<h2>Why choose Easybank?</h2>
					<p>
						We leverage Open Banking to turn your bank account into your
						financial hub. Control your finances like never before.
					</p>
				</div>
				<div className='features__items'>{children}</div>
			</div>
		</section>
	);
};

export default Features;
