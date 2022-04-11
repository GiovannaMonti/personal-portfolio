import React from "react"
import { useOutletContext } from "react-router-dom"

import { HomeMobile } from "./mobile/HomeMobile"
import { HomeDesktop } from "./desktop/HomeDesktop"

export const Home = () => {
  const isMobile = useOutletContext()

  return (
    <div className="home-wrapper">
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </div>
  )
}
