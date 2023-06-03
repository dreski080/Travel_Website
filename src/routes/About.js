import React from 'react';

// components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// gambar
import K2 from '../assets/image/f11.jpg';

function About() {
	return (
		<>
			<Navbar />
			<Hero cName="hero-mid" heroImg={K2} title="About" btnClass="hide" />
		</>
	);
}

export default About;
