import React from 'react';
import Comments from '../Comments/index.jsx';

function Wrapper() {
  const [items, setItems] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);

  const comments = [];

  const nextPage = () => {
    setPageNum(pageNum + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setPageNum(pageNum - 1);
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    fetch('https://65ae4a201dfbae409a74761d.mockapi.io/manga')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        console.log('I am here');
      });
  }, []);

  return (
    <div className='wrapper'>
      <div className='reader-view' id='reader-view'>
        <div className='reader-view_container'>
          {items.map((obj) => (
            <div className={`reader-view_wrap ${pageNum === obj.page ? '' : 'hidden'}`}>
              <img src={`process.env.REACT_APP_API_URL${obj.imageUrl}`} data-page={obj.page} />
            </div>
          ))}
        </div>
      </div>
      <div className='page-wrapper'>
        <div className='wrapper__buttons'>
          <div
            onClick={() => prevPage()}
            className={`wrapper__buttons_wrap ${
              pageNum <= 1 ? 'wrapper__buttons_wrap_inactive' : ''
            } `}
          >
            <i className='bx bx-chevron-left text-s-22' />
          </div>
          <div className='page-num'>
            <span className='primary-text text-s-18'>
              {pageNum} / {items.length}
            </span>
          </div>
          <div
            onClick={() => nextPage()}
            className={`wrapper__buttons_wrap ${
              pageNum < items.length ? '' : 'wrapper__buttons_wrap_inactive'
            } `}
          >
            <i className='bx bx-chevron-right text-s-22' />
          </div>
        </div>
      </div>
      <Comments comments={comments} />
    </div>
  );
}

export default Wrapper;
