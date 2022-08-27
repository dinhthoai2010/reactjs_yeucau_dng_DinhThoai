import './LoginPage/login.css'
import { Link, useHistory } from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { useState } from 'react';
import { validateFormData } from '../helpers';
import { useDispatch } from 'react-redux';
import { actRegister } from '../store/auth/actions';

function RegisterPage() {
  const dispatch = useDispatch();

  const history = useHistory();
  const [formData, setFormData] = useState({
    nickname: {
      value: '',
      error: ''
    },
    username: {
      value: '',
      error: ''
    },
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    }
  });

  function checkFormIsValid() {
    const newForm = {};
    let checkForm = true;
    Object.keys(formData).forEach(key => {
      let newValue = formData[key];
      let err = validateFormData({ name: key, value: newValue.value })
      if (err !== '') checkForm = false;
      newForm[key] = {
        value: newValue.value,
        error: err
      }
    })
    setFormData(newForm);
    return checkForm;
  }



  function handleRegister(e) {
    e.preventDefault();
    if (!checkFormIsValid())
      return false;

    const nickname = formData.nickname.value;
    const username = formData.username.value;
    const email = formData.email.value;
    const password = formData.password.value;

    dispatch(actRegister({ nickname, username, email, password })).then((rs) => {

      if (rs.ok) {
        history.push('/login');
      } else {
        // setFormError(res.error);
        // setLoading(false);
      }
    })

  }


  function handleOnChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value.trim();

    const error = validateFormData({ value, name });

    setFormData({
      ...formData,
      [name]: {
        value,
        error
      }
    });
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <form autoComplete="off" onSubmit={handleRegister}>
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  name="nickname"
                  value={formData.nickname.value}
                  onChange={handleOnChange}
                />
                <Input
                  label="Tên đăng nhập (*)"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="username"
                  value={formData.username.value}
                  error={formData.username.error}
                  onChange={handleOnChange}
                />
                <Input
                  label="Email (*)"
                  placeholder="Nhập Email của bạn ..."
                  autoComplete="Nhập email"
                  name="email"
                  value={formData.email.value}
                  error={formData.email.error}

                  onChange={handleOnChange}
                />
                <Input
                  type="password"
                  label="Nhập mật khẩu (*)"
                  placeholder="Nhập mật khẩu ..."
                  autoComplete="new-password"
                  name="password"
                  value={formData.password.value}
                  error={formData.password.error}

                  onChange={handleOnChange}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Đăng ký</Button>
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