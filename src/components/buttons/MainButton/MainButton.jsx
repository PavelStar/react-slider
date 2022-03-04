import React from "react";
import ArrowIcon from "./../../../images/btn-arrow.png";
import "./MainButton.scss";

const MainButton = ({ isPopupShown, setIsPopupShown, buttonName }) => {
	return (
		<button type="button" className="button-learn-more" onClick={() => setIsPopupShown(!isPopupShown)}>
			<span>
				<img src={ArrowIcon} alt=">>" width={15} />
			</span>
			{buttonName}
		</button>
	);
};

export default MainButton;
