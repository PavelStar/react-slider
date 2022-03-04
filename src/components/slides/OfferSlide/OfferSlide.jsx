import React from "react";
import { useState } from "react";
import OfferImg from "./../../../images/offer-bottle.png";
import MainButton from "../../buttons/MainButton/MainButton";
import Popup from "../../Popup/Popup";
import "./OfferSlide.scss";

const OfferSlide = () => {
	const [isPopupShown, setIsPopupShown] = useState(false);

	return (
		<div className="offer-slide">
			<div className="offer-slide__wrapper">
				<img className="offer-slide__offer-img" src={OfferImg} alt="item-name" height={300} />
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
