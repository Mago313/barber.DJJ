import React, { ChangeEvent } from "react";
import styles from "../styles/modal/Modal.module.scss";
import { State } from "../types/state";
import { Button } from "../components/Button";
import InputMask from 'react-input-mask'
import { Link } from "react-router-dom";

type TProps = {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    setState: React.Dispatch<React.SetStateAction<State>>
    state: State
}

const Modal = ({ active, setActive, setState, state }: TProps) => {
    const [isValidName, setIsValidName] = React.useState<boolean>(false)
    const [isValidPhone, setIsValidPhone] = React.useState<boolean>(false)

    function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
        const sanitizedValue = event.target.value.replace(/\D/g, '');
        setState(prevState => ({ ...prevState, phone: sanitizedValue }));
        if (sanitizedValue.length === 11) {
            setIsValidPhone(true)
        } else {
            setIsValidPhone(false)
        }
    }

    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.value;
        const isValidName = /^[а-яА-Я]+$/u.test(name);
        if (isValidName) {
            setState(prevState => ({ ...prevState, name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() }));
            setIsValidName(true)
        } else {
            setState(prevState => ({ ...prevState, name }));
            setIsValidName(false)
        }
    }

    const isDisabled = !isValidName || !isValidPhone

    return (
        <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => { setActive(false); setState(prevData => ({ ...prevData, phone: '+7 ', name: '' })) }}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <div className={styles.ui__wrapper}>
                    <div className={styles.input__wrapper}>
                        <legend>
                            <label className={isValidName ? undefined : styles.erorr} form="phonenumber">{isValidName ? 'Введите имя*' : 'Введите корректное имя*'}</label>
                        </legend>
                        <div className={styles.textfield}>
                            <input
                                value={state.name}
                                type="text"
                                onChange={handleNameChange}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.ui__wrapper}>
                    <label className={styles.dropdown__container}>🇷🇺</label>
                    <div className={styles.input__wrapper}>
                        <legend>
                            <label form="phonenumber">Введите номер телефона*</label>
                        </legend>
                        <div className={styles.textfield}>
                            <InputMask
                                mask='+7 (999) 999-99-99'
                                value={state.phone}
                                onChange={handlePhoneChange}
                                placeholder="+7 (___) ___-__-__"
                            />
                        </div>
                    </div>
                </div>
                <Link style={{textDecoration: 'none'}} to={'/'}>
                <Button disabled={isDisabled} onClick={() => { setActive(false); setState(prevData => ({ ...prevData, phone: '+7 ', name: '', cards: [], dateTime: '', price: 0, time: '' })) }} title="Записаться" />
                </Link>
                
            </div>
        </div>
    );
};

export default Modal;