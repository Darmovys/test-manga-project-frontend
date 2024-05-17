import './css/App.css';
import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home, Reader, Registration, Login } from './pages';
import { useStore } from './store';
import { register } from 'swiper/element/bundle';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';

register();

function App() {
  const theme = useStore((state) => state.theme);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reader/:id' element={<Reader />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
