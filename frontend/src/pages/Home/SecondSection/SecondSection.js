import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './SecondSection.scss';
import axios from "axios";
import { MainContext } from '../../../context/ContextProvider';

const SecondSection = () => {
  const {value,setValue}=useContext(MainContext)
  //api
  const {data, setData} = useContext(MainContext);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  //
  const [btnClick, setBtnClick] = useState (false);
  const [product_class, setProductClass] = useState ('product hidden');
  const [btn,setBtn]=useState("visible")

  const handleClick = () => {
      if (!btnClick) {
      setProductClass ('product visible');
      //  setProductClass(product_class==="hidden" ? "visible" :"hidden")
      setBtn("hidden")
     } else {
       setProductClass ('product hidden');
      }
  };
  //api
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/products");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  
  const getData2 = async () => {
    const res = await axios.get("http://localhost:8080/products2");
    setData2(res.data);
  };
  useEffect(() => {
    getData2();
  }, []);

  const getData3 = async () => {
    const res = await axios.get("http://localhost:8080/productsAdd1");
    setData3(res.data);
  };
  useEffect(() => {
    getData3();
  }, []);

  const getData4 = async () => {
    const res = await axios.get("http://localhost:8080/productsAdd2");
    setData4(res.data);
  };
  useEffect(() => {
    getData4();
  }, []);

  return (
    <>
    <div className="second-section">
      <div className="container second-section__products">
        <div className="second-section__products-leftside">
         {data && data
         .map((product)=>{
          return <div className="second-section__products-leftside-first">
           <img
             src={product.url}
             alt="img"
           />
          <div className="second-section__products-leftside-first_desc">
             <h2>{product.title}</h2>
             <p>
               {product.desc}
             </p>
             <button className="second-section__products-leftside-first_desc-btn">
             <Link to={`${product._id}`}>Read More</Link>
             </button>
           </div>
         </div>
         })}
            {data3 && data3.map((product)=>(
              <div className={product_class}>
                <div className="second-section__products-leftside-first product">
              <img
                src={product.url}
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>{product.title}</h2>
                <p>
                {product.desc}
                </p>
                <button className="second-section__products-leftside-first_desc-btn">
                <Link to={`${product._id}`}>Read More</Link>
                </button>
              </div>

            </div>
              </div>
            ))}
        </div>
        <div className="second-section__products-rightside">
         {data2 && data2.map((product)=>(
           <div className="second-section__products-leftside-first">
           <img
             src={product.url}
             alt="img"
           />
           <div className="second-section__products-leftside-first_desc">
             <h2>{product.title}</h2>
             <p>
               {product.desc}
             </p>
             <button className="second-section__products-leftside-first_desc-btn">
               <Link to={`${product._id}`}>Read More</Link>
             </button>
           </div>

         </div>
         ))}
          {data4 && data4.map((product)=>(
            <div className={product_class}>
            <div className="second-section__products-leftside-first product ">
              <img
                src={product.url}
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>{product.title}</h2>
                <p>{product.desc}</p>
                <button className="second-section__products-leftside-first_desc-btn">
                <Link to={`${product._id}`}>Read More</Link>
                </button>
              </div>

            </div>
          </div>
          ))}
        </div>
      </div>
      <div className={btn}>
      <button className="second-section_end-btn" onClick={() => handleClick ()}>
        Load More
      </button>
      </div>
      <div className={product_class}>
      <div className='second-section_p'>
      <p>No more posts</p>
      </div>
      </div>
    </div>
    </>
  );
};

export default SecondSection;
