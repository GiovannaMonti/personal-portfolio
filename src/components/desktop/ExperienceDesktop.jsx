import React, { useRef, useEffect } from "react"
import { RoughNotation } from "react-rough-notation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { FooterDesktop } from "./FooterDesktop"
import { ListItemDesktop } from "./ListItemDesktop"

import schoolExperience from "../../data/schoolExperience.json"
import workExperience from "../../data/workExperience.json"

export const ExperienceDesktop = () => {
  gsap.registerPlugin(ScrollTrigger)

  const scrollExp = useRef([])

  useEffect(() => {
    gsap.from(scrollExp.current, {
      xPercent: 50,
      opacity: 0,
      stagger: scrollExp.current.length * 0.03,
    })
  }, [])
  return (
    <>
      <section
        className="intro flex flex-col gap-y-3 p-16"
        style={{ marginTop: "114.5px" }}
      >
        <h1 className="text-titleHugeDesktop leading-none">Experience</h1>
      </section>

      <section className="work-list flex flex-col px-16 gap-y-12 overflow-hidden">
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
          <div ref={(element) => scrollExp.current.push(element)}>
            <ListItemDesktop
              key={title}
              title={title}
              subtitle={subtitle}
              description={description}
            />
          </div>
        ))}
      </section>

      <section className="school-list flex flex-col px-16 gap-y-12 overflow-hidden">
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
          <div ref={(element) => scrollExp.current.push(element)}>
            <ListItemDesktop
              key={title}
              title={title}
              subtitle={subtitle}
              description={description}
            />
          </div>
        ))}
      </section>

      <FooterDesktop />
    </>
  )
}
