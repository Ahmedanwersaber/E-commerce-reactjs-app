
import './App.css'
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import NavBar from './component/NavBar'
import ProductDetails from './component/ProductList/ProductDetails';
import ProductList from './component/ProductList/ProductList'
import Slider from './component/Slider'
import { Routes, Route } from "react-router-dom";

const App =()=> {

  return (
    <>
    <Routes> 
      
      <Route path="/" element={
      <>
      <NavBar/>
       <Slider/>
      <ProductList/>
     
      </>
    }/>
      <Route path='/about' element={<About/>} />
      <Route path="product/:productId" element={<ProductDetails/>} />
      
      
    </Routes>
    <Footer/>
   
     
  
    </>
  )
}

export default App
