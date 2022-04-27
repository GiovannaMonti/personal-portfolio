import React from "react"
import { RoughNotation } from "react-rough-notation"
import { ReactComponent as ArrowBack } from "../../assets/arrow-back.svg"
import { ReactComponent as ArrowSlanted } from "../../assets/arrow-slanted.svg"

import projects from "../../data/projects.json"

export const SingleProjectMobile = ({
  selectedProject,
  setSelectedProject,
}) => {
  const project = projects.find(
    (p) => p.slug === selectedProject.replace(/#(?=\S)/g, "")
  )

  return (
    <div className="p-5" style={{ marginTop: "82px" }}>
      <h3
        className="text-title5 flex items-center gap-x-3 cursor-pointer text-fluoGreen"
        onClick={() => {
          setSelectedProject("")
          window.location.hash = ""
        }}
      >
        <ArrowBack />{" "}
        <RoughNotation
          type="underline"
          show={true}
          strokeWidth={4}
          iterations={2}
          color="#4BFFB3"
          animationDuration={300}
        >
          Projects
        </RoughNotation>
      </h3>

      <section className="single-project">
        <h1 className="text-title1 pt-8">{project.title}</h1>

        <h3 className="subtitle text-title6 text-softGreen">
          {project.year} - {project.subtitle}
        </h3>

        {project.src && (
          <div className="py-12 w-full flex justify-center">
            <RoughNotation
              type="box"
              show={true}
              strokeWidth={3}
              iterations={2}
              color="#4BFFB3"
            >
              <img
                className="max-h-[500px]"
                src={`img/${project.src}`}
                alt={project.alt}
              />
            </RoughNotation>
          </div>
        )}

        <section className="desc flex flex-col gap-y-12">
          {project.link && (
            <div>
              <h3 className="font-display text-title5 text-fluoGreen">
                View project
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-pMd py-2 flex gap-x-2 items-center"
              >
                <ArrowSlanted /> {project.title}
              </a>
            </div>
          )}

          <div className="description">
            <h3 className="font-display text-title5 text-fluoGreen">
              Description
            </h3>
            <p className="text-pMd py-2">{project.longDescription}</p>
          </div>

          <div>
            <h3 className="font-display text-title5 text-fluoGreen">Tools</h3>
            <p className="text-pMd py-2">{project.tools}</p>
          </div>

          <div>
            <h3 className="font-display text-title5 text-fluoGreen">Team</h3>
            <p className="text-pMd py-2">{project.team}</p>
          </div>
        </section>
      </section>
    </div>
  )
}
