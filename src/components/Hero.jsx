import React from 'react';

import './static/styles/Hero.scss';

import mockups from './static/images/image-mockups.png';
import test from './static/images/bg-intro-desktop.svg';
import testMobile from './static/images/bg-intro-desktop.svg';

const Hero = () => {
	return (
		<>
			<div>
				<section className='hero'>
					<div className='heroContainer grid-hero'>
						<div className='hero__title div1'>
							<div className='hero__title--container'>
								<h1>Next generation digital banking</h1>
								<p>
									Take your financial life online. Your Easybank
									account will be a one-stop-shop for spending, saving,
									budgeting, investing, and much more.
								</p>
								<button className='btn'>Request Invite</button>
							</div>
						</div>
						<div className='hero__image div2'>
							<img src={mockups} alt='phones' />
						</div>
					</div>
				</section>
				<section className='heroMobile'>
					<div className='heroMobile__images'>
						<img src={mockups} alt='phones' />
					</div>
					<div className='heroMobile__text'>
						<div className='heroMobile__text--container'>
							<h1>Next generation digital banking</h1>
							<p>
								Take your financial life online. Your Easybank account
								will be a one-stop-shop for spending, saving, budgeting,
								investing, and much more.
							</p>
							<button className='btn'>Request Invite</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Hero;
