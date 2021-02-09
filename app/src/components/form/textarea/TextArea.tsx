import {FunctionComponent} from "react";
import {StyledProps} from "../../StyledProps";
import classNames from "classnames";
import {FieldProps} from "../FieldProps";

type Props = FieldProps & StyledProps;

const TextArea: FunctionComponent<Props> = (
    {
        className,
        style,
        value,
        onChangeValue,
        placeholder,
        label,
        dataCy
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
            <textarea
                value={value}
                onChange={(event) => onChangeValue && onChangeValue(event.target.value || '')}
                className={classes}
                style={style}
                placeholder={placeholder}
                rows={3}
                data-cy={dataCy}
            />
        </div>
    );
};

export default TextArea;
