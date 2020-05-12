import React from 'react';

const FeaturesCard = ({ icon }) => {
	return (
		<>
			<div className='features__items--item'>
				<img src={icon} alt='item' />
				<h3>Online Banking</h3>
				<p>
					Our modern web and mobile applications allow you to keep track of
					your finances wherever you are in the world.
				</p>
			</div>
		</>
	);
};

export default FeaturesCard;
