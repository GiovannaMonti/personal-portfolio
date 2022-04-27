import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useWindowDimensions } from "../utils/windowDimensions"

import { App } from "./App"
import { Projects } from "./Projects"
import { Experience } from "./Experience"
import { About } from "./About"
import { Home } from "./Home"

import { ROUTES } from "../constants/routes"

export const Content = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)

  const [transitionStage, setTransistionStage] = useState("fadeIn")
  const { width } = useWindowDimensions()
  const isMobile = width <= 768

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname)
      setTransistionStage("fadeOut")
  }, [location, displayLocation])

  return !isMobile ? (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn")
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path={ROUTES.default} element={<App />}>
          <Route path={ROUTES.default} element={<Home />} />
          <Route path={ROUTES.projects} element={<Projects />} />
          <Route path={ROUTES.experience} element={<Experience />} />
          <Route path={ROUTES.about} element={<About />} />
        </Route>
      </Routes>
    </div>
  ) : (
    <Routes>
      <Route path={ROUTES.default} element={<App />}>
        <Route path={ROUTES.default} element={<Home />} />
        <Route path={ROUTES.projects} element={<Projects />} />
        <Route path={ROUTES.experience} element={<Experience />} />
        <Route path={ROUTES.about} element={<About />} />
      </Route>
    </Routes>
  )
}
