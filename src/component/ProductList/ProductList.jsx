import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductList.css";
const ProductList = () => {
  const api_url= "https://fakestoreapi.com/products";
  const [products, setproduct] = useState([])

  useEffect(() => {
 fetch(api_url)
 .then((response)=>response.json()
 .then((data)=>setproduct(data)));
 
 
  }, [])
  return (
    <>
    
      <h2 className="text-center p-3 our-product"> Our Products</h2>
     <div className="container">
       <div className="row">
        {products.map((product)=>{
          return( 
        <div className=" col-md-3 p-3" key={product.id}>
       <Product product={product} height={350} showbutton={true}/>
        </div>
        )
       
        })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
