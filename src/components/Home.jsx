import React from "react"

import { MenuMobile } from "./MenuMobile"
import { useWindowDimensions } from "../utils/windowDimensions"

export const Home = () => {
  const { height, width } = useWindowDimensions()

  return (
    <div>
      <MenuMobile />
      width: {width} ~ height: {height}
      <h1>Prova h1</h1>
      <h3>Prova h3</h3>
      <p>Prova paragrafo</p>
    </div>
  )
}
