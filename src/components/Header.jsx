import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useStore } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../redux/slices/auth';

function Header() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Ви дійсно хочете вийти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  const [popup1State, setPopup1State] = React.useState(false);
  const [popup2State, setPopup2State] = React.useState(false);
  const [popup3State, setPopup3State] = React.useState(false);
  let popup1Ref = React.useRef();
  let popup2Ref = React.useRef();
  let popup3Ref = React.useRef();
  const node1Ref = React.useRef(null);
  const node2Ref = React.useRef(null);
  const node3Ref = React.useRef(null);

  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => {
    let handler = (event) => {
      if (!event.composedPath().includes(popup1Ref.current)) {
        setPopup1State(false);
      }
    };

    document.body.addEventListener('click', handler);

    return () => {
      document.body.removeEventListener('click', handler);
    };
  }, []);

  React.useEffect(() => {
    let handler = (event) => {
      if (!event.composedPath().includes(popup2Ref.current)) {
        setPopup2State(false);
      }
    };

    document.body.addEventListener('click', handler);

    return () => {
      document.body.removeEventListener('click', handler);
    };
  }, []);

  React.useEffect(() => {
    let handler = (event) => {
      if (!event.composedPath().includes(popup3Ref.current)) {
        setPopup3State(false);
      }
    };

    document.body.addEventListener('click', handler);

    return () => {
      document.body.removeEventListener('click', handler);
    };
  }, []);

  return (
    <div className='header'>
      <div className='container header_inn_acc'>
        <div className='header__logo'>
          <Link to='/reader/add'>
            <img className='header__logo_img' src='logo-clear.png' loading='lazy' />
          </Link>
        </div>
        <div className='header__content _ml-auto _mr-auto'>
          <div className='pos-ref' ref={popup1Ref}>
            <div className='header__btn' onClick={() => setPopup1State(!popup1State)}>
              <div className='pl-12 pr-12 btn-content'>
                <i className='fs-20 bx bxs-layer'></i>
                <span className='fs-18'>Каталог</span>
                <i className='trY-05 fs-10 bx bxs-down-arrow'></i>
              </div>
            </div>
            <CSSTransition
              in={popup1State}
              timeout={{ enter: 100, exit: 100 }}
              classNames='popup'
              unmountOnExit
              nodeRef={node1Ref}
            >
              <div className={`popup`} ref={node1Ref}>
                <div className='menu-list'>
                  <Link to='/reader/ad' className='menu-item'>
                    <div className='menu-item__text'>Манга</div>
                  </Link>
                  <Link to='/man' className='menu-item'>
                    <div className='menu-item__text'>Манхва</div>
                  </Link>
                  <Link to='/man' className='menu-item'>
                    <div className='menu-item__text'>Маньхва</div>
                  </Link>
                  <Link to='/man' className='menu-item'>
                    <div className='menu-item__text'>Комікс</div>
                  </Link>
                </div>
              </div>
            </CSSTransition>
          </div>

          <div className='header__btn'>
            <div className='pl-12 pr-12 btn-content'>
              <i className='fs-20 bx bx-search'></i>
              <span className='fs-18'>Пошук</span>
            </div>
          </div>
        </div>

        <div className='header__content flex-end'>
          {isAuth ? (
            <>
              <div className='pos-rel' ref={popup2Ref}>
                <div className='header__btn' onClick={() => setPopup2State(!popup2State)}>
                  <div className='pl-12 pr-12 btn-content mx-wd'>
                    <i className='fs-20 bx bx-plus'></i>
                  </div>
                </div>
                <CSSTransition
                  in={popup2State}
                  timeout={{ enter: 100, exit: 100 }}
                  classNames='popup'
                  unmountOnExit
                  nodeRef={node2Ref}
                >
                  <div className={`popup right min-w-190`} ref={node2Ref}>
                    <div className='menu-list'>
                      <Link to='/reader/ad' className='menu-item'>
                        <i className='bx bxs-book-add fs-18 trY-05 menu-item__icon'></i>
                        <div className='menu-item__text'>Додати тайтл</div>
                      </Link>
                      <Link to='/man' className='menu-item'>
                        <i className='fa-solid fa-users fs-16 trY-05 menu-item__icon'></i>
                        <div className='menu-item__text'>Створити команду</div>
                      </Link>
                    </div>
                  </div>
                </CSSTransition>
              </div>

              <Link to='/' className='header__btn'>
                <img src='NxuXiv6mqk59.gif' className='avatar is-rounded' />
              </Link>

              <div className='pos-rel' ref={popup3Ref}>
                <div className='header__btn' onClick={() => setPopup3State(!popup3State)}>
                  <div className='pl-12 pr-12 btn-content mx-wd'>
                    <i className='fs-20 bx bx-menu'></i>
                  </div>
                </div>
                <CSSTransition
                  in={popup3State}
                  timeout={{ enter: 100, exit: 100 }}
                  classNames='popup'
                  unmountOnExit
                  nodeRef={node3Ref}
                >
                  <div className={`popup right min-w-200`} ref={node3Ref}>
                    <div className='menu-list'>
                      <Link to='/reader/ad' className='menu-item is-active'>
                        <i className='bx bxs-user fs-18 trY-05 menu-item__icon'></i>
                        <div className='menu-item__text'>
                          <div className='primary-text'>Android</div>
                          <div className='secondary-text'>
                            <span>Моя сторінка</span>
                            <i className='bx bx-right-arrow-alt trY-2'></i>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className='divider is-default mr-0'></div>
                    <div className='menu-list'>
                      <Link to='/man' className='menu-item'>
                        <i className='bx bxs-message-rounded fs-18 trY-05 menu-item__icon'></i>
                        <div className='menu-item__text'>Коментарі</div>
                      </Link>
                      <Link to='/man' className='menu-item'>
                        <i className='bx bxs-cog fs-18 trY-05 menu-item__icon'></i>
                        <div className='menu-item__text'>Налаштування</div>
                      </Link>
                    </div>
                    <div className='divider is-default mr-0'></div>
                    <div className='menu-list'>
                      <div className='menu-item' onClick={() => toggleTheme()}>
                        <i
                          className={`bx bxs-${
                            theme === 'light' ? 'sun' : 'moon'
                          } fs-18 trY-05 menu-item__icon`}
                        ></i>
                        <div className='menu-item__text'>Тема сайту</div>
                        <div className='menu-item__text-second trY-2'>
                          {theme === 'light' ? <>Світла</> : <>Темна</>}
                        </div>
                      </div>
                    </div>
                    <div className='divider is-default mr-0'></div>
                    <div className='menu-list'>
                      <div className='menu-item danger' onClick={onClickLogout}>
                        <i className='bx bxs-door-open fs-18 trY-05 menu-item__icon'></i>
                        <div className='menu-item__text'>Вихід</div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </>
          ) : (
            <>
              <div className='header__btn' onClick={() => toggleTheme()}>
                <div className='pl-12 pr-12 btn-content mx-wd'>
                  <i
                    className={`bx bxs-${
                      theme === 'light' ? 'sun' : 'moon'
                    } fs-18 trY-05 menu-item__icon`}
                  ></i>
                </div>
              </div>

              <div className='header__btn'>
                <Link to='/login'>
                  <div className='pl-12 pr-12 btn-content'>
                    <span className='fs-18'>Увійти</span>
                  </div>
                </Link>
              </div>

              <div className='header__btn'>
                <Link to='/register'>
                  <div className='pl-12 pr-12 btn-content'>
                    <span className='fs-18'>Реєстрація</span>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
