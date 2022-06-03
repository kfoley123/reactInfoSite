import React from "react";
import Button from "./Button";
import placeholderImage from "../images/placeholderImage.jpeg";
import linkedinIcon from "../images/LinkedinIcon.webp";
import emailIcon from "../images/emailIcon.png";

export default function Header() {
    return (
        <header className="header">
            <img src={placeholderImage} className="header--img" />
            <h1 className="header--name">Kortney Foley</h1>
            <h3 className="header--title">Frontend Developer</h3>
            <p className="header--website">
                <a className="websiteLink" href="#">
                    website
                </a>
            </p>
            <div className="buttonContainer">
                <a href="#">
                    <Button
                        src={linkedinIcon}
                        text="Email"
                        cssClass="btnWhite"
                    />
                </a>
                <a href="#">
                    <Button text="LinkedIn" cssClass="btnBlue" />
                </a>
            </div>
        </header>
    );
}
