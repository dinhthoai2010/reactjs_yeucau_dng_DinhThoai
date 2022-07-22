import React from 'react';
import { useRef } from 'react';

const Input = ({cls,labelText,icon, iconPos="right", ...restParams}) => {
    const val = useRef('');
    const i = <i className={icon}></i>;
    return (
        <div className={cls}>
            {labelText && <label>{labelText}</label>}
            {i}
            <input ref={val} {...restParams}/>
        </div>
    );
};

export default Input;