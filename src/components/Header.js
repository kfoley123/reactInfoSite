import React from "react";
import Button from "./Button";
import placeholderImage from "../images/placeholderImage.jpeg";
import linkedinIcon from "../images/LinkedinIcon.webp";
import emailIcon from "../images/emailIcon.png";

export default function Header() {
    return (
        <header className="header">
            <img src={placeholderImage} className="header--img" alt="" />
            <h1 className="header--name">Kortney Foley</h1>
            <h3 className="header--title">Frontend Developer</h3>
            <p className="header--website">
                <a className="websiteLink" href="https://google.ca">
                    website
                </a>
            </p>
            <div className="buttonContainer">
                <Button
                    icon={emailIcon}
                    text="Email"
                    cssClass="btnWhite"
                    webAddress="mailto:kortney_foley@hotmail.com"
                />

                <Button
                    icon={linkedinIcon}
                    text="LinkedIn"
                    cssClass="btnBlue"
                    webAddress="https://www.linkedin.com/in/kortney-foley-2b218014b/"
                />
            </div>
        </header>
    );
}
