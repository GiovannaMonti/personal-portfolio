import React from "react"

import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg"
import { ReactComponent as BehanceIcon } from "../../assets/behance.svg"
import { ReactComponent as GithubIcon } from "../../assets/github.svg"

export const FooterDesktop = () => {
  return (
    <footer className="flex flex-col gap-y-3 p-16">
      <div className="social flex justify-end gap-x-3">
        <a
          href="https://www.linkedin.com/in/giovanna-monti-0637351a4/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/GiovannaMonti"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.behance.net/giovannamontidev"
          target="_blank"
          rel="noreferrer"
        >
          <BehanceIcon />
        </a>
      </div>
      <span className="text-sm text-footerGrey flex gap-x-1 justify-end">
        design & development by
        <a
          className="text-fluoGreen font-button"
          href="https://www.linkedin.com/in/giovanna-monti-0637351a4/"
          target="_blank"
          rel="noreferrer"
        >
          Giovanna Monti
        </a>
      </span>
    </footer>
  )
}
