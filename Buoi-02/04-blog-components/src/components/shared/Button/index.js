import './button.css';
import cls from 'classnames';
import IconLoading from '../IconLoading';

function Button({ type, size, children, className, loading, loadingPos = 'left', as = 'button', htmlType, ...restParams }) {

  let classes1 = cls(
    'btn', {
      'btn-default': type==='default',
      'btn-category' : type==='category',
      'btn-primary' : type==='primary',
      'btn-size-large' : size ==='large'
    }, className
  );


  const contents = (
    <>
      {loading && loadingPos === 'left' && <IconLoading />}
      {children}
      {loading && loadingPos ==='right' && <IconLoading />}
    </>
  )

  if(as=== 'a') {
    return (
      <a className={classes1} type={htmlType} {...restParams}>{contents}</a>
    )
  }
  
  return (
    <button className={classes1} type={htmlType} {...restParams} > {contents} </button>
  );
}

export default Button;