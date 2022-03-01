import React from "react";
import "./ButtonLearnMore.scss";
import ArrowIcon from "./../../../images/btn-arrow.png";

const ButtonLearnMore = () => {
	return (
		<div className="button-learn-more">
			<span>
				<img src={ArrowIcon} alt=">>" width={15} />
			</span>
			Что дальше?
		</div>
	);
};

export default ButtonLearnMore;
