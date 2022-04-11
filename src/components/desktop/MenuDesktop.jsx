import React, { useState } from "react"
import { Link } from "react-router-dom"

import { MenuLink } from "../MenuLink.jsx"
import { ReactComponent as LogoDesktop } from "../../assets/logo-desktop.svg"
import { ReactComponent as LogoDesktopGreen } from "../../assets/logo-desktop-green.svg"

export const MenuDesktop = ({ location }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null)

  return (
    <>
      <div className="menu-bar absolute top-0 w-full flex justify-between items-center py-8 px-16">
        <Link to="/home">
          {location.pathname === "/home" ? (
            <LogoDesktopGreen />
          ) : (
            <LogoDesktop />
          )}
        </Link>
        <div className="routes text-title3 flex gap-x-16">
          {["projects", "experience", "about"].map((route) => (
            <MenuLink
              key={route}
              linkId={route}
              hoveredItemId={hoveredItemId}
              setHoveredItemId={setHoveredItemId}
              isMobileLink={false}
              location={location}
            />
          ))}
        </div>
      </div>
    </>
  )
}
