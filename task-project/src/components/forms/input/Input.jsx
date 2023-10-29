import React from "react";
import classes from "./Input.module.scss";

const Input = ({ label, name, value, onChange, placeholder }) => {
    return (
        <div className={classes['__input_container']}>
            {label && label.length > 0 && <label>{label}</label>}
            <input
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e) => {
                    onChange(e?.target?.value)
                }}
            />
        </div>
    )
}
export default Input;