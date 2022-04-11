import React from "react"

import { FooterMobile } from "./FooterMobile"
import { ListItemMobile } from "./ListItemMobile"

import projects from "../../data/projects.json"

export const ProjectsMobile = () => {
  return (
    <>
      <section
        className="intro flex flex-col gap-y-6 px-5 py-16"
        style={{ marginTop: "82px" }}
      >
        <h1 className="text-titleHugeMobile leading-none">Projects</h1>
        <div className="sub-menu"></div>
      </section>

      <section className="projects-list flex flex-col px-5 gap-y-8">
        {projects.map(({ title, subtitle, description, category }) => (
          <ListItemMobile
            key={title}
            title={title}
            subtitle={subtitle}
            description={description}
            category={category}
            isClickable={true}
          />
        ))}
      </section>

      <FooterMobile />
    </>
  )
}
