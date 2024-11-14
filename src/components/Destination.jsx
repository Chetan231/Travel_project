import React from "react";
import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";

import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
	return (
		<div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
			<h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
				Most Popular Destinations
			</h1>

			<div className=" flex flex-col lg:flex-row gap-5 mt-14">
				<DestinationCard
					img={img1}
					title="Ladakh, J&K"
					para="Ladakh is sparsely populated, with a rich Tibetan-linked culture and history, offering breathtaking landscapes, unique adventure opportunities, and a peaceful, remote atmosphere for travelers..
          "
					primaryLink="https://booktickets.com"
					secondaryLink="https://en.wikipedia.org/wiki/Ladakh"
				/>
				<DestinationCard
					img={img2}
					title="Nainital, Uttarakhand"
					para="Nainital is a picturesque town and headquarters of Nainital district in Kumaon division, Uttarakhand, India, known for its scenic lakes, lush hills, vibrant markets, and tourism."
					primaryLink="https://booktickets.com"
					secondaryLink="https://en.wikipedia.org/wiki/Nainital"
				/>
				<DestinationCard
					img={img3}
					title="Manali, Himachal Pradesh"
					para="Manali, in Himachal Pradesh, is famous for its scenic beauty and adventure activities like trekking and skiing. Key attractions include Solang Valley and Rohtang Pass."
					primaryLink="https://booktickets.com"
					secondaryLink="https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh"
				/>
			</div>
		</div>
	);
};

export default Destination;
