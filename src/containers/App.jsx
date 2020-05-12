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
				<FeaturesCard icon={iconOnline} />
				<FeaturesCard icon={iconBudgeting} />
				<FeaturesCard icon={iconOnboarding} />
				<FeaturesCard icon={iconOpenAPI} />
			</Features>
			<Articles>
				<ArticlesCard image={imageCurrency} />
				<ArticlesCard image={imageRestaurant} />
				<ArticlesCard image={imagePlane} />
				<ArticlesCard image={imageConfetti} />
			</Articles>
			<Footer />
		</>
	);
};

export default App;
