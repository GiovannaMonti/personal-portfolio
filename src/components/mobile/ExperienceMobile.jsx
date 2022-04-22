import React from "react"

import { FooterMobile } from "./FooterMobile"
import { ListItemMobile } from "./ListItemMobile"

import schoolExperience from "../../data/schoolExperience.json"
import workExperience from "../../data/workExperience.json"

export const ExperienceMobile = () => {
  return (
    <>
      <section
        className="intro flex flex-col gap-y-6 px-5 py-16"
        style={{ marginTop: "82px" }}
      >
        <h1 className="text-titleHugeMobile leading-none">Experience</h1>
      </section>

      <section className="work-list flex flex-col px-5 gap-y-8 pb-16">
        <h3 className="font-display text-title4 text-fluoGreen">
          Work Experience
        </h3>
        {workExperience.map(({ title, subtitle, description }) => (
          <ListItemMobile
            key={title}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        ))}
      </section>

      <section className="school-list flex flex-col px-5 gap-y-8">
        <h3 className="font-display text-title4 text-fluoGreen">Education</h3>
        {schoolExperience.map(({ title, subtitle, description }) => (
          <ListItemMobile
            key={title}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        ))}
      </section>

      <FooterMobile />
    </>
  )
}
