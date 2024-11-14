import React from "react";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="bg-darkBackground text-white">
			<div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
				<div className=" w-full md:w-1/4">
					<h1 className=" font-semibold text-xl pb-4">
						Five Ocens <br /> Tour & Travels
					</h1>
					<p className=" text-md ">
						With Five Ocens Tour & Travels you can experience new travel and the
						best tourist destinations that we have to offer
					</p>
				</div>
				<div>
					<h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Address</h1>
					<nav className=" flex flex-col gap-2">
						<p className=" transition-all " href="/">
							Janki Mandir Rd, Ganga Nagar, Mahananda Para, <br /> Siliguri,
							West Bengal-(734001)
						</p>
						<h1 className=" font-medium text-xl  pt-5 md:pt-0">
							Phone :- <span className="text-[15px] ps-2">082506 35300</span>
						</h1>
						<h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
							Google :-
							<span className="text-[15px]">
								<a
									className="hover:text-brightColor transition-all cursor-pointer ps-2 hover:underline"
									href="https://g.co/kgs/omAqufM"
									target="_blank"
								>
									Visit Five Ocens Tour & Travels on google
								</a>
							</span>
						</h1>
					</nav>
				</div>
				<div>
					<h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
					<nav className=" flex flex-col md:items-center gap-2">
						<a
							className="hover:text-brightColor transition-all cursor-pointer ps-2 hover:underline"
							href="https://www.facebook.com/fiveoceanstourtravels"
							target="_blank"
						>
							<BsWhatsapp
								size={30}
								className="hover:text-brightColor transition-all cursor-pointer mb-5"
							/>
						</a>

						<a
							className="hover:text-brightColor transition-all cursor-pointer ps-2 hover:underline"
							href="https://www.facebook.com/fiveoceanstourtravels"
							target="_blank"
						>
							<BsFacebook
								size={30}
								className="hover:text-brightColor transition-all cursor-pointer mb-5"
							/>
						</a>
						<a
							className="hover:text-brightColor transition-all cursor-pointer ps-2 hover:underline"
							href="https://www.instagram.com/fiveoceanstourtravels?igsh=czF4eWdmcW5xNzdn"
							target="_blank"
						>
							<BsInstagram
								size={30}
								className="hover:text-brightColor transition-all cursor-pointer mb-5"
							/>
						</a>
					</nav>
				</div>
			</div>
			<div>
				<p>
					<p className=" text-center py-4">
						@copyright developed by
						<span className=" text-brightColor"> champion programmers</span> |
						All rights reserved
					</p>
				</p>
			</div>
		</div>
	);
};

export default Footer;
