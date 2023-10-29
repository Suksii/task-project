import React from "react";

const Button = ({ label, onClick, className, style }) => {
    return (
        <button type="submit"
                style={style}
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
                className={className}>
            {label}
        </button>
    )
}
export default Button;