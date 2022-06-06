import React from "react";

export default function Button(props) {
    return (
        <a href={props.webAddress}>
            <button className={props.cssClass}>
                <img src={props.icon} alt="" />
                {props.text}
            </button>
        </a>
    );
}
