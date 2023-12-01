import React from "react";
import styles from "../styles/modal/Modal.module.scss";

const Modal = ({ active, setActive }: { active: boolean; setActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className={`${styles.modal} ${active ? `${styles.active}` : ""}`}>
            <div className="modal__content">
                <h2>Заголовок модального окна</h2>
                <p>Ваш текст и содержимое модального окна здесь.</p>
                <button onClick={() => setActive(!active)}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;