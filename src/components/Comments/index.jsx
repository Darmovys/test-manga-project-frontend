function Comments({ comments }) {
  console.log(comments);
  return (
    <div className='comments-list'>
      <div id='comment_1' className='comment'>
        <div className='comment_body'>
          <div className='comment_head'>
            <a href='#' className='comment-author_cover'>
              <img
                src='/avatar.jpg'
                alt='Аватар користувача'
                className='avatar is-rounded size-sm'
              />
            </a>
            <div className='comment-author'>
              <a href='#' className='comment-author_name'>
                bob
              </a>
            </div>
            <time className='comment_time date'>місяць тому</time>
          </div>
          <div className='comment_content text-collapse'>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus
              adipisci alias, esse dolores pariatur. Ullam iste quis alias quo provident aliquid
              officiis consectetur natus? Mollitia, necessitatibus aut culpa dicta cum, facere,
              minus placeat amet modi error dolorum sunt quisquam libero atque ex sequi itaque
              ratione et tempore? Porro facilis expedita tempora distinctio rem aliquid quaerat
              perspiciatis neque architecto, explicabo corrupti aspernatur incidunt est, dicta
              debitis delectus illo omnis error a odit temporibus quasi voluptatibus. Accusantium
              deserunt sequi suscipit temporibus molestiae assumenda, porro quod sint autem quas
              facilis nostrum optio similique, tempore aliquam distinctio, dolore commodi minus
              totam eligendi quibusdam.
            </div>
          </div>
          <div className='comment_controls'>
            <button className='btn is-link variant-primary' type='button'>
              відповісти
            </button>
            <div className='comment-rating'>
              <button className='btn is-icon size-xs is-plain hover-success'>
                <i className='bx bxs-like rating-button' />
              </button>
              <span className='rating-counter success'>2</span>
              <div className='divider is-default _vertical' style={{ margin: '7px 0' }} />
              {/* <span></span> */}
              <span className='rating-counter danger'>1</span>
              <button className='btn is-icon size-xs is-plain hover-danger'>
                <i className='bx bxs-dislike rating-button' />
              </button>
            </div>
          </div>
        </div>
        <div className='comment_children'>
          <div className='comment_collapse' />
          <div id='comment_2' className='comment'>
            <div className='comment_body'>
              <div className='comment_head'>
                <a href='#' className='comment-author_cover'>
                  <img
                    src='/avatar.jpg'
                    alt='Аватар користувача'
                    className='avatar is-rounded size-sm'
                  />
                </a>
                <div className='comment-author'>
                  <a href='#' className='comment-author_name'>
                    bob
                  </a>
                </div>
                <time className='comment_time date'>день тому</time>
              </div>
              <div className='comment_content text-collapse'>
                <div>Дядяріус дядя Боб.</div>
              </div>
              <div className='comment_controls'>
                <button className='btn is-link variant-primary' type='button'>
                  відповісти
                </button>
                <div className='comment-rating'>
                  <button className='btn is-icon size-xs is-plain hover-success'>
                    <i className='bx bxs-like rating-button' />
                  </button>
                  <span className='rating-counter success'>122</span>
                  <div className='divider is-default _vertical' style={{ margin: '7px 0' }} />
                  {/* <span></span> */}
                  <span className='rating-counter '>0</span>
                  <button className='btn is-icon size-xs is-plain hover-danger'>
                    <i className='bx bxs-dislike rating-button' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='comment_3' className='comment'>
        <div className='comment_body'>
          <div className='comment_head'>
            <a href='#' className='comment-author_cover'>
              <img
                src='/avatar.jpg'
                alt='Аватар користувача'
                className='avatar is-rounded size-sm'
              />
            </a>
            <div className='comment-author'>
              <a href='#' className='comment-author_name'>
                bob
              </a>
            </div>
            <time className='comment_time date'>день тому</time>
          </div>
          <div className='comment_content text-collapse'>
            <div>Погнали)</div>
          </div>
          <div className='comment_controls'>
            <button className='btn is-link variant-primary' type='button'>
              відповісти
            </button>
            <div className='comment-rating'>
              <button className='btn is-icon size-xs is-plain hover-success'>
                <i className='bx bxs-like rating-button' />
              </button>
              <span className='rating-counter success'>122</span>
              <div className='divider is-default _vertical' style={{ margin: '7px 0' }} />
              {/* <span></span> */}
              <span className='rating-counter '>0</span>
              <button className='btn is-icon size-xs is-plain hover-danger'>
                <i className='bx bxs-dislike rating-button' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
