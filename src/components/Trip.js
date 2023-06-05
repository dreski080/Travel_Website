import React from 'react';
import './TripStyles.css';
import TripData from './TripData';

// gambar
import K5 from '../assets/image/f5.jpg';
import K6 from '../assets/image/f6.jpg';
import K7 from '../assets/image/f7.jpg';

function Trip() {
	return (
		<>
			<div className="trip">
				<h1>Recent Trips</h1>
				<p>You can discover unique destinations using Google Maps.</p>
				<div className="tripcard">
					<TripData
						image={K5}
						heading="Trip in Thailand"
						text="Ut sit amet eros ac tortor efficitur fermentum vitae ac lectus. Sed rutrum tellus sit amet mi vehicula efficitur. Sed eu tortor et lectus aliquam interdum. Quisque a congue metus. Fusce non nulla id libero sodales varius sed vitae metus. Nulla facilisi. Vivamus faucibus mi et purus feugiat, eu tincidunt nulla aliquet. Morbi non neque in mi venenatis tempus."
					/>
					<TripData
						image={K6}
						heading="Trip in Indonesia"
						text="Ut sit amet eros ac tortor efficitur fermentum vitae ac lectus. Sed rutrum tellus sit amet mi vehicula efficitur. Sed eu tortor et lectus aliquam interdum. Quisque a congue metus. Fusce non nulla id libero sodales varius sed vitae metus. Nulla facilisi. Vivamus faucibus mi et purus feugiat, eu tincidunt nulla aliquet. Morbi non neque in mi venenatis tempus."
					/>
					<TripData
						image={K7}
						heading="Trip in Malaysia"
						text="Ut sit amet eros ac tortor efficitur fermentum vitae ac lectus. Sed rutrum tellus sit amet mi vehicula efficitur. Sed eu tortor et lectus aliquam interdum. Quisque a congue metus. Fusce non nulla id libero sodales varius sed vitae metus. Nulla facilisi. Vivamus faucibus mi et purus feugiat, eu tincidunt nulla aliquet. Morbi non neque in mi venenatis tempus."
					/>
				</div>
			</div>
		</>
	);
}

export default Trip;
