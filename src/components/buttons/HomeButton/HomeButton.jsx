import React from "react";
import HomeIcon from "./../../../images/home-icon.png";
import "./HomeButton.scss";

const HomeButton = ({ setLinePosition }) => {
	const toFirstSlide = () => {
		setLinePosition(0);
	};
	return (
		<button className="home-button" onClick={toFirstSlide}>
			<img src={HomeIcon} alt="home" height={20} />
		</button>
	);
};

export default HomeButton;
