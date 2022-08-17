import React from 'react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import './Login/style.login.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <main className="login">
            <div className="spacing" />
            <div className="tcl-container">
                <div className="tcl-row">
                    <div className="tcl-col-12 tcl-col-sm-6 block-center">
                        <h1 className="form-title text-center">Đăng ký tài khoản</h1>
                        <div className="form-login-register">
                            <form action>
                            <Input  cls="form-control" type="text" labelText="NicName" placeholder="Enter NicName..." />
                            <Input  cls="form-control" type="text" labelText="Tên đăng nhập" placeholder="Nhập tên đăng nhập..." />
                            <Input  cls="form-control" type="password" labelText="Mật khẩu" placeholder="Enter Password ....." icon="toggle-password ion-eye" />
                            <Input  cls="form-control" type="password" labelText="Xác nhận mật khẩu" placeholder="Xác nhận mật khẩu ....." icon="toggle-password ion-eye" />
                            <div className="d-flex tcl-jc-between tcl-ais-center">
                                <Button type="primary" size="large">Submit</Button>
                                <Link to="/login">Bạn đã có tài khoản</Link>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacing" />
        </main>
    );
};

export default Register;