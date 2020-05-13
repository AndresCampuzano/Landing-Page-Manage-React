import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeaturesCard from '../components/FeaturesCard';
import Articles from '../components/Articles';
import ArticlesCard from '../components/ArticlesCard';
import Footer from '../components/Footer';

// Icons Features

import iconOnline from '../components/static/images/icon-online.svg';
import iconBudgeting from '../components/static/images/icon-budgeting.svg';
import iconOnboarding from '../components/static/images/icon-onboarding.svg';
import iconOpenAPI from '../components/static/images/icon-api.svg';

// Images Articles

import imageCurrency from '../components/static/images/image-currency.jpg';
import imageRestaurant from '../components/static/images/image-restaurant.jpg';
import imagePlane from '../components/static/images/image-plane.jpg';
import imageConfetti from '../components/static/images/image-confetti.jpg';

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Features>
				<FeaturesCard
					icon={iconOnline}
					title='Online Banking'
					text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
				/>
				<FeaturesCard
					icon={iconBudgeting}
					title='Simple Budgeting'
					text='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
				/>
				<FeaturesCard
					icon={iconOnboarding}
					title='Fast Onboarding'
					text='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
				/>
				<FeaturesCard
					icon={iconOpenAPI}
					title='Open API'
					text='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
				/>
			</Features>
			<Articles>
				<ArticlesCard
					image={imageCurrency}
					author='Claire Robinson'
					title='Receive money in any currency with no fees'
					text='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single'
				/>
				<ArticlesCard
					image={imageRestaurant}
					author='Wilson Hutton'
					title='Treat yourself without worrying about money'
					text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you'
				/>
				<ArticlesCard
					image={imagePlane}
					author='Wilson Hutton'
					title='Take your Easybank card wherever you go'
					text='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you'
				/>
				<ArticlesCard
					image={imageConfetti}
					author='Claire Robinson'
					title='Our invite-only Beta accounts are now live!'
					text='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site'
				/>
			</Articles>
			<Footer />
		</>
	);
};

export default App;
