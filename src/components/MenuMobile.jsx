import React from "react"
import { push as Menu } from "react-burger-menu"
import { Link } from "react-router-dom"

import { MENU_MOBILE_STYLES } from "../styles/MenuMobileStyles.js"

export const MenuMobile = () => {
  return (
    <Menu right width="100%" styles={MENU_MOBILE_STYLES}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/about">About</Link>
    </Menu>
  )
}
