import React, { useState } from 'react';

const Input = ({cls,labelText,icon, type = 'text', iconPos="right", ...restParams}) => {
    const [inputType,setInputType] = useState(type === 'password' ? "password" : type);
    function showPassword(){
        type === 'password' && setInputType(inputType === 'password' ? 'text' : 'password');
    }

    return (
        <div className={cls}>
            {iconPos === 'left' && <i className={icon}></i>}
            {labelText && <label>{labelText}</label>}
            {iconPos === "right" && <i className={icon} onClick={showPassword}></i>}
            <input type={inputType} {...restParams}/>
        </div>
    );
};
  
export default Input;