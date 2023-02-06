import React, {useState} from 'react';
import './SecondSection.scss';

const SecondSection = () => {
  const [btnClick, setBtnClick] = useState (false);
  const [product_class, setProductClass] = useState ('product hidden');
  const [btn,setBtn]=useState("visible")

  const handleClick = () => {
    if (!btnClick) {
      setProductClass ('product visible');
      setBtn("hidden")
    } else {
      setProductClass ('product hidden');
    }
  };
  return (
    <div className="second-section">
      <div className="container second-section__products">
        <div className="second-section__products-leftside">
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/350b1e64ba3459bb3898791aa5b26eb0/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/b05520375116fe062ba264aa78de8d7f/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/b9b35f8d467e871dbd43fbcc64406587/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/465bb28f9e9b5bf5327e09eacba1a9f7/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className={product_class}>
            <div className="second-section__products-leftside-first product">
              <img
                src="https://storyhub-beauty-redq.vercel.app/static/34ed5ef02af3b249256c4152efffc2aa/d8441/preview.webp"
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>What’s in your makeup <span>drawer</span></h2>
                <p>
                  An Essay on Typography by Eric Gill takes the reader back to the year
                  {' '}
                  <span>1930. The year when a conflict…</span>
                </p>
                <button className="second-section__products-leftside-first_desc-btn">
                  Read More
                </button>
              </div>

            </div>
          </div>
          <div className={product_class}>
            <div className="second-section__products-leftside-first product">
              <img
                src="https://storyhub-beauty-redq.vercel.app/static/d436b841b5bbad3bd8156678d595b46a/d8441/preview.webp"
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>What’s in your makeup <span>drawer</span></h2>
                <p>
                  An Essay on Typography by Eric Gill takes the reader back to the year
                  {' '}
                  <span>1930. The year when a conflict…</span>
                </p>
                <button className="second-section__products-leftside-first_desc-btn">
                  Read More
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="second-section__products-rightside">
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/7e1fa5ac3d06e65804b3ec7d00b5b93b/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/2c278d57a60460fa70e0f790a7381e0b/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/2c49ef889edcc5876f9805abe0979f1f/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/cd708d69721e79c0da0f18148e3205f4/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className={product_class}>
            <div className="second-section__products-leftside-first product">
              <img
                src="https://storyhub-beauty-redq.vercel.app/static/bcbf431fca61421f1b21562063d8307f/d8441/preview.webp"
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>What’s in your makeup <span>drawer</span></h2>
                <p>
                  An Essay on Typography by Eric Gill takes the reader back to the year
                  {' '}
                  <span>1930. The year when a conflict…</span>
                </p>
                <button className="second-section__products-leftside-first_desc-btn">
                  Read More
                </button>
              </div>

            </div>
          </div>
          <div className={product_class}>
            <div className="second-section__products-leftside-first product">
              <img
                src="https://storyhub-beauty-redq.vercel.app/static/02f247d2c0109e288bd216c31650d916/d8441/preview.webp"
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>What’s in your makeup <span>drawer</span></h2>
                <p>
                  An Essay on Typography by Eric Gill takes the reader back to the year
                  {' '}
                  <span>1930. The year when a conflict…</span>
                </p>
                <button className="second-section__products-leftside-first_desc-btn">
                  Read More
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className={btn}>
      <button className="second-section_end-btn" onClick={() => handleClick ()}>
        Load More
      </button>
      </div>
      <div className={product_class}>
      <p className='second-section_p'>No more posts</p>
      </div>
    </div>
  );
};

export default SecondSection;
