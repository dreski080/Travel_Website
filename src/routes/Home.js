import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

// gambar
import K1 from '../assets/image/12.jpg';

function Home() {
	return (
		<>
			<Navbar />
			<Hero
				cName="hero"
				heroImg={K1}
				title="Your Journey Your Story"
				text="Choose Your Favourite Destination."
				btnText="Travel Plan"
				url="/"
				btnClass="show"
			/>
			<Destination />
			<Trip />
			<Footer />
		</>
	);
}

export default Home;
