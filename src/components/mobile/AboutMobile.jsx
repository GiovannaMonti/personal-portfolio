import React from "react"

import { ReactComponent as DonwloadIcon } from "../../assets/icon-download.svg"
import { ReactComponent as ArrowSlanted } from "../../assets/arrow-slanted.svg"

import { FooterMobile } from "./FooterMobile"

export const AboutMobile = () => {
  return (
    <>
      <section
        className="intro flex flex-col gap-y-6 px-5 py-16"
        style={{ marginTop: "82px" }}
      >
        <h1 className="text-titleHugeMobile leading-none">Hi! I'm Giovanna</h1>
        <p className="text-pMd">
          your friendly neighbourhood Web Developer & Designer
        </p>
        <img src="img/giovanna-accurat-1.png" alt="portrait of me" />
        <a href="#" className="font-button text-btnTextSm flex gap-x-2">
          <DonwloadIcon />
          download my CV
        </a>
      </section>

      <section className="desc flex flex-col gap-y-6 px-5">
        <div className="bio pb-10">
          <h3 className="font-marker text-title5">Bio</h3>
          <p className="text-pMd py-2">
            I'm Giovanna, class 1998, and I'm a creative Developer and Designer.
          </p>
          <p className="text-pMd py-2">
            Empathetic, straightforward and assertive, I'm a grounded
            perfectionist, always in search of the right balance between
            feasibility and elegance.
          </p>
          <p className="text-pMd py-2">
            I listen to weird music, I love pc gaming and I like facing every
            challenge with enthusiasm and curiosity.
          </p>
          <p className="text-pMd py-2">
            My motto? Understand things, before you do them. And, in case of
            doubt, always ask!
          </p>
        </div>

        <div className="interests">
          <h3 className="font-marker text-title5">Background + Interests</h3>
          <p className="text-pMd py-2">
            I achieved a bachelor's degree in{" "}
            <a
              className="font-semibold text-fluoGreen"
              href="https://www.unimi.it/en/education/computer-science-new-media-communications"
              target="_blank"
              rel="noreferrer"
            >
              Computer Science for New Media Communications
            </a>{" "}
            at Università degli Studi di Milano and then completed the academic
            biennium in Web and Digital Media at{" "}
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
          <p className="text-pMd py-2">
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
          <p className="text-pMd py-2">
            My interests include all web development areas and aspects, but I'm
            particularly fond of projects that aim for a combination of both
            functionality and aesthetics.
          </p>
        </div>
      </section>

      <section className="contact flex flex-col items-center gap-y-8 py-24">
        <h3 className="font-marker text-title5 self-center">Get in touch</h3>
        <div className="e-mail flex gap-x-1 items-center">
          <ArrowSlanted className="inline" />
          <a
            href="mailto:giovannamontidev@gmail.com"
            className="font-body text-pMd"
          >
            giovannamontidev@gmail.com
          </a>
        </div>
      </section>

      <FooterMobile />
    </>
  )
}