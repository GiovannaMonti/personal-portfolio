import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RoughNotation } from "react-rough-notation"

import { ReactComponent as DonwloadIcon } from "../../assets/icon-download.svg"
import { ReactComponent as ArrowSlantedBig } from "../../assets/arrow-slanted-big.svg"

import { FooterDesktop } from "./FooterDesktop"

export const AboutDesktop = () => {
  const [hoveredTextId, setHoveredTextId] = useState(null)

  gsap.registerPlugin(ScrollTrigger)

  const scrollAbout = useRef([])

  useEffect(() => {
    gsap.from(scrollAbout.current, {
      yPercent: 10,
      opacity: 0,
      stagger: scrollAbout.current.length * 0.03,
    })
  }, [])

  return (
    <>
      <section
        className="intro flex flex-col gap-y-3 p-16"
        style={{ marginTop: "114.5px" }}
      >
        <h1 className="text-titleHugeDesktop leading-none">
          Hi! I'm <span className="text-fluoGreen font-display">Giovanna</span>
        </h1>
        <p className="text-pLg">
          your friendly neighbourhood Web Developer & Designer
        </p>
      </section>

      <section className="p-16 flex gap-x-12">
        <div className="photo flex flex-col gap-y-6 text-pLg">
          <img
            ref={(element) => scrollAbout.current.push(element)}
            src="img/giovanna-accurat-1.png"
            alt="portrait of me"
            className="min-w-[35vw]"
          />

          <a
            ref={(element) => scrollAbout.current.push(element)}
            href="#"
            className="font-button text-linkSm flex items-center gap-x-2"
          >
            <DonwloadIcon />
            <RoughNotation
              type="underline"
              show={hoveredTextId === "cv"}
              strokeWidth={3}
              iterations={2}
              color="#4BFFB3"
              animationDuration={300}
              onMouseOver={() => {
                setHoveredTextId("cv")
              }}
              onMouseOut={() => {
                setHoveredTextId(null)
              }}
            >
              download my CV
            </RoughNotation>
          </a>
        </div>

        <div
          className="desc flex flex-col gap-y-6"
          ref={(element) => scrollAbout.current.push(element)}
        >
          <div className="bio pb-10">
            <h3 className="font-display text-altTitle4 text-fluoGreen">
              About me
            </h3>
            <p className="text-pLg py-2">
              I'm Giovanna, class 1998, and I'm a creative Developer and
              Designer.
            </p>
            <p className="text-pLg py-2">
              I listen to weird music, I love pc gaming and I like facing every
              challenge with enthusiasm and curiosity.
            </p>
            <p className="text-pLg py-2">
              My motto? Understand things, before you do them. And, in case of
              doubt, always ask!
            </p>
          </div>

          <div className="interests">
            <h3 className="font-display text-altTitle4 text-fluoGreen">
              Background + Interests
            </h3>
            <p className="text-pLg py-2">
              I achieved a bachelor's degree in{" "}
              <a
                className="font-semibold text-fluoGreen"
                href="https://www.unimi.it/en/education/computer-science-new-media-communications"
                target="_blank"
                rel="noreferrer"
              >
                Computer Science for New Media Communications
              </a>{" "}
              at Università degli Studi di Milano and then completed the
              academic biennium in Web and Digital Media at{" "}
              <a
                className="font-semibold text-fluoGreen"
                href="https://scuola.mohole.it/"
                target="_blank"
                rel="noreferrer"
              >
                Mohole
              </a>{" "}
              institute.
            </p>
            <p className="text-pLg py-2">
              I'm currently working as a creative developer at{" "}
              <a
                className="font-semibold text-fluoGreen"
                href="https://accurat.it/"
                target="_blank"
                rel="noreferrer"
              >
                Accurat
              </a>
              , a data-driven design and development agency based in Milan. Here
              I'm constantly refining my development and teamwork skills, while
              specializing in data-viz development.
            </p>
            <p className="text-pLg py-2">
              My interests include all web development areas and aspects, but
              I'm particularly fond of projects that aim for a combination of
              both functionality and aesthetics.
            </p>
          </div>

          <div className="contact flex flex-col gap-y-12">
            <h3 className="font-display text-altTitle4 mt-12 text-fluoGreen">
              Get in touch
            </h3>
            <div className="e-mail flex gap-x-1 items-center">
              <ArrowSlantedBig className="inline" />
              <a
                href="mailto:giovannamontidev@gmail.com"
                className="font-body text-pLg"
              >
                <RoughNotation
                  type="underline"
                  show={hoveredTextId === "mail"}
                  strokeWidth={3}
                  iterations={2}
                  color="#4BFFB3"
                  animationDuration={300}
                  onMouseOver={() => {
                    setHoveredTextId("mail")
                  }}
                  onMouseOut={() => {
                    setHoveredTextId(null)
                  }}
                >
                  giovannamontidev@gmail.com
                </RoughNotation>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterDesktop />
    </>
  )
}
