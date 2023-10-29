import React from "react";
import classes from "./Card.module.scss";

const Card = ({
                  title = "",
                  description = "",
                  status = ""
}) => {

    return (
        <div className={classes['__card']}>
            <p className={`${classes.__status} ${classes[`__status-${status.toLowerCase().replace(' ', '-')}`]}`}>{status}</p>
            <h3>{title}</h3>
            <p className={classes['__description']}>{description}</p>
        </div>
    )
}

export default Card;