import React from "react";
import LogoIcon from "./../../images/Logo-icon.png";

import "./Logo.scss";

const Logo = () => {
	return (
		<div className="logo">
			<img src={LogoIcon} alt="Onpoint" height={17} />
		</div>
	);
};

export default Logo;
