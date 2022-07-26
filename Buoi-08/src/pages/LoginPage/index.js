import './login.css'
import { Link } from "react-router-dom"
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { useState } from 'react'

function LoginPage() {

  const [notification, setNotification] = useState('')
  const [isShow, setIsShow] = useState(6)

  const onChange = (value) => {
    if (value && value.length <= 6) {
      setNotification('Pass không được dưới 6 ký tự')
      setIsShow(true)
    }
    else {
      setNotification('Pass không được rỗng')
      setIsShow(false)
    }
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              <form autoComplete="off">
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  required
                  errNotification="User không được rỗng"
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  required
                  IsShow = {isShow}
                  onChanges={onChange}
                  errNotification={notification}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Đăng nhập</Button>
                  <Link to="/register">Đăng ký</Link>
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

export default LoginPage