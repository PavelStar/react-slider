import React from "react";
import { useState, useEffect } from "react";
// import ArrowButton from "../buttons/ArrowButton/ArrowButton";
// import DotButton from "../buttons/DotButton/DotButton";
import ArrowIcon from "../svg/ArrowIcon";
import "./SliderControls.scss";

const SliderControls = ({ arrayLength, startIndex, setStartIndex, itemsToShowCount }) => {
	const [dotsListStartValues, setDotsListStartValues] = useState([]);

	useEffect(() => {
		let arr = [];
		let id = 0;
		for (let i = 0; i < arrayLength; i = i + itemsToShowCount) {
			id++;
			arr.push({ dotId: id, dotValue: i });
		}
		setDotsListStartValues(arr);
	}, []);

	const switchItems = (btnType) => {
		if (btnType === "left" && startIndex > 0) {
			setStartIndex(startIndex - itemsToShowCount);
		}
		if (btnType === "right" && startIndex < arrayLength - itemsToShowCount) {
			setStartIndex(startIndex + itemsToShowCount);
		}
	};

	return (
		<div className="slider-controls">
			<div className="slider-controls__buttons-wrapper">
				<button
					className="slider-controls__arrow-button slider-controls__arrow-button--left"
					onClick={() => switchItems("left")}
				>
					<ArrowIcon />
				</button>
				<ul className="slider-controls__dots-list">
					{dotsListStartValues.map((item) => {
						const { dotId, dotValue } = item;

						return (
							<li className="slider-controls__dot-item" key={dotId}>
								<button
									className={
										dotValue === startIndex
											? "slider-controls__dot-button slider-controls__dot-button--active"
											: "slider-controls__dot-button"
									}
									onClick={() => setStartIndex(dotValue)}
									type="button"
								></button>
							</li>
						);
					})}
				</ul>
				<button className="slider-controls__arrow-button" onClick={() => switchItems("right")}>
					<ArrowIcon />
				</button>
			</div>
		</div>
	);
};

export default SliderControls;
