import React from "react";
import { status } from "../../../constants/status.js";
import classes from "./Select.module.scss";

const Select = ({ label, name, value, onChange, options }) => {
    return (
        <div className={classes['__select_container']}>
            <label>{label}</label>
            <select
                name={name}
                value={value}
                onChange={(e) => {
                    onChange(e?.target?.value);
                }}>
                {status.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;