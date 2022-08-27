import './LoginPage/login.css'
import { Link, useHistory } from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { useState } from 'react';
import { validateFormRegister } from '../helpers';
import { useDispatch } from 'react-redux';
import { actRegisterAsync } from '../store/auth/actions';
import { useNotAuthenticated } from '../hooks/useNotAuthenticated';

function RegisterPage() {
  useNotAuthenticated();
  const history = useHistory();
  const dispatch = useDispatch();
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nickname: { value: '', error: '' },
    username: { value: 'test123 123', error: '' },
    email: { value: 'test123@gmail.com', error: '' },
    password: { value: '123123', error: '' }
  });

  function handleOnChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value.trim();

    const error = validateFormRegister({ value, name });

    setFormData({
      ...formData,
      [name]: {
        value,
        error,
        isTouched: true
      }
    });
    // setIsFormDirty(false);
  }

  function checkFormIsValid() {
    const newFormData = {}
    Object.keys(formData).forEach(key => {
      const formValue = formData[key];
      newFormData[key] = {
        value: '',
        error: validateFormRegister({ value: formValue.value, name: key })
      }
    });

    setFormData(newFormData);

    if (newFormData.username.error || newFormData.password.error || newFormData.email.error) return false;

    return true;
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const isValid = checkFormIsValid();

    if (!isValid || loading) {
      return;
    }

    setLoading(true);
    setFormError('');

    const actAsync = actRegisterAsync({
      nickname: formData.nickname.value,
      username: formData.username.value,
      email: formData.email.value,
      password: formData.password.value,
    });

    dispatch(actAsync).then(res => {
      if (res.ok) {
        history.push('/');
      } else {
        setFormError(res.error);
        setLoading(false);
      }
    })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              {formError && <p className="form-login__error">{formError}</p>}
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  value={formData.nickname.value}
                  name="nickname"
                  onChange={handleOnChange}
                />
                <Input
                  label="Tên đăng nhập (*)"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  value={formData.username.value}
                  error={formData.username.error}
                  name="username"
                  onChange={handleOnChange}
                />
                <Input
                  label="Email (*)"
                  placeholder="Nhập email ..."
                  autoComplete="off"
                  value={formData.email.value}
                  error={formData.email.error}
                  name="email"
                  onChange={handleOnChange}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  value={formData.password.value}
                  error={formData.password.error}
                  name="password"
                  onChange={handleOnChange}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>Đăng ký</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}

export default RegisterPage