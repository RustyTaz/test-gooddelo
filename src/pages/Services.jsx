import React from "react";
import "../styles/Services.css";
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpeg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

export default function Services() {
	return (
		<div className="sevice-container">
			<div className="service-card" style={{background: 'url(' + s1+ ')', backgroundSize: 'cover'}} >
				<div className="service-name">Снос зданий</div>
			</div>
            <div className="service-card" style={{background: 'url(' + s2+ ')', backgroundSize: 'cover'}} >
				<div className="service-name">Вывоз строительного мусора</div>
			</div>
            <div className="service-card" style={{background: 'url(' + s3+ ')', backgroundSize: 'cover'}} >
				<div className="service-name">Земляные работы</div>
			</div>
            <div className="service-card" style={{background: 'url(' + s4+ ')', backgroundSize: 'cover'}} >
				<div className="service-name">Работы по благоустройству</div>
			</div>
            <div className="service-card" style={{background: 'url(' + s5+ ')', backgroundSize: 'cover'}} >
				<div className="service-name">Рециклинг строительных городов</div>
			</div>
            <div className="service-card" style={{background: 'url(' + s6+ ')', backgroundSize: 'cover'}} >
				<div className="service-name">Демонтажные работы</div>
			</div>
		</div>
	);
}
