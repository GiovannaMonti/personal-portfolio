import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { HiddenEasterEgg } from "react-hidden-easter-egg"

import { MenuMobile } from "./mobile/MenuMobile"
import { MenuDesktop } from "./desktop/MenuDesktop"

import { useWindowDimensions } from "../utils/windowDimensions"

export const App = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= 768

  const location = useLocation()

  return (
    <div id="page-container">
      <HiddenEasterEgg
        resetEggMs={10000}
        cb={() => {
          console.log("Get Ricked!")
          const audio = new Audio("audio/wubba-lubba.mp3")
          audio.play()
        }}
        code={["8", "0", "0", "8", "5"]}
      />

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
