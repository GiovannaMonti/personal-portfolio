import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Particles from "react-tsparticles"
import { Link } from "react-router-dom"
import { groupBy, reverse } from "lodash"
import { RoughNotation } from "react-rough-notation"

import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg"
import { ReactComponent as ArrowSlantedBig } from "../../assets/arrow-slanted-big.svg"
import { ReactComponent as Dot } from "../../assets/dot.svg"
import { FooterDesktop } from "./FooterDesktop"

import { SCROLL_SOFT_SKILLS } from "../../constants/helper"
import { particlesConfig } from "../../constants/particlesConfig"
import skills from "../../data/skills.json"

export const HomeDesktop = () => {
  const [isHoveringImg, setIsHoveringImage] = useState(false)
  const [hoveredTextId, setHoveredTextId] = useState(null)

  gsap.registerPlugin(ScrollTrigger)

  const mainTitle = useRef()

  const scrollProjects = useRef([])
  const scrollProjectsParent = useRef()

  const scrollProjectsDesc = useRef([])
  const scrollProjectsDescParent = useRef()

  const scrollHardSkills = useRef([])
  const scrollHardSkillsParent = useRef()

  const scrollSoftSkills = useRef([])
  const scrollSoftSkillsParent = useRef()

  const scrollAbout = useRef([])
  const scrollAboutParent = useRef()

  const skillsGroupedByLevel = reverse(Object.values(groupBy(skills, "level")))

  useEffect(() => {
    gsap.from(mainTitle.current, {
      opacity: 0,
      yPercent: -10,
      ease: "power1.out",
      duration: 1,
    })
  }, [])

  useEffect(() => {
    gsap.from(scrollProjects.current, {
      xPercent: 50,
      opacity: 0,
      stagger: scrollProjects.current.length * 0.03,
      scrollTrigger: {
        start: "bottom",
        trigger: scrollProjectsParent.current,
      },
    })
  }, [])

  useEffect(() => {
    gsap.from(scrollProjectsDesc.current, {
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        end: "top",
        trigger: scrollProjectsDescParent.current,
      },
    })
  }, [])

  useEffect(() => {
    gsap.from(scrollHardSkills.current, {
      yPercent: 20,
      opacity: 0,
      stagger: scrollHardSkills.current.length * 0.004,
      scrollTrigger: {
        trigger: scrollHardSkillsParent.current,
        end: "bottom",
      },
    })
  }, [])

  useEffect(() => {
    gsap.from(scrollSoftSkills.current, {
      xPercent: (index) => {
        return index % 2 === 0 ? -30 : 50
      },
      opacity: 0,
      stagger: scrollSoftSkills.current.length * 0.03,
      scrollTrigger: {
        trigger: scrollSoftSkillsParent.current,
        scrub: 0.5, // l'animazione è legata e segue la scrollbar
      },
    })
  }, [])

  useEffect(() => {
    gsap.from(scrollAbout.current, {
      yPercent: 10,
      opacity: 0,
      stagger: scrollAbout.current.length * 0.03,
      scrollTrigger: {
        start: "top",
        trigger: scrollAboutParent.current,
      },
    })
  }, [])

  return (
    <>
      <Particles
        style={{
          position: "absolute",
          top: 0,
          height: "100vh",
          zIndex: "-1",
        }}
        canvasClassName="particle-canvas"
        options={particlesConfig}
      >
        {" "}
      </Particles>
      <div>
        <section
          className="welcome-section flex flex-col justify-around px-16 z-100"
          style={{ height: "calc(100vh - 114.5px)", marginTop: "114.5px" }}
        >
          <div className="welcome-text" ref={mainTitle}>
            <h1 className="text-titleHugeDesktop leading-tight px-10">
              <RoughNotation
                type="crossed-off"
                show={hoveredTextId === "creative"}
                strokeWidth={4}
                iterations={3}
                color="#ffffff"
                animationDuration={500}
              >
                <span
                  className="text-fluoGreen font-display"
                  onMouseOver={() => {
                    setHoveredTextId("creative")
                  }}
                  onMouseOut={() => {
                    setHoveredTextId(null)
                  }}
                >
                  Creative
                </span>
              </RoughNotation>{" "}
              Front-End{" "}
              <RoughNotation
                type="highlight"
                show={hoveredTextId === "developer"}
                iterations={1}
                color="#ffffff"
                animationDuration={300}
              >
                <span
                  className="text-fluoGreen font-display"
                  onMouseOver={() => {
                    setHoveredTextId("developer")
                  }}
                  onMouseOut={() => {
                    setHoveredTextId(null)
                  }}
                  style={
                    hoveredTextId === "developer" ? { color: "#000000" } : null
                  }
                >
                  Developer
                </span>
              </RoughNotation>{" "}
              & Designer
            </h1>
          </div>

          <div className="scroll-down self-center flex flex-col items-center gap-y-4">
            <span className="text-title6" ref={scrollProjectsParent}>
              SCROLL DOWN
            </span>

            <ArrowDown className="animate-bounce-smooth" />
          </div>
        </section>

        <section className="project-highlights grid grid-cols-about gap-x-12 px-16">
          <h3
            ref={(element) => scrollProjects.current.push(element)}
            className="font-display text-altTitle1 text-fluoGreen"
            style={{
              textOrientation: "upright",
              writingMode: "vertical-lr",
            }}
          >
            Projects
          </h3>

          <div className="overflow-hidden">
            <div
              ref={(element) => scrollProjects.current.push(element)}
              className="project-teaser py-10 flex gap-x-14 items-center"
            >
              <RoughNotation
                style={{ width: "40%" }}
                className="justify-self-center ml-5"
                type="box"
                show={true}
                strokeWidth={3}
                iterations={3}
                color="#4BFFB3"
              >
                <img
                  className="p-2"
                  ref={scrollProjectsDescParent}
                  src="img/bloom-preview.png"
                  alt="bloom app"
                />
              </RoughNotation>

              <div
                className="project-details"
                ref={(element) => scrollProjectsDesc.current.push(element)}
              >
                <h2
                  className="title flex gap-x-3 items-center text-title2 cursor-pointer"
                  onClick={() => {
                    window.location = "/projects#bloom"
                  }}
                  onMouseOver={() => {
                    setHoveredTextId("bloom")
                  }}
                  onMouseOut={() => {
                    setHoveredTextId(null)
                  }}
                >
                  <ArrowSlantedBig className="inline" />
                  Bloom App | 2022
                </h2>

                <RoughNotation
                  style={{ minWidth: "40%" }}
                  type="highlight"
                  multiline={true}
                  show={hoveredTextId === "bloom"}
                  strokeWidth={4}
                  iterations={1}
                  color="#4BFFB3"
                  animationDuration={500}
                >
                  <span
                    className="description text-pLg"
                    style={
                      hoveredTextId === "bloom" ? { color: "#000000" } : null
                    }
                  >
                    Condominium management app UI/UX design.
                  </span>
                </RoughNotation>
              </div>
            </div>

            <div
              ref={(element) => scrollProjects.current.push(element)}
              className="separator w-full"
              style={{ background: "white", height: "1px" }}
            />

            <div
              ref={(element) => scrollProjects.current.push(element)}
              className="project-teaser py-10 flex gap-x-14 items-center"
            >
              <RoughNotation
                style={{ minWidth: "40%" }}
                className="justify-self-center ml-5"
                type="box"
                show={true}
                strokeWidth={3}
                iterations={3}
                color="#4BFFB3"
              >
                <img
                  className="p-2"
                  src="img/maison-compressed-preview.png"
                  alt="maison du silence website"
                />
              </RoughNotation>

              <div
                className="project-details"
                ref={(element) => scrollProjectsDesc.current.push(element)}
              >
                <h2
                  className="title flex gap-x-3 items-center text-title2 cursor-pointer"
                  onClick={() => {
                    window.location = "/projects#maison-du-silence"
                  }}
                  onMouseOver={() => {
                    setHoveredTextId("maison")
                  }}
                  onMouseOut={() => {
                    setHoveredTextId(null)
                  }}
                >
                  <ArrowSlantedBig className="inline" />
                  Maison du Silence | 2021
                </h2>
                <RoughNotation
                  type="highlight"
                  multiline={true}
                  show={hoveredTextId === "maison"}
                  strokeWidth={4}
                  iterations={1}
                  color="#4BFFB3"
                  animationDuration={500}
                >
                  <span
                    className="description text-pLg"
                    style={
                      hoveredTextId === "maison" ? { color: "#000000" } : null
                    }
                  >
                    Design and development of a Wordpress custom theme for a
                    holiday home website.
                  </span>
                </RoughNotation>
              </div>
            </div>
          </div>
        </section>

        <section className="hard-skills flex flex-col px-16 py-12">
          <h3 className="font-display text-title4 self-center text-fluoGreen">
            Hard Skills
          </h3>

          <div className="legend py-10 self-end" ref={scrollHardSkillsParent}>
            <div className="flex gap-x-5 items-center justify-end">
              <div className="flex gap-x-2">
                {[...Array(4)].map((dot, index) => (
                  <Dot key={index} />
                ))}
              </div>
              <p className="text-pSm">Advanced knowledge</p>
            </div>

            <div className="flex gap-x-5 items-center justify-end">
              <div className="flex gap-x-2">
                {[...Array(3)].map((dot, index) => (
                  <Dot key={index} />
                ))}
              </div>
              <p className="text-pSm">Good knowledge</p>
            </div>

            <div className="flex gap-x-5 items-center justify-end">
              <div className="flex gap-x-2">
                {[...Array(2)].map((dot, index) => (
                  <Dot key={index} />
                ))}
              </div>
              <p className="text-pSm">Base knowledge</p>
            </div>

            <div className="flex gap-x-5 items-center justify-end">
              <div className="flex gap-x-2">
                {[...Array(1)].map((dot, index) => (
                  <Dot key={index} />
                ))}
              </div>
              <p className="text-pSm">Limited knowledge</p>
            </div>
          </div>

          <div className="grid grid-cols-four gap-x-12">
            {skillsGroupedByLevel.map((skillGroup) => {
              return (
                <div key={skillGroup.name}>
                  {skillGroup.map((skill) => {
                    const level = skill.level
                    const getRef = (element) =>
                      scrollHardSkills.current.push(element)
                    return (
                      <div ref={getRef}>
                        <div
                          key={skill.name}
                          className="skill flex justify-between items-center"
                        >
                          <p className="text-pLg">{skill.name}</p>
                          <div className="flex gap-x-2">
                            {[...Array(level)].map((dot, index) => (
                              <Dot key={`${skill.name}${index}`} />
                            ))}
                          </div>
                        </div>
                        <div
                          className="separator w-full mb-3 mt-3"
                          style={{ background: "white", height: "1px" }}
                        />
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </section>

        <section className="soft-skills flex flex-col items-center text-center px-16 py-12 gap-y-8 overflow-hidden">
          <h3 className="font-display text-title4 self-center text-fluoGreen">
            Soft Skills
          </h3>
          <div
            ref={scrollSoftSkillsParent}
            className="scrolling-text flex flex-col gap-y-4"
          >
            {SCROLL_SOFT_SKILLS.map((skill) => {
              const getRef = (element) => scrollSoftSkills.current.push(element)
              return (
                <span
                  key={skill}
                  ref={getRef}
                  className="font-display text-[90px] block whitespace-nowrap"
                >
                  {skill}
                </span>
              )
            })}
          </div>
        </section>

        <section
          className="about grid grid-cols-about gap-x-12 px-16"
          ref={scrollAboutParent}
        >
          <h3
            ref={(element) => scrollAbout.current.push(element)}
            className="font-display text-altTitle1 text-fluoGreen"
            style={{
              textOrientation: "upright",
              writingMode: "vertical-lr",
            }}
          >
            Who Am I?
          </h3>

          <div className="photo-and-bio flex flex-col gap-y-16 text-pLg">
            <img
              ref={(element) => scrollAbout.current.push(element)}
              style={{ width: "55%" }}
              src={
                isHoveringImg
                  ? "img/giovanna-accurat-2.png"
                  : "img/giovanna-accurat-1.png"
              }
              alt="portrait of me"
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
            />
            <div className="description flex gap-x-16">
              <div
                ref={(element) => scrollAbout.current.push(element)}
                className="bio flex flex-col gap-y-10"
                style={{ width: "55%" }}
              >
                <p>
                  Hi, I'm Giovanna, a creative Developer and Designer. <br />{" "}
                  Empathetic, straightforward and assertive, I'm a grounded
                  perfectionist, always in search of the right balance between
                  feasibility and elegance.
                </p>
                <p>
                  I'm interested in all areas of web and app development (I like
                  learning new stuff!), but my favourite projects are the ones
                  that aim for a combination of both functionality and
                  aesthetics.
                </p>

                <div
                  className="contact flex flex-col gap-y-12"
                  ref={(element) => scrollAbout.current.push(element)}
                >
                  <h3 className="font-display text-altTitle4 mt-12 text-fluoGreen">
                    Contact Me
                  </h3>

                  <div className="e-mail flex gap-x-1 items-center">
                    <ArrowSlantedBig className="inline" />
                    <RoughNotation
                      type="underline"
                      show={hoveredTextId === "mail"}
                      strokeWidth={3}
                      iterations={2}
                      color="#4BFFB3"
                      animationDuration={300}
                    >
                      <a
                        href="mailto:giovannamontidev@gmail.com"
                        className="font-body text-pLg"
                        onMouseOver={() => {
                          setHoveredTextId("mail")
                        }}
                        onMouseOut={() => {
                          setHoveredTextId(null)
                        }}
                      >
                        giovannamontidev@gmail.com
                      </a>
                    </RoughNotation>
                  </div>
                </div>
              </div>

              <div
                className="links flex flex-col gap-y-3"
                ref={(element) => scrollAbout.current.push(element)}
              >
                <RoughNotation
                  type="circle"
                  show={hoveredTextId === "about"}
                  padding={[10, 20, 10, 20]}
                  strokeWidth={4}
                  iterations={1}
                  color="#4BFFB3"
                  animationDuration={500}
                >
                  <span className="flex gap-x-3 items-center text-title2 font-display">
                    <ArrowSlantedBig className="inline" />
                    <Link
                      to="/about"
                      onMouseOver={() => {
                        setHoveredTextId("about")
                      }}
                      onMouseOut={() => {
                        setHoveredTextId(null)
                      }}
                    >
                      About me
                    </Link>
                  </span>
                </RoughNotation>
                <RoughNotation
                  type="circle"
                  show={hoveredTextId === "experience"}
                  padding={[10, 20, 10, 20]}
                  strokeWidth={4}
                  iterations={1}
                  color="#4BFFB3"
                  animationDuration={500}
                >
                  <span className="flex gap-x-3 items-center text-title2 font-display">
                    <ArrowSlantedBig className="inline" />
                    <Link
                      to="/experience"
                      onMouseOver={() => {
                        setHoveredTextId("experience")
                      }}
                      onMouseOut={() => {
                        setHoveredTextId(null)
                      }}
                    >
                      Experience
                    </Link>
                  </span>
                </RoughNotation>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterDesktop />
    </>
  )
}
