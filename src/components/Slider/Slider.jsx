import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import MessageSlide from "../slides/MessageSlide/MessageSlide.jsx";
import OfferSlide from "../slides/OfferSlide/OfferSlide.jsx";
import IntroSlide from "../slides/IntroSlide/IntroSlide.jsx";
import "./Slider.scss";

const Slider = ({ linePosition, setLinePosition }) => {
	const sliderWrapperRef = useRef();
	const sliderListRef = useRef();
	const [slideWidth, setSlideWidth] = useState();

	useEffect(() => {
		setSlideWidth(sliderWrapperRef.current.clientWidth);
	}, []);

	let startPosition = null;
	let endPosition = null;
	let touchWidth = null;
	let slidesCount = null;
	let isMouseMove = false;

	const setTouchStart = (e) => {
		startPosition = e.touches[0].clientX;
	};

	const setTouchMove = (e) => {
		endPosition = e.touches[0].clientX;
		isMouseMove = true;
	};

	const setTouchEnd = () => {
		if (isMouseMove) switchSlides();
	};

	const switchSlides = (e) => {
		slidesCount = sliderListRef.current.childElementCount;
		touchWidth = startPosition - endPosition;
		if (Math.abs(touchWidth) > 50) {
			if (touchWidth > 0 && linePosition !== -(slidesCount - 1) * slideWidth) {
				setLinePosition(linePosition - slideWidth);
			}
			if (touchWidth < 0 && linePosition !== 0) {
				setLinePosition(linePosition + slideWidth);
			}
		}

		isMouseMove = false;
	};

	return (
		<section className="slider">
			<div ref={sliderWrapperRef} className="slider__wrapper">
				<ul
					className="slider__list"
					ref={sliderListRef}
					onTouchStart={(e) => setTouchStart(e)}
					onTouchMove={(e) => setTouchMove(e)}
					onTouchEnd={setTouchEnd}
					style={{
						transform: `translateX(${linePosition}px)`,
						transitionDuration: "1s",
					}}
				>
					<li className="slider__item slider__item--intro">
						<IntroSlide setLinePosition={setLinePosition} />
					</li>
					<li className={linePosition < -2048 ? "slider__item" : "slider__item slider__item--message"}>
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
