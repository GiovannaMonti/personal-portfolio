import React, { useState } from "react"
import { push as Menu } from "react-burger-menu"
import { Link } from "react-router-dom"
import { RoughNotation } from "react-rough-notation"

import { MENU_MOBILE_STYLES } from "../styles/MenuMobileStyles.js"

export const MenuMobile = () => {
  const [menuItemId, setMenuItemId] = useState(null)
  return (
    <Menu right width="100%" styles={MENU_MOBILE_STYLES}>
      <div className="routes text-title3 flex flex-col items-center gap-y-3">
        <RoughNotation
          type="circle"
          show={menuItemId === "home"}
          padding={[10, 20, 10, 20]}
          strokeWidth={4}
          iterations={1}
          color="#4BFFB3"
          animationDuration={500}
          onMouseOver={() => {
            setMenuItemId("home")
          }}
          onMouseOut={() => {
            setMenuItemId(null)
          }}
        >
          <Link className="font-display" to="/">
            Home
          </Link>
        </RoughNotation>
        <RoughNotation
          type="circle"
          show={menuItemId === "projects"}
          padding={[10, 20, 10, 20]}
          strokeWidth={4}
          iterations={1}
          color="#4BFFB3"
          animationDuration={500}
          onMouseOver={() => {
            setMenuItemId("projects")
          }}
          onMouseOut={() => {
            setMenuItemId(null)
          }}
        >
          <Link className="font-display" to="/projects">
            Projects
          </Link>
        </RoughNotation>
        <RoughNotation
          type="circle"
          show={menuItemId === "experience"}
          padding={[10, 20, 10, 20]}
          strokeWidth={4}
          iterations={1}
          color="#4BFFB3"
          animationDuration={500}
          onMouseOver={() => {
            setMenuItemId("experience")
          }}
          onMouseOut={() => {
            setMenuItemId(null)
          }}
        >
          <Link className="font-display" to="/enxperience">
            Experience
          </Link>
        </RoughNotation>
        <RoughNotation
          type="circle"
          show={menuItemId === "about"}
          padding={[10, 20, 10, 20]}
          strokeWidth={4}
          iterations={1}
          color="#4BFFB3"
          animationDuration={500}
          onMouseOver={() => {
            setMenuItemId("about")
          }}
          onMouseOut={() => {
            setMenuItemId(null)
          }}
        >
          <Link className="font-display" to="/about">
            About
          </Link>
        </RoughNotation>
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
