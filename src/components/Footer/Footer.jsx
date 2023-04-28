import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/excavator-logo.png";
import phoneIcon from "../../assets/phone_icon.png";

export default function Footer() {
	return (
		<div className="footer">
			<Link to="/" className="site-title">
				<img src={logo} className="logo_img" alt="logo" />
			</Link>
			<div className="phone_number">
				<img src={phoneIcon} className="phone_img" alt="logo" />
                <p className="phone_number-text">8 (846)
				111-11-11</p>
			</div>
			<ul>
				<Link to="/about">О КОМПАНИИ</Link>
                <Link to="/services">УСЛУГИ</Link>
				<Link to="/completedwork"> РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</Link>
				<Link to="/contacts"> КОНТАКТЫ</Link>
			</ul>
		</div>
	);
}
