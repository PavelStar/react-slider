import React from "react";
import SliderControls from "./../SliderControls/SliderControls";

const Popup = () => {
	return (
		<div>
			<div>
				<h2>Ключевое сообщение</h2>
				<b>Brendxy</b>
			</div>
			<ul>
				<li>
					<b>01</b>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</li>
				<li>
					<b>02</b>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</li>
				<li>
					<b>03</b>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</li>
				<li>
					<b>04</b>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</li>
				<li>
					<b>05</b>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</li>
				<li>
					<b>06</b>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</li>
			</ul>
			<SliderControls />
		</div>
	);
};

export default Popup;
