import React from "react"
import { RoughNotation } from "react-rough-notation"

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
        <h3 className="font-display text-title3 text-fluoGreen">
          <RoughNotation
            type="underline"
            show={true}
            strokeWidth={3}
            iterations={2}
            color="#4BFFB3"
            animationDuration={300}
          >
            Work Experience
          </RoughNotation>
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
        <h3 className="font-display text-title3 text-fluoGreen pt-24 ">
          <RoughNotation
            type="underline"
            show={true}
            strokeWidth={3}
            iterations={2}
            color="#4BFFB3"
            animationDuration={300}
          >
            Education
          </RoughNotation>
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
