import React from "react"
import { useOutletContext } from "react-router-dom"

import { AboutMobile } from "./mobile/AboutMobile"
import { AboutDesktop } from "./desktop/AboutDesktop"

export const About = () => {
  const isMobile = useOutletContext()

  return (
    <div className="about-wrapper">
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
    </div>
  )
}
