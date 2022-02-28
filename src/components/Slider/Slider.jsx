import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ButtonLearnMore from "./../buttons/ButtonLearnMore/ButtonLearnMore.jsx";
import Popup from "./../Popup/Popup";
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
		startPosition = e.touches[0].clientX;
	};

	const setTouchEnd = (e) => {
		endPosition = e.touches[0].clientX;
	};

	const switchSlides = () => {
		slidesCount = sliderListRef.current.childElementCount;
		touchWidth = startPosition - endPosition;

		if (touchWidth > 0 && linePosition > -slidesCount * slideWidth + slideWidth) {
			setLinePosition(linePosition - slideWidth);
		}
		if (touchWidth < 0 && linePosition < 0) {
			setLinePosition(linePosition + slideWidth);
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
					style={{
						transform: `translateX(${linePosition}px)`,
						transitionDuration: "1s",
					}}
				>
					<li className="slider__item">
						<h1>Привет, это не коммерческое задание</h1>
						<ButtonLearnMore />
					</li>
					<li className="slider__item">
						<h2>Текст сообщения</h2>
						<div>
							<p>
								<span>Lorem ipsum, dolor sit amet</span> consectetur adipisicing elit. Sed expedita
								excepturi at, illo consectetur eligendi officiis aspernatur, illum ut nobis numquam eos
								cupiditate fugit aliquam voluptatum soluta laborum adipisci maxime.
							</p>
						</div>
					</li>
					<li className="slider__item">
						<div>
							<h2>Ключевое сообщение</h2>
							<b>Brendxy</b>
						</div>
						<ul>
							<li>
								Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus
								ultricies
							</li>
							<li>A arcu cursus vitae</li>
						</ul>
						<ButtonLearnMore />
						<Popup />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Slider;
