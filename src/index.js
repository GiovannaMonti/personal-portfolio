import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { Content } from "./components/Content"

import ScrollToTop from "./components/ScrollToTop"

import "./index.css"

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Content />
  </BrowserRouter>,
  document.getElementById("root")
)
