import './ViewBtn.css'

const ViewBtn = ({name}) => {
    return (
        <ul className="article-item__stats">
            <li>
                <i className="icons ion-ios-eye"></i>
                <span className="text">{name}</span>
            </li>
        </ul>
    );
};

export default ViewBtn;