import React, { useState } from 'react';

import './static/styles/Header.scss';

import logo from './static/images/logo.svg';
import hamburger from './static/images/icon-hamburger.svg';
import iconClose from './static/images/icon-close.svg';

const Header = () => {
	const [count, setCount] = useState(2);
	console.log(count);

	return (
		<header className='header'>
			<div className='headerContainer'>
				<div className='header__logo'>
					<img src={logo} alt='logo' />
				</div>

				<div className='header__menu'>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
						<li>Blog</li>
						<li>Careers</li>
					</ul>
				</div>
				<div className='header__btn'>
					<button className='btn'>Request Invite</button>
				</div>
				<div className='header__hamburguer'>
					{count & 1 ? (
						<img
							src={iconClose}
							alt='menu'
							onClick={() => setCount(count + 1)}
						/>
					) : (
						<img
							src={hamburger}
							alt='menu'
							onClick={() => setCount(count + 1)}
						/>
					)}
				</div>
			</div>
			{count & 1 ? (
				<div className='header__responsive'>
					<div
						className='header__responsive--background'
						onClick={() => setCount(count + 1)}
					></div>
					<div className='header__responsive--menu'>
						<ul onClick={() => setCount(count + 1)}>
							<li>Home</li>
							<li>About</li>
							<li>Contact</li>
							<li>Blog</li>
							<li>Careers</li>
						</ul>
					</div>
				</div>
			) : (
				''
			)}
		</header>
	);
};

export default Header;
