import React from "react"
import { useOutletContext } from "react-router-dom"

import { AboutMobile } from "./AboutMobile"
import { AboutDesktop } from "./AboutDesktop"

export const About = () => {
  const isMobile = useOutletContext()

  return (
    <div className="about-wrapper">
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
    </div>
  )
}
