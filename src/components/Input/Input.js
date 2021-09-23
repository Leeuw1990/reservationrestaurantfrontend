import React from 'react';
import styles from './Input.module.css'

function InputField({name, type, placeholder, fieldRef, errors}) {
    return(
        <div className={styles.container}>
            <label htmlFor={name}>
                <input
                    className={styles.inputField}
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    {...fieldRef}
                />
            </label>
            {errors[name] && <p className={styles.error}>{errors[name].message}</p>}
        </div>
    );
}

export default InputField;