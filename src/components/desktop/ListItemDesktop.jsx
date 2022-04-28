import React, { useState } from "react"
import { RoughNotation } from "react-rough-notation"

import { ReactComponent as ArrowSlantedBig } from "../../assets/arrow-slanted-big.svg"
import { goToProject } from "../../utils/routingUtils"

export const ListItemDesktop = ({
  title,
  slug,
  year,
  subtitle,
  description,
  setSelectedProject,
  isClickable = false,
}) => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="project flex flex-col gap-y-4">
      {isClickable ? (
        <h2
          className="title flex gap-x-3 items-center text-title2 cursor-pointer"
          onClick={() => {
            goToProject(slug)
            setSelectedProject(slug)
          }}
        >
          <ArrowSlantedBig className="inline" />
          <RoughNotation
            onMouseOver={() => {
              setHoveredId(title)
            }}
            onMouseOut={() => {
              setHoveredId(null)
            }}
            className="font-display"
            type="underline"
            padding={0}
            show={hoveredId === title}
            strokeWidth={3}
            iterations={2}
            color="#4BFFB3"
            animationDuration={300}
          >
            {title} | {year}
          </RoughNotation>
        </h2>
      ) : (
        <h2 className="title flex gap-x-3 items-center text-title2">{title}</h2>
      )}

      <h3 className="subtitle text-title4 text-softGreen">{subtitle}</h3>
      <p className="description text-pLg">{description}</p>
      <div
        className="separator w-full mb-4 mt-4"
        style={{ background: "white", height: "1px" }}
      />
    </div>
  )
}
