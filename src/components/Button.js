import React from "react";

export default function Button(props) {
    return <button className={props.cssClass}>{props.text}</button>;
}
