import React from "react";

const Button = ({ title, backgroundColor, onClick }) => {
	return (
		<button
			className={`${backgroundColor} py-2 px-2 rounded transition duration-300 ease-in-out transform bg-white hover:bg-indigo-600 hover:text-white hover:scale-105`}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;
