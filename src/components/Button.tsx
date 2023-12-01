import React from "react";
import styles from "../styles/components/Button.module.scss";
type TProps = {
    title: string
    onClick: any
}

export const Button = ({title, onClick}: TProps) => {
    return (
        <button onClick={onClick} className={styles.formSubmitBtn}>{title}</button>
    )
}