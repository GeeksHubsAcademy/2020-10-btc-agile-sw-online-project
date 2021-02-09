import {FunctionComponent} from "react";
import {StyledProps} from "../StyledProps";
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
    type?: ButtonType;
    dataCy?: string;
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
        type,
        dataCy
    }
) => {
    const classes = classNames
    (
        {'app-button--disabled': disabled},
        className
    );

    return (
        <button
            className={classes}
            style={style}
            onClick={() => {onClick && onClick()}}
            disabled={disabled}
            data-cy={dataCy}
        >
            {text}
            {children}
        </button>
    );
};

export default COButton;
