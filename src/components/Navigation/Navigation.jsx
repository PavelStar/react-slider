import React from "react";
import HomeButton from "./../buttons/HomeButton/HomeButton";
import "./Navigation.scss";

const Navigation = () => {
	return (
		<nav className="navigation">
			<span className="navigation__btn-wrap">
				<HomeButton />
			</span>
			<p>Project</p>
		</nav>
	);
};

export default Navigation;
