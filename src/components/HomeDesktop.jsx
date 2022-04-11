import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg"
import { ReactComponent as ArrowSlantedBig } from "../assets/arrow-slanted-big.svg"
import { FooterDesktop } from "./FooterDesktop"

import { SCROLL_SOFT_SKILLS } from "../constants/helper"

export const HomeDesktop = () => {
  const [isHoveringImg, setIsHoveringImage] = useState(false)

  const scrollEls = useRef([])
  const scrollParent = useRef()
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from(scrollEls.current, {
      xPercent: (index) => {
        return index % 2 === 0 ? -30 : 50
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
      <section
        className="welcome-section flex flex-col justify-around px-16"
        style={{ height: "calc(100vh - 114.5px)", marginTop: "114.5px" }}
      >
        <div className="welcome-text">
          <h1 className="text-hugeTitle leading-tight px-10">
            <span className="text-fluoGreen font-display">Creative</span>{" "}
            Front-End{" "}
            <span className="text-fluoGreen font-display">Developer</span> &
            Designer
          </h1>
        </div>

        <div className="scroll-down self-center flex flex-col items-center gap-y-4">
          <span className="text-title5">SCROLL DOWN</span>
          <ArrowDown className="animate-bounce-smooth" />
        </div>
      </section>

      <section className="project-highlights grid grid-cols-about gap-x-12 px-16">
        <h3
          className="font-marker text-altTitle1 text-fluoGreen"
          style={{
            textOrientation: "upright",
            writingMode: "vertical-lr",
          }}
        >
          Projects
        </h3>

        <div>
          <div className="project-teaser py-10 flex gap-x-14 items-center">
            <img
              style={{ width: "35%" }}
              src="img/bloom-preview.png"
              alt="bloom app"
            />
            <div className="project-details">
              <h2 className="title flex gap-x-3 items-center text-title2">
                <ArrowSlantedBig className="inline" />
                Bloom App | 2022
              </h2>
              <p className="description text-pLg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                tellus interdum integer ut.
              </p>
            </div>
          </div>

          <div
            className="separator w-full"
            style={{ background: "white", height: "1px" }}
          />

          <div className="project-teaser py-10 flex gap-x-14 items-center">
            <img
              style={{ width: "35%" }}
              src="img/maison-compressed-preview.png"
              alt="maison du silence website"
            />
            <div className="project-details">
              <h2 className="title flex gap-x-3 items-center text-title2">
                <ArrowSlantedBig className="inline" />
                Maison du Silence | 2021
              </h2>
              <p className="description text-pLg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                tellus interdum integer ut.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hard-skills flex flex-col px-16 py-12"></section>

      <section className="soft-skills flex flex-col items-center text-center px-16 py-12 gap-y-8 overflow-hidden">
        <div
          ref={scrollParent}
          className="scrolling-text flex flex-col gap-y-4"
        >
          {SCROLL_SOFT_SKILLS.map((skill) => {
            const getRef = (element) => scrollEls.current.push(element)
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

      <section className="about grid grid-cols-about gap-x-12 px-16">
        <h3
          className="font-marker text-altTitle1 text-fluoGreen"
          style={{
            textOrientation: "upright",
            writingMode: "vertical-lr",
          }}
        >
          Who Am I?
        </h3>

        <div className="photo-and-bio flex flex-col gap-y-16 text-pLg">
          <img
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
              className="bio flex flex-col gap-y-10"
              style={{ width: "55%" }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar leo, ut ut et dictum bibendum pretium ipsum quis.
              </p>
              <p>
                Adipiscing lectus nec cursus ullamcorper sit urna, et volutpat.
                Aliquam at ut lectus semper eget.
              </p>
              <p>
                Nibh fringilla habitant bibendum hendrerit leo nunc. Auctor nunc
                sit nunc sed integer orci vel velit facilisis. Aliquam at ut
                lectus semper eget. Nibh fringilla habitant bibendum hendrerit
                leo nunc.
              </p>

              <div className="contact flex flex-col gap-y-12">
                <h3 className="font-marker text-altTitle4 mt-12">Contact Me</h3>
                <div className="e-mail flex gap-x-1 items-center">
                  <ArrowSlantedBig className="inline" />
                  <a
                    href="mailto:giovannamontidev@gmail.com"
                    className="font-body text-pLg"
                  >
                    giovannamontidev@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="links flex flex-col gap-y-3">
              <span className="flex gap-x-3 items-center text-title2 font-display">
                <ArrowSlantedBig className="inline" />
                About me
              </span>
              <span className="flex gap-x-3 items-center text-title2 font-display">
                <ArrowSlantedBig className="inline" />
                Experience
              </span>
            </div>
          </div>
        </div>

        <div className="contact flex flex-col items-center gap-y-8 py-8"></div>
      </section>

      <FooterDesktop />
    </>
  )
}
