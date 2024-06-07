import React from "react"
import { RoughNotation } from "react-rough-notation"

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
        <h1 className="text-titleHugeMobile leading-none">
          Hi! I'm <span className="text-fluoGreen font-display">Giovanna</span>
        </h1>
        <p className="text-pMd">
          your friendly neighbourhood Web Developer & Designer
        </p>
        <img src="img/giovanna-accurat-1.png" alt="portrait of me" />
        <a
          href="pdf/CV.pdf"
          className="font-button text-btnTextSm flex gap-x-2"
          download={"Giovanna Monti CV - ENG"}
        >
          <DonwloadIcon />
          <RoughNotation
            type="underline"
            show={true}
            strokeWidth={3}
            iterations={2}
            color="#4BFFB3"
            animationDuration={300}
          >
            download my CV
          </RoughNotation>
        </a>
      </section>

      <section className="desc flex flex-col gap-y-6 px-5">
        <div className="bio pb-10">
          <h3 className="font-display text-title5 text-fluoGreen">About me</h3>
          <p className="text-pMd py-2">
            I'm Giovanna, class 1998, and I'm a Full-Stack Developer with a soft
            spot for Front-End.
          </p>
          <p className="text-pMd py-2">
            I listen to weird music (and occasionally dance to it), I love playing ping pong and I like facing every challenge with enthusiasm and
            curiosity.
          </p>
          <p className="text-pMd py-2">
            My motto? Understand things, before you do them. And, in case of
            doubt, always ask!
          </p>
        </div>

        <div className="interests">
          <h3 className="font-display text-title5 text-fluoGreen">
            Background + Interests
          </h3>
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
            I've worked as a creative developer at{" "}
            <a
              className="font-semibold text-fluoGreen"
              href="https://accurat.it/"
              target="_blank"
              rel="noreferrer"
            >
              Accurat
            </a>
            , a data-driven design and development agency based in Milan. Then,
            I joined the R&D area of{" "}
            <a
              className="font-semibold text-fluoGreen"
              href="https://mia-platform.eu/"
              target="_blank"
              rel="noreferrer"
            >
              Mia-Platform
            </a>
            , developing features for Mia-Platform Console, an Internal
            Developer Platform builder that improves DevX and simplifies
            software development at scale.
          </p>
          <p className="text-pMd py-2">
            I am passionate about Platform Engineering and the cloud-native
            landscape. I love sharing thoughts and experiences with the tech
            community, and that's why I started my speaker journey in 2023.
            {<br />}I'm open to learning anything development-related, and I'm
            particularly fond of projects with a special care for the user
            interface.
          </p>
        </div>
      </section>

      <section className="contact flex flex-col items-center gap-y-8 py-24">
        <h3 className="font-display text-title5 self-center text-fluoGreen">
          Get in touch
        </h3>
        <div className="e-mail flex gap-x-1 items-center">
          <ArrowSlanted className="inline" />
          <a
            href="mailto:giovannamontidev@gmail.com"
            className="font-body text-pMd"
          >
            <RoughNotation
              type="underline"
              show={true}
              strokeWidth={3}
              iterations={2}
              color="#4BFFB3"
              animationDuration={300}
            >
              giovannamontidev@gmail.com
            </RoughNotation>
          </a>
        </div>
      </section>

      <FooterMobile />
    </>
  )
}
