import './input.css'
import cls from 'classnames'
import { useState } from 'react'
import IconSearch from '../IconSearch'

function Input({
  label,
  type = 'text',
  className,
  icon = <IconSearch />,
  required,
  onChanges,
  errNotification,
  IsShow,
  ...restProps
  
}) {
  const [localType, setLocalType] = useState(type)


  function handleToggleShowPwd() {
    if (localType === 'password') {
      setLocalType('text')
    } else if (localType === 'text') {
      setLocalType('password')
    }
  }

  const classesIconPwd = cls('toggle-password', {
    'ion-eye': localType === 'password',
    'ion-eye-disabled': localType === 'text'
  })

  const classInput = cls(className, {
    'err': isNotNull
  })

  if (type === 'search') {
    return (
      <div className="input-search">
        { icon }
        <input 
          className={classesSearch}
          type={localType}
          {...restProps}
        />
      </div>
    )
  }

  
  const [isNotNull, setIsNotNull] = useState(false)

  function handleChangInput (e) {
    let value = e.target.value;
    if(required){
      if(!value)
      {
        setIsNotNull(true)
      }
      else setIsNotNull(false)
    }
    if(onChanges){
      onChanges(value)
    }
  }
  const classesSearch = cls('input-search__input', className)

  
  return (
    <div className="form-control">
      { label && <label>{ label }</label> }
      { type === 'password' && (
        <i className={classesIconPwd} onClick={handleToggleShowPwd}></i>
      ) }
      <input type={localType} defaultValue='' onChange={handleChangInput} className={classInput} {...restProps} />
      {(IsShow ||isNotNull) && <div  className="form-err "> {errNotification}</div>}
    </div>
  )
}

export default Input