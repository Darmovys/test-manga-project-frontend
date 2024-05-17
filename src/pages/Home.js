import React from 'react';
import axios from 'axios';

import Header from '../components/Header.jsx';
import Updates from '../components/Updates.jsx';

export const Home = () => {
  const swipeRef = React.useRef(null);

  React.useEffect(() => {
    const params = {
      slidesPerView: 1,
      spaceBetween: 16,
      slidesPerGroup: 1,
      freeMode: true,
      navigation: {
        nextEl: '#next-continue',
        prevEl: '#prev-continue',
      },
      on: {
        reachEnd: function () {
          document.querySelector('#next-continue').style.display = 'none';
        },
        slidePrevTransitionStart: function () {
          document.querySelector('#next-continue').style.display = 'flex';
        },
        reachBeginning: function () {
          document.querySelector('#prev-continue').style.display = 'none';
        },
        slideNextTransitionStart: function () {
          document.querySelector('#prev-continue').style.display = 'flex';
        },
      },
    };

    Object.assign(swipeRef.current, params);

    swipeRef.current.initialize();
  }, []);
  return (
    <>
      <div className='page'>
        <Header />
        <div className='container'>
          <Updates />
          <div className='paper section' id='section-2'>
            <div className='section-body'>
              <div className='section-title'>Продовжити читати</div>
            </div>
            <div className='slider'>
              <div className='nav-btn next' id='next-continue'>
                <i className='fs-25 bx bx-chevron-right'></i>
              </div>
              <div className='nav-btn prev' id='prev-continue' style={{ display: 'none' }}>
                <i className='fs-25 bx bx-chevron-left'></i>
              </div>
              <div className='section-body'>
                <swiper-container class='swiper-2 _raised br-6' init='false' ref={swipeRef}>
                  <a href='/' className='card-inline _raised w-300 pd-8'>
                    <div className='cover w-56'>
                      <div className='cover__wrap'>
                        <img className='cover__img' src='img/image-2.png' />
                      </div>
                    </div>
                  </a>
                </swiper-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
