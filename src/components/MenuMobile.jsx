import React from "react"
import { push as Menu } from "react-burger-menu"
import { Link } from "react-router-dom"

import { MENU_MOBILE_STYLES } from "../styles/MenuMobileStyles.js"

export const MenuMobile = () => {
  return (
    <Menu right width="100%" styles={MENU_MOBILE_STYLES}>
      <div className="routes font-display text-title3 flex flex-col items-center gap-y-3">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="menu-footer absolute bottom-0 left-0 w-full flex items-end justify-between pb-8 px-8">
        <a href="#" className="font-button text-btnTextSm flex gap-x-2">
          <img src="img/icon-download.svg" alt="download icon"></img>download CV
        </a>
        <div className="social flex flex-col gap-y-3">
          <img src="img/linkedin.svg" alt="linkedin logo" />
          <img src="img/github.svg" alt="github logo" />
          <img src="img/behance.svg" alt="behance logo" />
        </div>
      </div>
    </Menu>
  )
}
