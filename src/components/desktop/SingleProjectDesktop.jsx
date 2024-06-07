import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RoughNotation } from "react-rough-notation"

import { ReactComponent as ArrowBack } from "../../assets/arrow-back.svg"
import { ReactComponent as ArrowSlantedBig } from "../../assets/arrow-slanted-big.svg"

import projects from "../../data/projects.json"

export const SingleProjectDesktop = ({
  selectedProject,
  setSelectedProject,
}) => {
  const [hoveredTextId, setHoveredTextId] = useState(null)

  const project = projects.find(
    (p) => p.slug === selectedProject.replace(/#(?=\S)/g, "")
  )
  console.log("project: ", project)

  gsap.registerPlugin(ScrollTrigger)

  const scrollSingle = useRef([])

  useEffect(() => {
    gsap.from(scrollSingle.current, {
      yPercent: 10,
      opacity: 0,
      stagger: scrollSingle.current.length * 0.05,
    })
  }, [])

  return (
    <div className="p-16" style={{ marginTop: "82px" }}>
      <h3
        className="text-title4 flex items-center gap-x-3 cursor-pointer text-fluoGreen"
        onClick={() => {
          setSelectedProject("")
          window.location.hash = ""
        }}
      >
        <ArrowBack />
        <RoughNotation
          type="underline"
          show={hoveredTextId === "back"}
          strokeWidth={4}
          iterations={2}
          color="#4BFFB3"
          animationDuration={300}
        >
          <span
            onMouseOver={() => {
              setHoveredTextId("back")
            }}
            onMouseOut={() => {
              setHoveredTextId(null)
            }}
          >
            Projects
          </span>
        </RoughNotation>
      </h3>

      <section className="single-project">
        <h1 className="text-altTitle1 pt-8">{project.title}</h1>

        <h3 className="subtitle text-title6 text-softGreen pb-16">
          {project.year} - {project.subtitle}
        </h3>

        <div
          className="grid grid-cols-singleProject gap-x-12"
          ref={(element) => scrollSingle.current.push(element)}
        >
          <section className="desc flex flex-col gap-y-12">
            {project.link && (
              <div ref={(element) => scrollSingle.current.push(element)}>
                <h3 className="font-display text-title4 text-fluoGreen">
                  View project
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pLg font-body py-2 flex gap-x-2 items-center"
                >
                  <ArrowSlantedBig />
                  <RoughNotation
                    type="underline"
                    show={true}
                    strokeWidth={3}
                    iterations={2}
                    color="#4BFFB3"
                    animationDuration={300}
                  >
                    {project.title}
                  </RoughNotation>
                </a>
              </div>
            )}

            <div
              className="description"
              ref={(element) => scrollSingle.current.push(element)}
            >
              <h3 className="font-display text-title4 text-fluoGreen">
                Description
              </h3>
              <p className="text-pLg py-2">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="font-display text-title4 text-fluoGreen">Tools</h3>
              <p className="text-pLg py-2">{project.tools}</p>
            </div>

            <div>
              <h3 className="font-display text-title4 text-fluoGreen">Team</h3>
              <p className="text-pLg py-2">{project.team}</p>
            </div>
          </section>

          {project.src && (
            <RoughNotation
              className="w-fit h-fit justify-self-center "
              type="box"
              show={true}
              strokeWidth={3}
              iterations={3}
              color="#4BFFB3"
            >
              <img
                className="max-h-[600px] p-5"
                src={`img/${project.src}`}
                alt={project.alt}
              />
            </RoughNotation>
          )}
        </div>
      </section>
    </div>
  )
}
