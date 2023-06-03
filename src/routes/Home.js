import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

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
		</>
	);
}

export default Home;
