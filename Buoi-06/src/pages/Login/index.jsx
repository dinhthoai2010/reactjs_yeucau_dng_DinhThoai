import React from 'react';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import './style.login.css'
import { Link } from 'react-router-dom';
const LoginPage = () => {
    return (
        <main className="login">
            <div className="spacing" />
            <div className="tcl-container">
                <div className="tcl-row">
                    <div className="tcl-col-12 tcl-col-sm-6 block-center">
                        <h1 className="form-title text-center">Login</h1>
                        <div className="form-login-register">
                            <form action>
                            <Input  cls="form-control" type="text" labelText="Username" placeholder="Enter Username ..." />
                            <Input  cls="form-control" type="password" labelText="Password" placeholder="Enter Password ....." icon="toggle-password ion-eye" />
                            <div className="d-flex tcl-jc-between tcl-ais-center">
                                <Button type="primary" size="large">Submit</Button>
                                <Link to="/register">Đăng ký</Link>
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

export default LoginPage;