import React from "react"

import { FooterDesktop } from "./FooterDesktop"
import { ListItemDesktop } from "./ListItemDesktop"

import projects from "../../data/projects.json"

export const ProjectsDesktop = () => {
  return (
    <>
      <section
        className="intro flex flex-col gap-y-3 p-16"
        style={{ marginTop: "114.5px" }}
      >
        <h1 className="text-titleHugeDesktop leading-none">Projects</h1>
        <div className="sub-menu"></div>
      </section>

      <section className="projects-list px-16 gap-y-12">
        {projects.map(({ title, subtitle, description, category }) => (
          <ListItemDesktop
            key={title}
            title={title}
            subtitle={subtitle}
            description={description}
            category={category}
          />
        ))}
      </section>

      <FooterDesktop />
    </>
  )
}
