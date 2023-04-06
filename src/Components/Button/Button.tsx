import React from "react";
import ButtonStyle from "./Button.module.scss";

class Button extends React.Component <{text: string, type: "button" | "submit" | "reset" | undefined, onClick?: () => void}>{
    render() {
        return (
            <button type={this.props.type} onClick={this.props.onClick} className={ButtonStyle.button}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
