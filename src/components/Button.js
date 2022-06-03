import React from "react";

export default function Button(props) {
    return (
        <button className={props.cssClass}>
            <img src={props.icon} />
            {props.text}
        </button>
    );
}
