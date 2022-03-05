import React from "react";
import { useState } from "react";
import OfferImg from "./../../../images/offer-bottle.png";
import MainButton from "../../buttons/MainButton/MainButton";
import Popup from "../../Popup/Popup";
import "./OfferSlide.scss";
import "./Bubles.scss";

const OfferSlide = () => {
	const [isPopupShown, setIsPopupShown] = useState(false);

	return (
		<div className="offer-slide">
			<div className="offer-slide__wrapper">
				<div className="offer-slide__img-wrapper">
					<img className="offer-slide__offer-img" src={OfferImg} alt="item-name" height={300} />
					<div className="buble buble--1"></div>
					<div className="buble buble--2"></div>
					<div className="buble buble--3"></div>
					<div className="buble buble--4"></div>
					<div className="buble buble--5"></div>
					<div className="buble buble--6"></div>
					<div className="buble buble--7"></div>
					<div className="buble buble--8"></div>
				</div>
				<h2 className="offer-slide__title-wrapper title-intro">
					Ключевое сообщение
					<p className="offer-slide__item-name">
						Brend<b>xy</b>
					</p>
				</h2>

				<div className="offer-slide__content">
					<div className="offer-slide__item">
						<p className="offer-slide__item-text">
							Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus
							ultricies
						</p>
					</div>
					<div className="offer-slide__item">
						<p className="offer-slide__item-text">A arcu cursus vitae</p>
					</div>
					<div className="offer-slide__button-wrap">
						<MainButton
							buttonName="Подробнее"
							isPopupShown={isPopupShown}
							setIsPopupShown={setIsPopupShown}
						/>
					</div>
				</div>
			</div>
			{isPopupShown && <Popup isPopupShown={isPopupShown} setIsPopupShown={setIsPopupShown} />}
		</div>
	);
};

export default OfferSlide;
