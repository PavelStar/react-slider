import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import MessageSlide from "../slides/MessageSlide/MessageSlide.jsx";
import OfferSlide from "../slides/OfferSlide/OfferSlide.jsx";
import IntroSlide from "../slides/IntroSlide/IntroSlide.jsx";
import "./Slider.scss";

const Slider = () => {
	const sliderWrapperRef = useRef();
	const sliderListRef = useRef();
	const [slideWidth, setSlideWidth] = useState();
	const [linePosition, setLinePosition] = useState(0);

	useEffect(() => {
		setSlideWidth(sliderWrapperRef.current.clientWidth);
	}, []);
	console.log(linePosition);

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
					<li className="slider__item slider__item--intro">
						<IntroSlide />
					</li>
					<li className={linePosition === -2048 ? "slider__item" : "slider__item slider__item--message"}>
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
