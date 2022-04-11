import React from "react"
import { useOutletContext } from "react-router-dom"

import { ExperienceMobile } from "./mobile/ExperienceMobile"
import { ExperienceDesktop } from "./desktop/ExperienceDesktop"

export const Experience = () => {
  const isMobile = useOutletContext()

  return (
    <div className="experience-wrapper">
      {isMobile ? <ExperienceMobile /> : <ExperienceDesktop />}
    </div>
  )
}
