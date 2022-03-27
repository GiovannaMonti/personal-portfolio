import React from "react"

import { MenuMobile } from "./MenuMobile"
import { useWindowDimensions } from "../utils/windowDimensions"

export const Home = () => {
  const { height, width } = useWindowDimensions()

  return (
    <>
      <MenuMobile />
      Home
    </>
  )
}
