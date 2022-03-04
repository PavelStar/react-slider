import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import MessageSlide from "../slides/MessageSlide/MessageSlide.jsx";
import OfferSlide from "../slides/OfferSlide/OfferSlide.jsx";
import MainButton from "../buttons/MainButton/MainButton.jsx";

import "./Slider.scss";

const Slider = () => {
	const sliderWrapperRef = useRef();
	const sliderListRef = useRef();
	const [slideWidth, setSlideWidth] = useState();
	const [linePosition, setLinePosition] = useState(0);

	useEffect(() => {
		setSlideWidth(sliderWrapperRef.current.clientWidth);
	}, []);

	let startPosition = null;
	let endPosition = null;
	let touchWidth = null;
	let slidesCount = null;

	const setTouchStart = (e) => {
		if (e.type === "mousedown") {
			startPosition = e.clientX;
		} else {
			startPosition = e.touches[0].clientX;
		}
	};

	const setTouchEnd = (e) => {
		if (e.type === "mouseup") {
			endPosition = e.clientX;
			switchSlides();
		} else {
			endPosition = e.touches[0].clientX;
		}
	};

	const switchSlides = () => {
		slidesCount = sliderListRef.current.childElementCount;
		touchWidth = startPosition - endPosition;

		if (Math.abs(touchWidth) > 50) {
			if (touchWidth > 0 && linePosition > -slidesCount * slideWidth + slideWidth) {
				setLinePosition(linePosition - slideWidth);
			}
			if (touchWidth < 0 && linePosition < 0) {
				setLinePosition(linePosition + slideWidth);
			}
		}
	};

	return (
		<section className="slider">
			<div ref={sliderWrapperRef} className="slider__wrapper">
				<ul
					className="slider__list"
					ref={sliderListRef}
					onTouchStart={(e) => setTouchStart(e)}
					onTouchMove={(e) => setTouchEnd(e)}
					onTouchEnd={switchSlides}
					onMouseUp={(e) => setTouchEnd(e)}
					onMouseDown={(e) => setTouchStart(e)}
					style={{
						transform: `translateX(${linePosition}px)`,
						transitionDuration: "1s",
					}}
				>
					<li className="slider__item">
						<div className="slider__intro-block intro-block">
							<h1 className="intro-block__title page-title">
								<span className="page-title__intro title-intro">Привет,</span>
								это <span className="page-title__bold">не</span> коммерческое
								<div className="page-title__last-row">
									задание <MainButton buttonName="Что дальше?" />
								</div>
							</h1>
						</div>
					</li>
					<li className="slider__item">
						<MessageSlide />
					</li>
					<li className="slider__item slider__item--offer">
						<OfferSlide />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Slider;
