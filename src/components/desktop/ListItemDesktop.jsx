import React from "react"

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
          {title} | {year}
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
