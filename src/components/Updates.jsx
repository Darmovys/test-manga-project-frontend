import React from 'react';

import { Link } from 'react-router-dom';

function Updates() {
  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    const params = {
      slidesPerView: 7,
      spaceBetween: 16,
      slidesPerGroup: 4,
      freeMode: true,
      navigation: {
        nextEl: '#next-updates',
        prevEl: '#prev-updates',
      },
      on: {
        reachEnd: function () {
          document.querySelector('#next-updates').style.display = 'none';
        },
        slidePrevTransitionStart: function () {
          document.querySelector('#next-updates').style.display = 'flex';
        },
        reachBeginning: function () {
          document.querySelector('#prev-updates').style.display = 'none';
        },
        slideNextTransitionStart: function () {
          document.querySelector('#prev-updates').style.display = 'flex';
        },
      },
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <div className='paper section' id='section-1'>
      <div className='slider'>
        <div className='nav-btn next' id='next-updates'>
          <i className='fs-25 bx bx-chevron-right'></i>
        </div>
        <div className='nav-btn prev' id='prev-updates' style={{ display: 'none' }}>
          <i className='fs-25 bx bx-chevron-left'></i>
        </div>
        <swiper-container init='false' ref={swiperRef} class='swiper-1 mt-12'>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-1.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 36</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>РВБІ Широу</div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-2.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 94</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 88</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>Кохання Диявола</div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-4.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 77</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>Тиран в грі на захист</div>
                <div className='card-item-caption__secondary'>Манхва</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-5.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 16</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>Моя геройська академія</div>
                <div className='card-item-caption__secondary'>Манга</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-6.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 100</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>Перезапуск підземелля</div>
                <div className='card-item-caption__secondary'>Манхва</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-7.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 61</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>Вбивця демонів</div>
                <div className='card-item-caption__secondary'>Манга</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-8.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 78</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>Зіркове дитя</div>
                <div className='card-item-caption__secondary'>Манга</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-9.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 34</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>Магічна битва</div>
                <div className='card-item-caption__secondary'>Манга</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-10.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 34</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>Реальна освіта</div>
                <div className='card-item-caption__secondary'>Маньхва</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-1.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-2.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-3.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='card-item'>
              <Link to='/reader/id' className='cover'>
                <div className='cover__wrap'>
                  <img src='img/image-9.png' className='cover__img' />
                </div>
                <div className='card-item-labels'>
                  <div className='card-item-labels__item'>Розділ 111</div>
                </div>
              </Link>
              <Link to='/' className='card-item-caption'>
                <div className='card-item-caption__main'>
                  Порада в коханні від великого князя Пекла
                </div>
                <div className='card-item-caption__secondary'>Вебкомікс</div>
              </Link>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
}

export default Updates;
