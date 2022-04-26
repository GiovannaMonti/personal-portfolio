import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { App } from "./components/App"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { About } from "./components/About"
import { Home } from "./components/Home"

import ScrollToTop from "./components/ScrollToTop"
import { ROUTES } from "./constants/routes"
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path={ROUTES.default} element={<App />}>
        <Route path={ROUTES.default} element={<Home />} />
        <Route path={ROUTES.projects} element={<Projects />} />
        <Route path={ROUTES.experience} element={<Experience />} />
        <Route path={ROUTES.about} element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
