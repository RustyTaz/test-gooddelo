import React from "react";
import Carousel from "react-bootstrap/Carousel";
import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import "../styles/CompletedWork.css";

export default function CompletedWork() {
	return (
		<div className="work-container">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100 carousel-img"
						src={work1}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h2>Институт</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 carousel-img"
						src={work2}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h2>Демонтаж ветхого 2-х этажного дома</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 carousel-img"
						src={work3}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h2>Демонтаж цеха на заводе Кузнецов</h2>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
