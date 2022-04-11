import React from "react"
import { useOutletContext } from "react-router-dom"

import { ProjectsMobile } from "./mobile/ProjectsMobile"
import { ProjectsDesktop } from "./desktop/ProjectsDesktop"

export const Projects = () => {
  const isMobile = useOutletContext()

  return (
    <div className="about-wrapper">
      {isMobile ? <ProjectsMobile /> : <ProjectsDesktop />}
    </div>
  )
}
