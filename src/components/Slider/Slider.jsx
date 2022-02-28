import React from "react";
import ButtonLearnMore from "./../buttons/ButtonLearnMore/ButtonLearnMore.jsx";
import Popup from "./../Popup/Popup";
import "./Slider.scss";

const Slider = () => {
	return (
		<section>
			<ul className="slider">
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
		</section>
	);
};

export default Slider;
