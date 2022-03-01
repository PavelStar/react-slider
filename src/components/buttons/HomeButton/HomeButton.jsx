import React from "react";
import HomeIcon from "./../../../images/home-icon.png";
import "./HomeButton.scss";

const HomeButton = () => {
	return (
		<button className="home-button">
			<img src={HomeIcon} alt="home" height={20} />
		</button>
	);
};

export default HomeButton;
