import React from "react"
import { ReactComponent as ArrowBack } from "../../assets/arrow-back.svg"
import { ReactComponent as ArrowSlantedBig } from "../../assets/arrow-slanted-big.svg"

import projects from "../../data/projects.json"

export const SingleProjectDesktop = ({
  selectedProject,
  setSelectedProject,
}) => {
  const project = projects.find(
    (p) => p.slug === selectedProject.replace(/#(?=\S)/g, "")
  )

  return (
    <div className="p-16" style={{ marginTop: "82px" }}>
      <h3
        className="text-title4 flex items-center gap-x-3 cursor-pointer"
        onClick={() => {
          setSelectedProject("")
          window.location.hash = ""
        }}
      >
        <ArrowBack /> Projects
      </h3>

      <section className="single-project">
        <h1 className="text-altTitle1 pt-8">{project.title}</h1>

        <h3 className="subtitle text-title4 text-softGreen pb-16">
          {project.year} - {project.subtitle}
        </h3>

        <div className="grid grid-cols-singleProject gap-x-12">
          <section className="desc flex flex-col gap-y-12">
            {project.link && (
              <div>
                <h3 className="font-marker text-title4">View project</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pLg py-2 flex gap-x-2 items-center text-fluoGreen"
                >
                  <ArrowSlantedBig /> {project.title}
                </a>
              </div>
            )}

            <div className="description">
              <h3 className="font-marker text-title4">Description</h3>
              <p className="text-pLg py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                temporibus!
              </p>
              <p className="text-pLg py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                laboriosam exercitationem beatae ipsam asperiores aliquam
                provident odio delectus recusandae esse. Illum, expedita quis!
              </p>
              <p className="text-pLg py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae deserunt, quis harum qui rem voluptate.
              </p>
              <p className="text-pLg py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                atque culpa repellat? Perspiciatis, enim culpa? Odio, alias.
              </p>
            </div>

            <div>
              <h3 className="font-marker text-title4">Tools</h3>
              <p className="text-pLg py-2">{project.tools}</p>
            </div>

            <div>
              <h3 className="font-marker text-title4">Team</h3>
              <p className="text-pLg py-2">{project.team}</p>
            </div>
          </section>

          <img src={`img/${project.src}`} alt={project.alt} />
        </div>
      </section>
    </div>
  )
}
