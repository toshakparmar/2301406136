import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Card from './Card';

function Foreground() {

    const ref = useRef(null);

    const [authToken, setAuthToken] = useState('');

    const [product, setProducts] = useState([]);
    const [numProduct, setNumProduct] = useState(10);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [productCategory, setProductCategory] = useState("Laptop");

    const authData = {

        "companyName": "CodeSmachers",
        "clientID": "0b130ad9-0302-496c-86a6-3aefac49d071",
        "clientSecret": "yjIrNEiKCmvniHID",
        "ownerName": "Toshak Parmar",
        "ownerEmail": "toshakparmar2000@gmail.com",
        "rollNo": "2301406136"

    }

    const auth = async (req, res) => {
        try {
          const response = await axios.post('http://20.244.56.144/test/auth', authData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          res.json(response.data);
          console.log(response.data);
          setAuthToken(response.data.token);
        } catch (error) {
          console.log(error);
        }
    }

    const fetchData = async (req, res) => {
        try {
          const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${productCategory}/products?top=${numProduct}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers: {
            //   'Authorization': 'Bearer'+ authToken // Replace with your actual token
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMDM4ODczLCJpYXQiOjE3MjEwMzg1NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBiMTMwYWQ5LTAzMDItNDk2Yy04NmE2LTNhZWZhYzQ5ZDA3MSIsInN1YiI6InRvc2hha3Bhcm1hcjIwMDBAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQ29kZVNtYWNoZXJzIiwiY2xpZW50SUQiOiIwYjEzMGFkOS0wMzAyLTQ5NmMtODZhNi0zYWVmYWM0OWQwNzEiLCJjbGllbnRTZWNyZXQiOiJ5aklyTkVpS0Ntdm5pSElEIiwib3duZXJOYW1lIjoiVG9zaGFrIFBhcm1hciIsIm93bmVyRW1haWwiOiJ0b3NoYWtwYXJtYXIyMDAwQGdtYWlsLmNvbSIsInJvbGxObyI6IjIzMDE0MDYxMzYifQ.bW4A70HmpYLX-oDsu_s04C5DydQ6nu-P6o56z-chYwI'
            }
          });
          setProducts(response.data);
          console.log(response.data) 
        }catch(error){
            console.log(error);
        }   
    }

    useEffect(() => { 
        // auth();
        fetchData();
    },[productCategory, numProduct, minPrice, maxPrice]);

  return (
    <>
    <div className='absolute w-full h-full z-[3] bg-zinc-900/90'>
        <div className='z-[4] w-full h-[80px] flex fixed justify-between items-between'>
          <div className='p-5 items-start justify-start text-lg font-semibold brand-text-color'>@CodeSmachers</div>
          <div className='p-5 items-start justify-start text-lg font-semibold brand-text-color gap-1'>
            <span className='brand-text-color text-xl text-center p-1 m-1'>Filters : </span>
            <input type="number" className='bg-zinc-700 border-2 rounded-xl p-1 m-1 border-zinc-700' 
            placeholder='Num of Products'
            value={numProduct}
            onChange={(e) => {setNumProduct(e.target.value)}}/>
            <input type="number" className='bg-zinc-700 border-2 rounded-xl p-1 m-1 border-zinc-700'placeholder='Enter Min Price'
            value={minPrice}
            onChange={(e) => {setMinPrice(e.target.value)}}/>
            <input type="number" className='bg-zinc-700 border-2 rounded-xl p-1 m-1 border-zinc-700' placeholder='Enter Max Price'
            value={maxPrice}
            onChange={(e) => {setMaxPrice(e.target.value)}}/>
          </div>
          <button type='button' className='z-[4] w-[150px] h-[40px] m-3 bg-zinc-900 text-white rounded shadow-lg brand-text-color border-solid border-2 brand-border-color'
          onClick={() => {fetchData()}}
          >Get Prodects +</button>
        </div>
      
      <div className='my-20'>
      <div ref={ref} className='top-0 left-0 z-[3] w-full h-screen px-6 py-1 flex flex-wrap gap-4'>
            {product.map((items) => (
                <Card data={items} refer={ref} />
            ))} 
        </div>
      </div>
    </div>   
  </>
  )
}
export default Foreground;