import React, { useState, useEffect } from "react";
import SliderControls from "./../SliderControls/SliderControls";
import CloseIcon from "../svg/CloseIcon";
import "./Popup.scss";

const Popup = ({ isPopupShown, setIsPopupShown }) => {
	let advantagesList = [
		{ id: "1", itemNumber: 1, itemText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
		{ id: "2", itemNumber: 2, itemText: "Faucibus pulvinar elementum integer enim" },
		{ id: "3", itemNumber: 3, itemText: "Faucibus pulvinar elementum integer enim" },
		{ id: "4", itemNumber: 4, itemText: "Mi bibendum neque egestas congue quisque egestas diam" },
		{ id: "5", itemNumber: 5, itemText: "Venenatis lectus magna fringilla urna" },
		{ id: "6", itemNumber: 6, itemText: "Venenatis lectus magna fringilla urna" },
	];

	const [itemsToPage, setItemsToPage] = useState([]);
	const [startIndex, setStartIndex] = useState(0);
	const [itemsToShowCount, setItemsToShowCount] = useState(3);

	useEffect(() => {
		setItemsToPage(advantagesList.slice(startIndex, startIndex + itemsToShowCount));
	}, [startIndex]);

	return (
		<div className="popup">
			<div
				className="popup__overlay"
				// onClick={() => setIsPopupShown(!isPopupShown)}
			>
				<div className="popup__content">
					<button
						className="popup__close-button close-button"
						type="button"
						onClick={() => setIsPopupShown(!isPopupShown)}
					>
						<span className="visually-hidden">закрыть</span>
						<CloseIcon />
					</button>
					<div className="popup__title-wrap">
						<h2 className=" title-intro">
							<span className="title-intro">Преимущества</span>

							<p className="offer-slide__item-name">
								Brend<b>xy</b>
							</p>
						</h2>
					</div>
					<ul className="popup__advantages-list advantages-list">
						{itemsToPage.map((item) => {
							const { itemNumber, itemText, id } = item;
							return (
								<li className="advantages-list__item" key={id}>
									<b className="advantages-list__item-number">0{itemNumber}</b>
									<p className="advantages-list__item-text">{itemText}</p>
								</li>
							);
						})}
					</ul>
					<SliderControls
						arrayLength={advantagesList.length}
						startIndex={startIndex}
						setStartIndex={setStartIndex}
						itemsToShowCount={itemsToShowCount}
						setItemsToShowCount={setItemsToShowCount}
						itemsToShowCount={itemsToShowCount}
					/>
				</div>
			</div>
		</div>
	);
};

export default Popup;
