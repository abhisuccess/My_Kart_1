import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import React, {useState} from 'react'
import Footer from './Component/Footer';
import Product from './Component/Product';
import AddItem from './Component/AddItem';


function App() {
  const intialProductsBasket = [
    {
      itemname: "Iphone 15 pro max",
      itemprice: 145000,
      itemquantity: 0,
    },
    {
      itemname: "Mi 15 pro max",
      itemprice: 45000,
      itemquantity: 0,
    }
  ];
  let [productsBasket, setproductsBasket]=useState(intialProductsBasket)
  let [totalAmount, settotalAmount]=useState(0)
  let [reset, setReset]= useState(0)
  const incrementCount=(index)=>{
    let newProductBasket=[...productsBasket]
    let newtotalAmount=totalAmount
    newProductBasket[index].itemquantity++;
    newtotalAmount+=newProductBasket[index].itemprice
    setproductsBasket(newProductBasket);
    settotalAmount(newtotalAmount)

  }
  const decrementCount=(index)=>{
    let newProductBasket=[...productsBasket]
    let newtotalAmount=totalAmount
    if(newProductBasket[index].itemquantity>0){
      newProductBasket[index].itemquantity--
      newtotalAmount-=newProductBasket[index].itemprice
    }
    setproductsBasket(newProductBasket);
    settotalAmount(newtotalAmount)

  }

  const resetButton=()=>{
    let newProductBasket=[...productsBasket]
    newProductBasket.map((Product)=>{
      Product.itemquantity=0;
    })
    setproductsBasket(newProductBasket)
    settotalAmount(0)
  }
  const handlePay = () => {
    let ssr = prompt("Enter UPI ID for making payment");
    
    if (ssr === null || ssr.trim() === "") {
      alert("Please enter a valid UPI ID to make the payment.");
    } else {
      alert("Payment failure! Looks like payment is not integrated yet. Try again later");
    }
  };

  const addItem = (name, price) => {
    let newProductBasket = [...productsBasket];
    newProductBasket.push({
      itemname: name, // Make sure this matches the property name used in ProductList
      itemprice: price, // Ensure the property name matches
      itemquantity: 0
    });
    setproductsBasket(newProductBasket);
  };
  


  return (
    <>
    <main>
    <Navbar />
    <AddItem addItem={addItem}/>
    <ProductList productsBasket={productsBasket} incrementCount={incrementCount} decrementCount={decrementCount}/>
    <Footer totalAmount={totalAmount} resetButton={resetButton} handlePay={handlePay}/>
    </main>
     
    </>
=======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> origin/main
  );
}

export default App;
