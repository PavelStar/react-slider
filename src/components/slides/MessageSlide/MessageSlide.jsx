import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "./MessageSlide.scss";

const MessageSlide = () => {
	const textWrapRef = useRef();
	const customScrollRef = useRef();
	const textContentRef = useRef();

	const [customThumbPos, setCustomThumbPos] = useState(0);
	const [sliderMaxValue, setSliderMaxValue] = useState(null);
	const [currentValue, setCurrentValue] = useState(0);

	useEffect(() => {
		setSliderMaxValue(textWrapRef.current.scrollHeight - textWrapRef.current.clientHeight);
		setCustomThumbPos((textWrapRef.current.clientHeight / sliderMaxValue / 2) * currentValue);
		console.log((textWrapRef.current.clientHeight / sliderMaxValue) * currentValue);
		// setCustomThumbPos(textWrapRef.current.clientHeight)
	}, [sliderMaxValue, currentValue]);

	const onHandleScroll = (e) => {
		setCurrentValue(e.currentTarget.value);
		textWrapRef.current.scrollTo(0, e.currentTarget.value);
		// console.log(e.currentTarget.value);
	};

	const onMouseScroll = (e) => {
		setCurrentValue(e.currentTarget.scrollTop);
		// console.log(e.currentTarget.scrollTop);
	};

	return (
		<div className="message-slide">
			<h2 className="message-slide__title slider__slide-title">Текст сообщения</h2>
			<div className="message-slide__text-block-wrapper">
				<div className="message-slide__scroll-wrapper">
					<input
						className="message-slide__custom-scroll"
						type="range"
						orient="vertical"
						onChange={(e) => onHandleScroll(e)}
						// onMouseDown={() => console.log("mouseDown")}
						min={0}
						max={sliderMaxValue}
						value={currentValue}
						ref={customScrollRef}
					/>
					<div className="message-slide__slide-line"></div>
					<button
						// onClick={() => customScrollRef.current.click()}
						className="message-slide__custom-thumb"
						style={{ top: `${customThumbPos}px` }}
					></button>
				</div>

				<div className="message-slide__text-wrapper" onScroll={(e) => onMouseScroll(e)} ref={textWrapRef}>
					<p className="message-slide__text" ref={textContentRef}>
						<span>Lorem ipsum, dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in aliquam sem
						fringilla ut morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
						Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis.
						Est sit amet facilisis magna. Neque laoreet suspendisse interdum consectetur libero id. Nec
						ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
						sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar mattis nunc. Massa massa
						ultricies mi quis. Sit amet massa vitae tortor condimentum lacinia. Et malesuada fames ac turpis
						egestas integer eget. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum
						posuere. Amet justo donec enim diam vulputate ut pharetra sit. Risus ultricies tristique nulla
						aliquet enim tortor at auctor. Velit sed ullamcorper morbi tincidunt ornare massa. Quis
						hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque
						convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
						condimentum lacinia quis vel.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MessageSlide;
