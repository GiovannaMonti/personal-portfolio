import React from "react"
import { RoughNotation } from "react-rough-notation"
import { Link } from "react-router-dom"

export const MenuLink = ({
  linkId,
  hoveredItemId,
  setHoveredItemId,
  setIsOpenMenu,
  isMobileLink,
  location,
}) => {
  return (
    <RoughNotation
      type="circle"
      show={hoveredItemId === linkId}
      padding={[10, 20, 10, 20]}
      strokeWidth={4}
      iterations={1}
      color="#4BFFB3"
      animationDuration={500}
    >
      <Link
        className="font-display"
        to={`/${linkId}`}
        onClick={() => {
          if (isMobileLink) setIsOpenMenu(false)
        }}
        onMouseOver={() => {
          setHoveredItemId(linkId)
        }}
        onMouseOut={() => {
          setHoveredItemId(null)
        }}
      >
        <span
          className="font-display capitalize h-min"
          style={
            location.pathname === `/${linkId}`
              ? { color: "#4BFFB3" }
              : { color: "white" }
          }
        >
          {linkId}
        </span>
      </Link>
    </RoughNotation>
  )
}
