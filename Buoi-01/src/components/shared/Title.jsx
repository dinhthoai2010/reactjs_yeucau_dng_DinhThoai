import './Title.css'
const Title = ({title, children}) => {
    return (
        <div className={`main-title spacing ${children?'d-flex tcl-jc-between tcl-ais-center' : ''}`}>
            <h2>{title}</h2>
            {children}           
        </div>
    );
};

export default Title;