import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"


const Update = () =>{
    const [book,setBook]=useState({
        title:"",
        description:"",
        price:null,
        cover:""
    });

    const navigate= useNavigate()

    const location=useLocation()
    const bookId = location.pathname.split("/")[2]
    console.log(location.pathname.split("/")[2])



    const handleUpdate= async(e)=>{
    e.preventDefault()
     try{
    await axios.put(`http://localhost:3000/update/${bookId}`,book)
    navigate("/")

    }catch (err)
    {
         console.error(err)
        }
}


    
    const handleChnage=(e)=>{
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}))

    };

    
  return (
    <div className='form'>
       <h1>Update the Book</h1> 
       <input type='text' placeholder='title' onChange={handleChnage} name='title'/>
       <input type='text' placeholder='descrption'onChange={handleChnage} name='description' />
       <input type="number" placeholder='price'onChange={handleChnage}name='price'/>
       <input type="text" placeholder='cover' onChange={handleChnage} name='cover'/>
      <button className='formButton' onClick={handleUpdate}>Update</button>

    </div>

  )

  }
export default Update