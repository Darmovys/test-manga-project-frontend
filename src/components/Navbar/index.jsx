import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal/index.jsx';

function Navbar() {
  const [modalInfoIsOpen, setModalInfoIsOpen] = React.useState(false);
  const body = document.querySelector('.body');

  function openModal() {
    document.querySelector('body').classList.add('lock');
    setModalInfoIsOpen(true);
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar__header'>
          <span className='secondary-text'>Jujutsu Kaisen</span>
          <span className='primary-text'>Магічна битва</span>
        </Link>
        <div className='navbar__chapters'>
          <a>
            <i className='bx bx-left-arrow-alt' />
          </a>
          <div onClick={() => openModal()} className='sidenav-open'>
            <span className='secondary-text'>Вміст</span>
            <span className='primary-text'>Том 1 – Розділ – 1</span>
          </div>
          <a>
            <i className='bx bx-right-arrow-alt' />
          </a>
        </div>
      </nav>
      <Modal isOpen={modalInfoIsOpen} onClose={() => setModalInfoIsOpen(false)} />
    </>
  );
}

export default Navbar;
