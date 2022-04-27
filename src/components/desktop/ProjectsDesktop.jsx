import React, { useState, useRef, useEffect } from "react"
import { RoughNotation } from "react-rough-notation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { FooterDesktop } from "./FooterDesktop"
import { ListItemDesktop } from "./ListItemDesktop"
import { SingleProjectDesktop } from "./SingleProjectDesktop"

import projects from "../../data/projects.json"

export const ProjectsDesktop = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isActiveTab, setIsActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState(window.location.hash)

  gsap.registerPlugin(ScrollTrigger)

  const scrollProj = useRef([])

  useEffect(() => {
    gsap.from(scrollProj.current, {
      xPercent: 50,
      opacity: 0,
      stagger: scrollProj.current.length * 0.03,
    })
  }, [])

  return (
    <>
      {selectedProject.length === 0 ? (
        <>
          <section
            className="intro flex flex-col gap-y-3 p-16"
            style={{ marginTop: "114.5px" }}
          >
            <h1 className="text-titleHugeDesktop leading-none">Projects</h1>
            <div className="sub-menu flex gap-x-12 pt-12">
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
                  className="text-title3 font-display tracking-wider cursor-pointer"
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
                  className="text-title3 font-display tracking-wider cursor-pointer"
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
                  className="text-title3 font-display tracking-wider cursor-pointer"
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

          <section className="projects-list flex flex-col px-16 gap-y-8 overflow-hidden">
            {filteredProjects.map(
              ({ title, slug, subtitle, description, year }) => (
                <div ref={(element) => scrollProj.current.push(element)}>
                  <ListItemDesktop
                    key={title}
                    title={title}
                    slug={slug}
                    year={year}
                    subtitle={subtitle}
                    description={description}
                    setSelectedProject={setSelectedProject}
                    isClickable={true}
                  />
                </div>
              )
            )}
          </section>
        </>
      ) : (
        <SingleProjectDesktop
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
      <FooterDesktop />
    </>
  )
}
