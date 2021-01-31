import {FunctionComponent} from "react";
import {StyledProps} from "../../StyledProps";
import classNames from "classnames";
import {FieldProps} from "../FieldProps";

type Props = FieldProps & StyledProps;

const InputForm: FunctionComponent<Props> = (
    {
        className,
        style,
        value,
        onChangeValue,
        placeholder,
        label,
    }
) => {
    const classes = classNames
    (
        'form-control',
        className
    );

    return (
        <div className={"form-group"}>
            {label &&
            <label>
                {label}
            </label>}
            <input
                value={value}
                onChange={(event) => onChangeValue && onChangeValue(event.target.value || '')}
                className={classes}
                style={style}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputForm;
