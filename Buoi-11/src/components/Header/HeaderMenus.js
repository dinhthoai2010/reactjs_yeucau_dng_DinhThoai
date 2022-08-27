import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { actLogout } from "../../store/auth/actions";

function HeaderMenus() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.Auth.currentUser);
  const mainMenu = useSelector(state => state.Menu.mainMenu);
  function handleLogout(e) {
    e.preventDefault();
    dispatch(actLogout());
  }

  function renderMenu(menu, lever=0) {
    if (menu.length === 0) return
    let classes = 'header-nav__lists';
    if(lever!==0) 
      classes= '';
    return (
      <ul className={classes}>
        {menu.map(item => {
          return (
            <li key={item.id}>
              <a href="/">{item.title}</a>
              {renderMenu(item.childItems,1)}
            </li>
          )
        }
        )}
      </ul>
    )
  }


  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        {renderMenu(mainMenu)}
        <ul className="header-nav__lists">
          {
            currentUser ? (
              <li className="user"><Link to="/dashboard"><i className="icons ion-person" /> {currentUser.nickname}</Link>
                <ul>
                  <li><a href="/" onClick={handleLogout}>Đăng xuất</a></li>
                </ul>
              </li>
            ) : (
              <li className="user"><Link to="/login"><i className="icons ion-person" /> Tài khoản</Link></li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default HeaderMenus