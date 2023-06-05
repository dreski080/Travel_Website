import React from 'react';

// components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

// gambar
import K2 from '../assets/image/f11.jpg';

function Service() {
	return (
		<>
			<Navbar />
			<Hero cName="hero-mid" heroImg={K2} title="Service" btnClass="hide" />
			<Trip />
			<Footer />
		</>
	);
}

export default Service;
