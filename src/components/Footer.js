import React from "react";
import SocialIcon from "./SocialIcon";
import githubIcon from "../images/githubIcon.webp";
import linkedinIcon from "../images/LinkedinIcon.webp";

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://google.ca">
                <SocialIcon iconURL={githubIcon} />
            </a>
            <a href="https://google.ca">
                <SocialIcon iconURL={linkedinIcon} />
            </a>
        </footer>
    );
}
