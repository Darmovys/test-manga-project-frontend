import React from 'react';
import { useStore } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import { Link } from 'react-router-dom';

function Sidebar() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Ви дійсно хочете вийти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  const [sidebarClose, setSidebarClose] = React.useState(true);
  const [subMenuClose, setSubMenuClose] = React.useState(true);

  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const closeSidebar = () => {
    setSidebarClose(!sidebarClose);
    if (subMenuClose === false) {
      setSubMenuClose(true);
    }
  };

  return (
    <nav className={`sidebar ${sidebarClose ? 'close' : ''}`}>
      <header>
        {isAuth ? (
          <div className='image-text'>
            <span className='image'>
              <img src='http://localhost:4444/images/basicAvatar/avatar.gif' alt='Аватар' />
            </span>
            <a href='#'>
              <span className='text'>Android</span>
            </a>
          </div>
        ) : (
          <div className='image-text'>
            <span className='image'>
              <img src='/noavatar.png' alt='Аватар' />
            </span>
            <Link to='/login'>
              <span className='text'>Увійдіть</span>
            </Link>
          </div>
        )}
        <i onClick={() => closeSidebar()} className='bx bx-chevron-right toggle' />
      </header>

      <div className='menu-bar'>
        <div className='menu'>
          <ul className='menu-links'>
            <li className='nav-link'>
              <a href='#' className='link'>
                <i className='bx bx-home icon' />
                <span className='text nav-text'>Головна</span>
              </a>
            </li>
            {isAuth ? (
              <li className='nav-link'>
                <a href='#' className='link'>
                  <i className='bx bxs-user icon' />
                  <span className='text nav-text'>Профіль</span>
                </a>
              </li>
            ) : (
              ''
            )}
            <div className={`dropdown ${subMenuClose ? '' : 'showMenu'}`}>
              <li className='nav-link'>
                <a href='#' className='link main-link'>
                  <i className='bx bx-collection icon' />
                  <span className='text nav-text'>Каталог</span>
                </a>
                <div onClick={() => setSubMenuClose(!subMenuClose)} className='link dropdown-link'>
                  <i className='bx bxs-chevron-down arrow icon' />
                </div>
              </li>
              <ul className='sub-menu blank'>
                <li>
                  <a href='#' className='link-name'>
                    Каталог
                  </a>
                </li>
                <li>
                  <a href='#'>Манга</a>
                </li>
                <li>
                  <a href='#'>Манхва</a>
                </li>
                <li>
                  <a href='#'>Маньхва</a>
                </li>
                <li>
                  <a href='#'>Комікс</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className='bottom-content'>
          {isAuth ? (
            <li className='nav-link' onClick={onClickLogout}>
              <a href='#' className='link'>
                <i className='bx bx-log-out icon' />
                <span className='text nav-text'>Вийти</span>
              </a>
            </li>
          ) : (
            <li className='nav-link'>
              <Link to='/login' className='link'>
                <i class='bx bx-log-in icon'></i>
                <span className='text nav-text'>Увійти</span>
              </Link>
            </li>
          )}

          <li className='mode nav-link'>
            <div className='moon-sun'>
              <i className='bx bx-moon icon moon' />
              <i className='bx bx-sun icon sun' />
            </div>
            <span className='mode-text text'>
              {theme === 'light' ? (
                <>
                  Світлий
                  <br />
                  режим
                </>
              ) : (
                <>
                  Темний
                  <br />
                  режим
                </>
              )}
            </span>
            <div className='toggle-switch'>
              <span onClick={() => toggleTheme()} className='switch' />
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
