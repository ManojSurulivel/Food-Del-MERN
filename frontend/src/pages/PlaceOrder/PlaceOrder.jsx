import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Placeorder = () => {

  const{getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const navigate = useNavigate();

  const[data,setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    zipcode : "",
    country : "",
    phone : ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value }))

  }

  const placeOrder = async (event)=>{
     event.preventDefault();
     let orderItems = [];
     food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo =item;
        itemInfo["quantity"] = cartItems[ item._id];
        orderItems.push(itemInfo);
      }
     })
     let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
     }
     let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});

     if(response.data.success){
       const {session_url} = response.data;
       window.location.replace(session_url);
     }else{
      alert("Error");
     }
  }


  useEffect(()=>{
    if(!token){
     navigate('/cart')
    }else if(getTotalCartAmount() === 0){
     navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
    <p className='title'>Delivery Information</p>
    <div className="multi-fields">
      <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='firstName'/>
      <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='lastName'/>
    </div>
      <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email'/>
      <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='street'/>
      <div className="multi-fields">
      <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='city'/>
      <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='state'/>
    </div>
    <div className="multi-fields">
      <input name='zip code' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='zip code'/>
      <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='country'/>
    </div>
    <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h1>Cart-totals</h1>
          <div>
          <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
