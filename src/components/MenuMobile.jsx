import React, { useState } from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "react-router-dom"

import { MenuLink } from "./MenuLink.jsx"
import { ReactComponent as CustomHamburgerIcon } from "../assets/icon-menu.svg"
import { ReactComponent as CustomCrossIcon } from "../assets/icon-x.svg"
import { ReactComponent as LogoMobile } from "../assets/logo-mobile.svg"
import { ReactComponent as LogoMobileGreen } from "../assets/logo-mobile-green.svg"
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg"
import { ReactComponent as BehanceIcon } from "../assets/behance.svg"
import { ReactComponent as GithubIcon } from "../assets/github.svg"
import { ReactComponent as DonwloadIcon } from "../assets/icon-download.svg"

import { MENU_MOBILE_STYLES } from "../styles/MenuMobileStyles.js"

export const MenuMobile = ({ location }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <>
      <div className="menu-bar fixed bg-darkBlack top-0 w-full flex justify-between items-center py-6 px-5">
        <Link to="/home">
          {location.pathname === "/home" ? <LogoMobileGreen /> : <LogoMobile />}
        </Link>
        <span className="menu-icon cursor-pointer" onClick={() => toggleMenu()}>
          <CustomHamburgerIcon />
        </span>
      </div>

      <Menu
        right
        width="100%"
        pageWrapId={"page-content"}
        outerContainerId={"page-container"}
        styles={MENU_MOBILE_STYLES}
        isOpen={isOpenMenu}
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <div className="menu-bar fixed bg-darkBlack top-0 w-full flex justify-end py-6 px-5">
          <span
            className="menu-icon cursor-pointer"
            onClick={() => toggleMenu()}
          >
            <CustomCrossIcon />
          </span>
        </div>

        <div className="routes text-title3 flex flex-col items-center gap-y-3">
          {["home", "projects", "experience", "about"].map((route) => (
            <MenuLink
              key={route}
              linkId={route}
              hoveredItemId={hoveredItemId}
              setHoveredItemId={setHoveredItemId}
              setIsOpenMenu={setIsOpenMenu}
              isMobileLink={true}
              location={location}
            />
          ))}
        </div>

        <div className="menu-footer absolute bottom-0 left-0 w-full flex items-end justify-between pb-8 px-8">
          <a href="#" className="font-button text-btnTextSm flex gap-x-2">
            <DonwloadIcon />
            download CV
          </a>
          <div className="social flex flex-col gap-y-3">
            <a
              href="https://www.linkedin.com/in/giovanna-monti-0637351a4/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/GiovannaMonti"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.behance.net/giovannamontidev"
              target="_blank"
              rel="noreferrer"
            >
              <BehanceIcon />
            </a>
          </div>
        </div>
      </Menu>
    </>
  )
}
