import './Button.css'
const Button = ({name, url}) => {
    return (
        <a href={url} className="btn btn-default">{name}</a>
    );
};

export default Button;