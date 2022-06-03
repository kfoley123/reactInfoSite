import React from "react";
import Button from "./Button";
import placeholderImage from "../images/placeholderImage.jpeg";

export default function Header() {
    return (
        <header className="header">
            <img src={placeholderImage} className="header--img" />
            <h1 className="header--name">Kortney Foley</h1>
            <h3 className="header--title">Frontend Developer</h3>
            <p className="header--website">website</p>
            <Button text="Email" cssClass="btnWhite" />
            <Button text="LinkedIn" cssClass="btnBlue" />
        </header>
    );
}
