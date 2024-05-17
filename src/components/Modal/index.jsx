import React from 'react';
import { Transition } from 'react-transition-group';

function Modal({ isOpen, onClose }) {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains('modal_wrapper')) closeModal();
  };

  function closeModal() {
    document.querySelector('body').classList.remove('lock');
    onClose();
    resetSidenavScroll();
  }

  function resetSidenavScroll() {
    document.querySelector('.sidenav').scrollTop = 0;
  }

  return (
    <div id='my-modal' className={`modal ${isOpen ? 'open' : ''}`}>
      <div className='modal_wrapper' onClick={onWrapperClick}>
        <div className='sidenav'>
          <div className='sidenav__header'>
            <div className='sidenav__header_content text-color'>
              <span className='text'>Вміст</span>
            </div>
            <div
              onClick={() => closeModal()}
              className='sidenav__header_close-icon text text-color'
            >
              <i className='bx bx-x' />
            </div>
          </div>
          <div className='sidenav__content'>
            <a href='#'>
              <span className='sidenav__content_text'>Том 1 – Розділ – 1</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 2</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 3</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 4</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 5</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 1</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 2</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 3</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 4</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 5</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 1</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 1</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 2</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 3</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 4</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 5</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 1</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 2</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 3</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 4</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 5</span>
            </a>
            <a href='#'>
              <span className='text'>Том 1 – Розділ – 1</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
