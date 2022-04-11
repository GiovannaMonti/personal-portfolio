import React from "react"

import { ReactComponent as ArrowSlantedBig } from "../../assets/arrow-slanted-big.svg"

export const ListItemDesktop = ({
  title,
  subtitle,
  description,
  category = null,
  isClickable = false,
}) => {
  return (
    <div className="project flex flex-col gap-y-4">
      <h2 className="title flex gap-x-3 items-center text-title2">
        {isClickable && <ArrowSlantedBig className="inline" />}
        {title}
      </h2>
      <h3 className="subtitle text-title4 text-softGreen">{subtitle}</h3>
      <p className="description text-pLg">{description}</p>
      <div
        className="separator w-full mb-4 mt-4"
        style={{ background: "white", height: "1px" }}
      />
    </div>
  )
}
