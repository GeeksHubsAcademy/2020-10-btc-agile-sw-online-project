import {FunctionComponent} from "react";
import {StyledProps} from "../StyledProps";
import {Button} from "react-bootstrap";
import classNames from "classnames";
import {ButtonVariant} from "react-bootstrap/types";
import "./button.scss";

type ButtonType = 'button' | 'reset' | 'submit' | string;

interface COButtonProps extends StyledProps {
    onClick?: () => void;
    text?: string;
    variant?: ButtonVariant;
    disabled?: boolean;
    to?: string;
    type?: ButtonType
}

const COButton: FunctionComponent<COButtonProps> = (
    {
        text,
        onClick,
        className,
        style,
        variant,
        disabled,
        children,
        type
    }
) => {
    const classes = classNames
    (
        {'app-button--disabled': disabled},
        className
    );

    return (
        <Button
            variant={variant || "primary"}
            className={classes}
            style={style}
            onClick={() => {onClick && onClick()}}
            disabled={disabled}
            type={type}
        >
            {text}
            {children}
        </Button>
    );
};

export default COButton;
