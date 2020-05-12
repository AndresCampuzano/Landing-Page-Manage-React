import React from 'react';

import './static/styles/Footer.scss';

// icons social media

import logoFooter from './static/images/white-logo.svg';

import iconFacebook from './static/images/icon-facebook.svg';
import iconYoutube from './static/images/icon-youtube.svg';
import iconTwitter from './static/images/icon-twitter.svg';
import iconPinterest from './static/images/icon-pinterest.svg';
import iconInstagram from './static/images/icon-instagram.svg';

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className='footerContainer'>
					<div className='footer__social'>
						<div>
							<img src={logoFooter} alt='logo footer' />
						</div>
						<div className='footer__social--icons'>
							<img src={iconFacebook} alt='icon' />
							<img src={iconYoutube} alt='icon' />
							<img src={iconTwitter} alt='icon' />
							<img src={iconPinterest} alt='icon' />
							<img src={iconInstagram} alt='icon' />
						</div>
					</div>
					<div className='footer__menu'>
						<div className='footer__menu--one'>
							<ul>
								<li>About Us</li>
								<li>Contact</li>
								<li>Blog</li>
							</ul>
						</div>
						<div className='footer__menu--two'>
							<ul>
								<li>Careers</li>
								<li>Support</li>
								<li>Privacy Policy</li>
							</ul>
						</div>
					</div>
					<div className='footer__menu--mobile'>
						<ul>
							<li>About Us</li>
							<li>Contact</li>
							<li>Blog</li>
							<li>Careers</li>
							<li>Support</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div className='footer__copyright'>
						<button className='btn'>Request Invite</button>
						<p>@ Easybank. All Rights Reserved</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
