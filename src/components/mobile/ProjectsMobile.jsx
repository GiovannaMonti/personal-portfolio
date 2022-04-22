import React, { useState } from "react"
import { RoughNotation } from "react-rough-notation"

import { FooterMobile } from "./FooterMobile"
import { ListItemMobile } from "./ListItemMobile"

import projects from "../../data/projects.json"
import { SingleProjectMobile } from "./SingleProjectMobile"

export const ProjectsMobile = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isActiveTab, setIsActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState(window.location.hash)

  return (
    <>
      {selectedProject.length === 0 ? (
        <>
          <section
            className="intro flex flex-col gap-y-6 px-5 py-16"
            style={{ marginTop: "82px" }}
          >
            <h1 className="text-titleHugeMobile leading-none">Projects</h1>

            <div className="sub-menu flex gap-x-12">
              <RoughNotation
                type="circle"
                show={isActiveTab === "all"}
                padding={[10, 15, 10, 15]}
                strokeWidth={4}
                iterations={1}
                color="#4BFFB3"
                animationDuration={300}
              >
                <span
                  className="text-title5 font-display tracking-wider cursor-pointer"
                  onClick={() => {
                    setFilteredProjects(projects)
                    setIsActiveTab("all")
                  }}
                >
                  All
                </span>
              </RoughNotation>

              <RoughNotation
                type="circle"
                show={isActiveTab === "design"}
                padding={[10, 15, 10, 15]}
                strokeWidth={4}
                iterations={1}
                color="#4BFFB3"
                animationDuration={300}
              >
                <span
                  className="text-title5 font-display tracking-wider cursor-pointer"
                  onClick={() => {
                    setFilteredProjects(
                      projects.filter((proj) => {
                        return proj.category.includes("design")
                      })
                    )
                    setIsActiveTab("design")
                  }}
                >
                  Design
                </span>
              </RoughNotation>

              <RoughNotation
                type="circle"
                show={isActiveTab === "dev"}
                padding={[10, 15, 10, 15]}
                strokeWidth={4}
                iterations={1}
                color="#4BFFB3"
                animationDuration={300}
              >
                <span
                  className="text-title5 font-display tracking-wider cursor-pointer"
                  onClick={() => {
                    setFilteredProjects(
                      projects.filter((proj) => {
                        return proj.category.includes("development")
                      })
                    )
                    setIsActiveTab("dev")
                  }}
                >
                  Dev
                </span>
              </RoughNotation>
            </div>
          </section>

          <section className="projects-list flex flex-col px-5 gap-y-8">
            {filteredProjects.map(
              ({ title, year, slug, subtitle, description }) => (
                <ListItemMobile
                  key={title}
                  title={title}
                  year={year}
                  slug={slug}
                  subtitle={subtitle}
                  description={description}
                  setSelectedProject={setSelectedProject}
                  isClickable={true}
                />
              )
            )}
          </section>
        </>
      ) : (
        <SingleProjectMobile
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
      <FooterMobile />
    </>
  )
}
