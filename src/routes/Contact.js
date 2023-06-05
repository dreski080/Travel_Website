import React from 'react';

// components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

// gambar
import K2 from '../assets/image/f11.jpg';

function Contact() {
	return (
		<>
			<Navbar />
			<Hero cName="hero-mid" heroImg={K2} title="Contact" btnClass="hide" />
			<ContactForm />
			<Footer />
		</>
	);
}

export default Contact;
