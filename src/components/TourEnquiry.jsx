import React from "react";
import img1 from "../assets/img/dest4.png";

import Button from "../layouts/Button";

const TourEnquiry = () => {
	const backgroundColor = `bg-brightColor`;
	return (
		<div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
			<h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16 mb-5">
				Enquiry for upcoming tour
			</h1>
			<br />
			<div className=" flex flex-col lg:flex-row justify-between w-full">
				<form className=" w-full lg:w-2/5 space-y-5 bg-[#F2F2F2] p-5 rounded-xl">
					<h1 className="text-4xl font-semibold text-center">
						Contact for upcoming tour
					</h1>
					<div className=" flex flex-col">
						<label htmlFor="userName">Full Name</label>
						<input
							className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
							type="text"
							name="userName"
							id="userName"
							placeholder="Enter your name"
						/>
					</div>
					<div className=" flex flex-col">
						<label htmlFor="userEmail">Phone Number</label>
						<input
							className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
							type="tel"
							name="userEmail"
							id="userEmail"
							placeholder="Enter your Phone number"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						/>
					</div>
					<div className=" flex flex-col">
						<label htmlFor="userEmail">Pick Up Place</label>
						<input
							className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
							type="email"
							name="userEmail"
							id="userEmail"
							placeholder="Enter your Pick Up Place"
						/>
					</div>
					<div className=" flex flex-col">
						<label htmlFor="userEmail">Destination</label>
						<input
							className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
							type="email"
							name="userEmail"
							id="userEmail"
							placeholder="Enter your Destination Place"
						/>
					</div>

					<div className="flex flex-row justify-center">
						<Button title="Submit" backgroundColor={backgroundColor} />
					</div>
				</form>
				<div className=" flex flex-col items-center w-full lg:w-2/4 my-5">
					<img className=" rounded-lg" src={img1} alt="" />
					
				</div>
			</div>
		</div>
	);
};

export default TourEnquiry;
