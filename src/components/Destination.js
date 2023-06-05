import React from 'react';
import './DestinationStyles.css';
import DestinationData from './DestinationData';

// gambar
import K1 from '../assets/image/f1.jpg';
import K2 from '../assets/image/f2.jpg';
import K3 from '../assets/image/f3.jpg';
import K4 from '../assets/image/f4.jpg';

function Destination() {
	return (
		<div className="destination">
			<h1>Populer Destination</h1>
			<p>Tours give you the opportunity to see a lot, within a time frame</p>
			<DestinationData
				className="first-des"
				heading="Taal Volcano, Batangas"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						eleifend felis in nunc pretium, at tincidunt nulla consectetur. Sed
						efficitur finibus velit, sed hendrerit orci consequat vel. Quisque a
						lacus ac risus fringilla volutpat at sed dolor. Phasellus sit amet
						nunc et enim interdum feugiat id id enim. Pellentesque habitant
						morbi tristique senectus et netus et malesuada fames ac turpis
						egestas. Integer auctor, massa eu lacinia pharetra, neque nibh
						consectetur dolor, sed convallis nulla orci sed neque."
				img1={K1}
				img2={K2}
			/>
			<DestinationData
				className="first-des-reverse"
				heading="Mt. Daguldul, Batangas"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						eleifend felis in nunc pretium, at tincidunt nulla consectetur. Sed
						efficitur finibus velit, sed hendrerit orci consequat vel. Quisque a
						lacus ac risus fringilla volutpat at sed dolor. Phasellus sit amet
		                nunc et enim interdum feugiat id id enim. Pellentesque habitant
						morbi tristique senectus et netus et malesuada fames ac turpis
						egestas. Integer auctor, massa eu lacinia pharetra, neque nibh
						consectetur dolor, sed convallis nulla orci sed neque."
				img1={K3}
				img2={K4}
			/>
		</div>
	);
}

export default Destination;
