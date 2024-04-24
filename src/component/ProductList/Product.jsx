import React from 'react'
import "./ProductList.css";
import { Link } from 'react-router-dom';


const Product = (props) => {
const {product ,showbutton}=props;
  return (
    <>
    <div className="card h-100 w-100 col-md-3" key={product.id}>
          <img src={product.image} className="card-img-top card-img  rounded mx-auto d-block m-2 p-4" alt={product.title} height="200px"/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
             <div className="p-3 lead fw-bold">
                 <p>price :{product.price} </p>  
                    </div>
                    {showbutton && ( <Link to={`/product/${product.id}`} className="btn btn-outline-dark  btn-md center-block">
                     More Details</Link>
                    )
}
            
          </div>
        </div>
    </>
  )
}

export default Product
