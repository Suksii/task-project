import React from "react";
import Button from "../button/Button.jsx";
import { BiX } from "react-icons/bi";
import classes from "./Modal.module.scss"
const Modal = ({title, children, closeModal, onClick}) => {
    return (
        <div className={classes['__modal_background']}>
            <div className={classes['__modal_container']}>
                <div className={classes['__x_button']}>
                    <Button label={<BiX />}
                            onClick={() => closeModal(false)}
                    />
                </div>

                <div className={classes['__modal_header']}>
                    <h3>{title}</h3>
                </div>
                <div className={classes['__modal_body']}>
                    <div>{children}</div>
                </div>
                <div className={classes['__modal_footer']}>
                    <Button
                        label="Close"
                        onClick={() => closeModal(false)}/>
                    <Button
                        label="Save"
                        onClick={() => onClick()}/>
                </div>
            </div>
        </div>
    )
}

export default Modal;