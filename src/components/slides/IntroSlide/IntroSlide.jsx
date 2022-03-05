import React from "react";
import MainButton from "../../buttons/MainButton/MainButton";
import "./IntroSlide.scss";

const IntroSlide = () => {
	return (
		<div className="intro-slide">
			<h1 className="intro-slide__title page-title">
				<span className="page-title__intro title-intro">Привет,</span>
				это <span className="page-title__bold">не</span> коммерческое
				<div className="page-title__last-row">
					задание <MainButton buttonName="Что дальше?" />
				</div>
			</h1>
		</div>
	);
};

export default IntroSlide;
