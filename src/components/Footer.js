import React from "react";
import SocialIcon from "./SocialIcon";
import githubIcon from "../images/githubIcon.webp";
import linkedinIcon from "../images/LinkedinIcon.webp";

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/kfoley123">
                <SocialIcon iconURL={githubIcon} />
            </a>
            <a href="https://www.linkedin.com/in/kortney-foley-2b218014b/">
                <SocialIcon iconURL={linkedinIcon} />
            </a>
        </footer>
    );
}
