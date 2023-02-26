import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './SecondSection.scss';
import axios from "axios";
import { MainContext } from '../../../../context/ContextProvider';

const SecondSection = () => {
  const {value,setValue}=useContext(MainContext)
  //api
  const {data, setData} = useContext(MainContext);
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
    const res = await axios.get("http://localhost:8080/allProductt");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
    <div className="second-section">
      <div className="container second-section__products">
         {data && data
         .map((product,index)=>{
          return <div className="second-section__products-product" key={index}>
           <img
             src={product.url}
             alt="img"
           />
          <div className="second-section__products-product_desc">
             <h2>{product.title}</h2>
             <p>
               {product.desc}
             </p>
             <button className="second-section__products-product_desc-btn">
             <Link to={`${product._id}`}>Read More</Link>
             </button>
           </div>
         </div>
         })}
        
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
