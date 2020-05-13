import React from 'react';

const FeaturesCard = ({ icon, title, text }) => {
	return (
		<>
			<div className='features__items--item'>
				<img src={icon} alt='item' />
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</>
	);
};

export default FeaturesCard;
