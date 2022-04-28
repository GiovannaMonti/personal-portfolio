import React from "react"
import { RoughNotation } from "react-rough-notation"

import { ReactComponent as ArrowSlanted } from "../../assets/arrow-slanted.svg"
import { goToProject } from "../../utils/routingUtils"

export const ListItemMobile = ({
  title,
  year,
  slug,
  subtitle,
  description,
  setSelectedProject,
  isClickable = false,
}) => {
  return (
    <div className="project flex flex-col gap-y-2">
      {isClickable ? (
        <h2
          className="title flex gap-x-3 items-center text-title4 cursor-pointer"
          onClick={() => {
            goToProject(slug)
            setSelectedProject(slug)
          }}
        >
          <ArrowSlanted className="inline" />
          <RoughNotation
            className="font-display mb-2"
            type="underline"
            padding={0}
            show={true}
            strokeWidth={3}
            iterations={2}
            color="#4BFFB3"
            animationDuration={300}
          >
            {title} | {year}
          </RoughNotation>
        </h2>
      ) : (
        <h2 className="title flex gap-x-3 items-center text-title4">{title}</h2>
      )}

      <h3 className="subtitle text-title6 text-softGreen">{subtitle}</h3>
      <p className="description text-pSm">{description}</p>
      <div
        className="separator w-full mb-3 mt-3"
        style={{ background: "white", height: "1px" }}
      />
    </div>
  )
}
