import Button from '../shared/Button';
import Input from '../shared/Input';
import './login.css'

const Form = () => {
    return (
        <main className="login">
            <div className="spacing" />
            <div className="tcl-container">
                <div className="tcl-row">
                <div className="tcl-col-12 tcl-col-sm-6 block-center">
                    <h1 className="form-title text-center">Login</h1>
                    <div className="form-login-register">
                    <form>
                       
                        <Input  cls="header-search" type="text" className="header-search__input" icon="fa-regular fa-magnifying-glass" iconPos="left"  placeholder="Search articles here ..." name="query" aria-label="Search"/>
                        <Input  cls="form-control" type="text" labelText="Username" placeholder="Enter Username ..." />
                        <Input  cls="form-control" type="password" labelText="Password" placeholder="Enter Password ....." icon="toggle-password ion-eye">

                        </Input>

                        <div className="d-flex tcl-jc-between tcl-ais-center">
                            <Button type="primary" size="large">Submit</Button>
                            <Button as="a">Regiter</Button>
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

export default Form;