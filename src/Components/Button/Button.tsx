import React from "react";
import ButtonStyle from "./Button.module.scss";

class Button extends React.Component <{text: string, type: "button" | "submit" | "reset" | undefined}>{
    render() {
        return (
            <button type={this.props.type} className={ButtonStyle.button}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
