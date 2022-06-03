import React from "react";

export default function SocialIcon(props) {
    return (
        <div className="footer--icon">
            <img src={props.iconURL} alt="" />
        </div>
    );
}
