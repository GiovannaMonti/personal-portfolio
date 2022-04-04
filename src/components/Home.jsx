import React from "react"
import { useOutletContext } from "react-router-dom"

import { HomeMobile } from "./HomeMobile"
import { HomeDesktop } from "./HomeDesktop"

export const Home = () => {
  const isMobile = useOutletContext()

  return (
    <div className="home-wrapper">
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </div>
  )
}
