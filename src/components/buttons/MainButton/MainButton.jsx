import React from "react";
import ArrowIcon from "./../../../images/btn-arrow.png";
import "./MainButton.scss";

const MainButton = ({ isPopupShown, setIsPopupShown, buttonName, setLinePosition }) => {
	const showPopup = () => {
		setIsPopupShown(!isPopupShown);
	};

	const toNextSlide = () => {
		setLinePosition(-window.innerWidth);
	};

	return (
		<button
			type="button"
			className="button-learn-more"
			onClick={buttonName === "Подробнее" ? showPopup : toNextSlide}
		>
			<span>
				<img src={ArrowIcon} alt=">>" width={15} />
			</span>
			{buttonName}
		</button>
	);
};

export default MainButton;
