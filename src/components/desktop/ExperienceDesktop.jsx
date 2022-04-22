import React from "react"

import { FooterDesktop } from "./FooterDesktop"
import { ListItemDesktop } from "./ListItemDesktop"

import schoolExperience from "../../data/schoolExperience.json"
import workExperience from "../../data/workExperience.json"

export const ExperienceDesktop = () => {
  return (
    <>
      <section
        className="intro flex flex-col gap-y-3 p-16"
        style={{ marginTop: "114.5px" }}
      >
        <h1 className="text-titleHugeDesktop leading-none">Experience</h1>
      </section>

      <section className="work-list flex flex-col px-16 gap-y-12">
        <h3 className="font-display text-altTitle3 text-fluoGreen">
          Work Experience
        </h3>
        {workExperience.map(({ title, subtitle, description }) => (
          <ListItemDesktop
            key={title}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        ))}
      </section>

      <section className="school-list flex flex-col px-16 gap-y-12">
        <h3 className="font-display text-altTitle3 text-fluoGreen pt-24 ">
          Education
        </h3>
        {schoolExperience.map(({ title, subtitle, description }) => (
          <ListItemDesktop
            key={title}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        ))}
      </section>

      <FooterDesktop />
    </>
  )
}
