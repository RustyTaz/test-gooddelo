import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.css"
import logo from "../../../assets/excavator-logo.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} className="logo_img" alt="logo" />
      </Link>
      <ul>
        <CustomLink to="/about">О КОМПАНИИ</CustomLink>
        <CustomLink to="/services">УСЛУГИ</CustomLink>
        <CustomLink to="/completedwork"> РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</CustomLink>
        <CustomLink to="/contacts"> КОНТАКТЫ</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}