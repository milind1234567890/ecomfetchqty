import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addCart } from '../redux/slice';

export default function Products() {
    const [data, setData] = useState([]);



const dispatch = useDispatch()

    const getData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            setData(result);
           console.log(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
const sendData=(data)=>{
  alert( 
  (data.title+" please click ok to add in  your cart "))
 dispatch(addCart(data))
console.log(data);

}
    useEffect(() => {
        getData();
    }, []);

    return (

        <div className='d-flex flex-wrap justify-content-center'>{
  data.map((value, index) => {
    return (
      <div key={index} className="card m-2" style={{ width: '15rem', marginBottom: '10px' }}>
       <img style={{height:"250px"}}  src={value.image} className="card-img-top" alt={value.title} />
        <div className="card-body">
          <h5 className="card-title">{value.title}</h5>
          <p className="card-text">${value.price}</p>
          <a  onClick={()=>{sendData(value)}} className=" btn btn-warning">add Cart</a>
        </div>
      </div>
    );
  })}
</div>
    )}
