import React, { useState, useRef, useEffect } from "react"
import { RoughNotation } from "react-rough-notation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Particles from "react-tsparticles"
import { Link } from "react-router-dom"

import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg"
import { ReactComponent as ArrowSlanted } from "../../assets/arrow-slanted.svg"
import { ReactComponent as Dot } from "../../assets/dot.svg"
import { FooterMobile } from "./FooterMobile"

import { SCROLL_SOFT_SKILLS } from "../../constants/helper"
import { particlesConfig } from "../../constants/particlesConfig"
import skills from "../../data/skills.json"

export const HomeMobile = () => {
  const [isHoveringImg, setIsHoveringImage] = useState(false)

  const scrollEls = useRef([])
  const scrollParent = useRef()
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from(scrollEls.current, {
      xPercent: (index) => {
        return index % 2 === 0 ? -20 : 50
      },
      opacity: 0,
      stagger: scrollEls.current.length * 0.03,
      scrollTrigger: {
        trigger: scrollParent.current,
        scrub: 0.5, // l'animazione è legata e segue la scrollbar
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
      <section
        className="welcome-section flex flex-col justify-around p-5"
        style={{ height: "calc(100vh - 82px)", marginTop: "82px" }}
      >
        <div className="welcome-text flex flex-col gap-y-6">
          <h1 className="text-title1 pt-24">
            <RoughNotation
              type="underline"
              show={true}
              strokeWidth={4}
              iterations={2}
              color="#4BFFB3"
              animationDuration={300}
            >
              <span className="text-fluoGreen font-display">Creative</span>{" "}
            </RoughNotation>
            Front-End{" "}
            <RoughNotation
              type="underline"
              show={true}
              strokeWidth={4}
              iterations={2}
              color="#4BFFB3"
              animationDuration={300}
            >
              <span className="text-fluoGreen font-display">Developer</span>{" "}
            </RoughNotation>
            & Designer
          </h1>
        </div>

        <div className="scroll-down self-center flex flex-col items-center gap-y-4">
          <span className="text-pSm">SCROLL DOWN</span>
          <ArrowDown className="animate-bounce-smooth" />
        </div>
      </section>

      <section className="project-highlights flex flex-col">
        <h3 className="font-display text-title5 self-center text-fluoGreen">
          Project Highlights
        </h3>

        <div className="project-teaser px-5 py-10 flex flex-col gap-y-4">
          <img src="img/bloom-preview.png" alt="bloom app" />
          <div className="project-details">
            <h2
              className="title flex gap-x-3 items-center text-title4"
              onClick={() => {
                window.location = "/projects#mbloom"
              }}
            >
              <ArrowSlanted className="inline" />
              Bloom App | 2022
            </h2>
            <p className="description text-pSm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              tellus interdum integer ut.
            </p>
          </div>
        </div>

        <div className="project-teaser px-5 py-10 flex flex-col gap-y-4">
          <img
            src="img/maison-compressed-preview.png"
            alt="maison du silence website"
          />

          <div className="project-details">
            <h2
              className="title flex gap-x-3 items-center text-title4"
              onClick={() => {
                window.location = "/projects#maison-du-silence"
              }}
            >
              <ArrowSlanted className="inline" />
              Maison du Silence | 2021
            </h2>
            <p className="description text-pSm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              tellus interdum integer ut.
            </p>
          </div>
        </div>
      </section>

      <section className="hard-skills flex flex-col p-5">
        <h3 className="font-display text-title5 self-center text-fluoGreen">
          Hard Skills
        </h3>

        <div className="legend py-10">
          <div className="flex gap-x-5 items-center">
            <div className="flex gap-x-2">
              {[...Array(4)].map((dot, index) => (
                <Dot key={"adv" + index} />
              ))}
            </div>
            <p className="text-pSm">Advanced knowledge</p>
          </div>

          <div className="flex gap-x-5 items-center">
            <div className="flex gap-x-2">
              {[...Array(3)].map((dot, index) => (
                <Dot key={"good" + index} />
              ))}
            </div>
            <p className="text-pSm">Good knowledge</p>
          </div>

          <div className="flex gap-x-5 items-center">
            <div className="flex gap-x-2">
              {[...Array(2)].map((dot, index) => (
                <Dot key={"base" + index} />
              ))}
            </div>
            <p className="text-pSm">Base knowledge</p>
          </div>

          <div className="flex gap-x-5 items-center">
            <div className="flex gap-x-2">
              {[...Array(1)].map((dot, index) => (
                <Dot key={"lim" + index} />
              ))}
            </div>
            <p className="text-pSm">Limited knowledge</p>
          </div>
        </div>

        {skills.map((skill) => {
          const level = skill.level

          return (
            <>
              <div
                key={skill.name}
                className="skill flex justify-between items-center"
              >
                <p className="text-pMd">{skill.name}</p>
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
            </>
          )
        })}
      </section>

      <section className="soft-skills flex flex-col p-5 gap-y-8 overflow-hidden">
        <h3 className="font-display text-title5 self-center text-fluoGreen">
          Soft Skills
        </h3>

        <div
          ref={scrollParent}
          className="scrolling-text flex flex-col gap-y-4 items-center text-center"
        >
          {SCROLL_SOFT_SKILLS.map((skill) => {
            const getRef = (element) => scrollEls.current.push(element)
            return (
              <span
                key={skill}
                ref={getRef}
                className="font-display text-title2 block whitespace-nowrap"
              >
                {skill}
              </span>
            )
          })}
        </div>
      </section>

      <section className="about flex flex-col gap-y-8 p-5">
        <h3 className="font-display text-title5 self-center text-fluoGreen">
          Who Am I?
        </h3>
        <img
          src={
            isHoveringImg
              ? "img/giovanna-accurat-2.png"
              : "img/giovanna-accurat-1.png"
          }
          alt="portrait of me"
          onMouseEnter={() => setIsHoveringImage(true)}
          onMouseLeave={() => setIsHoveringImage(false)}
        />
        <p className="short-bio text-pMd">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar leo,
          ut ut et dictum bibendum pretium ipsum quis. Adipiscing lectus nec
          cursus ullamcorper sit urna, et volutpat. Aliquam at ut lectus semper
          eget. Nibh fringilla habitant bibendum hendrerit leo nunc. Auctor nunc
          sit nunc sed integer orci vel velit facilisis.
        </p>
        <div className="links flex flex-col gap-y-3">
          <span className="flex gap-x-3 items-center text-title4 font-display">
            <ArrowSlanted className="inline" />
            <Link to="/about">About me</Link>
          </span>
          <span className="flex gap-x-3 items-center text-title4 font-display">
            <ArrowSlanted className="inline" />
            <Link to="/experience">Experience</Link>
          </span>
        </div>
        <div className="contact flex flex-col items-center gap-y-8 py-8">
          <h3 className="font-display text-title5 self-center text-fluoGreen">
            Contact Me
          </h3>
          <div className="e-mail flex gap-x-1 items-center">
            <ArrowSlanted className="inline" />
            <RoughNotation
              type="underline"
              show={true}
              strokeWidth={3}
              iterations={2}
              color="#4BFFB3"
              animationDuration={300}
            >
              <a
                href="mailto:giovannamontidev@gmail.com"
                className="font-body text-pMd"
              >
                giovannamontidev@gmail.com
              </a>
            </RoughNotation>
          </div>
        </div>
      </section>

      <FooterMobile />
    </>
  )
}
