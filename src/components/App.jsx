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
        resetEggMs={2500}
        cb={() => {
          const audio = new Audio("audio/wubba-lubba.mp3")
          audio.play()
        }}
        code={["8", "0", "0", "8", "5"]}
      >
        <div className="absolute z-[999] overflow-hidden top-0 left-0 w-full h-[100vh] flex items-center justify-center">
          <img
            className="h-full w-auto p-12 animate-popup"
            src="img/Rick.png"
            alt="Rick Sanchez"
          />
        </div>
      </HiddenEasterEgg>

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
