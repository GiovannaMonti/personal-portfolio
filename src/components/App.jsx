import React from "react"
import { Outlet, useLocation } from "react-router-dom"

import { MenuMobile } from "./MenuMobile"
import { MenuDesktop } from "./MenuDesktop"

import { useWindowDimensions } from "../utils/windowDimensions"

export const App = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= 768

  const location = useLocation()

  return (
    <div id="page-container">
      {isMobile ? (
        <MenuMobile location={location} />
      ) : (
        <MenuDesktop location={location} />
      )}
      <div id="page-content">
        <Outlet context={isMobile} />
      </div>
    </div>
  )
}
