import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const handleChange = () => {
		setMenu(!menu);
	};

	const backgroundColor = `bg-white`;

	return (
		<div>
			<div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
				<div className=" flex items-center">
					<Link to="/" spy={true} smooth={true} duration={500}>
						<h1 className=" font-semibold text-xl cursor-pointer">
							Five Ocens <br />
							Tour & Travel
						</h1>
					</Link>
				</div>
				<nav className="hidden lg:flex flex-row items-center gap-6">
					<Link
						to="home"
						spy={true}
						smooth={true}
						duration={500}
						className=" hover:text-brightColor transition-all cursor-pointer"
					>
						Home
					</Link>
					<Link
						to="features"
						spy={true}
						smooth={true}
						duration={500}
						className=" hover:text-brightColor transition-all cursor-pointer"
					>
						Features
					</Link>
					<Link
						to="destination"
						spy={true}
						smooth={true}
						duration={500}
						className=" hover:text-brightColor transition-all cursor-pointer"
					>
						Destination
					</Link>
					<Link
						to="about"
						spy={true}
						smooth={true}
						duration={500}
						className=" hover:text-brightColor transition-all cursor-pointer"
					>
						About
					</Link>
					<Link
						to="contact"
						spy={true}
						smooth={true}
						duration={500}
						className=" hover:text-brightColor transition-all cursor-pointer"
					>
						Contact
					</Link>
				</nav>

				<div className="hidden lg:flex flex-row items-center gap-4">
					<a
						className="hover:text-brightColor transition-all cursor-pointer ps-2 hover:underline"
						href="https://www.facebook.com/fiveoceanstourtravels"
						target="_blank"
					>
						<BsWhatsapp
							size={30}
							className="hover:text-brightColor transition-all cursor-pointer "
						/>
					</a>

					<a
						className="hover:text-brightColor transition-all cursor-pointer ps-2 hover:underline"
						href="https://www.facebook.com/fiveoceanstourtravels"
						target="_blank"
					>
						<BsFacebook
							size={30}
							className="hover:text-brightColor transition-all cursor-pointer "
						/>
					</a>
					<a
						className="hover:text-brightColor transition-all cursor-pointer ps-2 hover:underline"
						href="https://www.instagram.com/fiveoceanstourtravels?igsh=czF4eWdmcW5xNzdn"
						target="_blank"
					>
						<BsInstagram
							size={30}
							className="hover:text-brightColor transition-all cursor-pointer "
						/>
					</a>
				</div>

				<div
					className=" lg:hidden flex items-center p-2"
					onClick={handleChange}
				>
					<AiOutlineMenu size={25} />
				</div>
			</div>
			<div
				className={` ${
					menu ? "translate-x-0" : "-translate-x-full"
				} lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
			>
				<Link
					to="home"
					spy={true}
					smooth={true}
					duration={500}
					className=" hover:text-brightColor transition-all cursor-pointer"
				>
					Home
				</Link>
				<Link
					to="features"
					spy={true}
					smooth={true}
					duration={500}
					className=" hover:text-brightColor transition-all cursor-pointer"
				>
					Features
				</Link>
				<Link
					to="destination"
					spy={true}
					smooth={true}
					duration={500}
					className=" hover:text-brightColor transition-all cursor-pointer"
				>
					Destination
				</Link>
				<Link
					to="about"
					spy={true}
					smooth={true}
					duration={500}
					className=" hover:text-brightColor transition-all cursor-pointer"
				>
					About
				</Link>
				<Link
					to="contact"
					spy={true}
					smooth={true}
					duration={500}
					className=" hover:text-brightColor transition-all cursor-pointer"
				>
					Contact
				</Link>

				<div className="flex flex-col lg:hidden lg:flex-row items-center gap-4">
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
				</div>
			</div>
		</div>
	);
};

export default Navbar;
