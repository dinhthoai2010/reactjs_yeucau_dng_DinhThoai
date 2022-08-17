import './main-title.css'
import cls from 'classnames'
import Button from '../Button'

function MainTitle({
  children,
  btnLabel,
  type='',
  btnProps = {}
}) {

  const classes = cls('main-title spacing', {
    'd-flex tcl-jc-between tcl-ais-center': btnLabel,
    'main-title__search spacing' : type
  })

  return (
    <div className={classes}>
      <h2>{ children }</h2>
      { btnLabel && <Button {...btnProps}>{ btnLabel }</Button> }
    </div>
  )
}

export default MainTitle