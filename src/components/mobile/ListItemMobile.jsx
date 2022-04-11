import React from "react"

import { ReactComponent as ArrowSlanted } from "../../assets/arrow-slanted.svg"

export const ListItemMobile = ({
  title,
  subtitle,
  description,
  category = null,
  isClickable = false,
}) => {
  return (
    <div className="project flex flex-col gap-y-2">
      <h2 className="title flex gap-x-3 items-center text-title4">
        {isClickable && <ArrowSlanted className="inline" />}
        {title}
      </h2>
      <h3 className="subtitle text-title6 text-softGreen">{subtitle}</h3>
      <p className="description text-pSm">{description}</p>
      <div
        className="separator w-full mb-3 mt-3"
        style={{ background: "white", height: "1px" }}
      />
    </div>
  )
}
