import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const Add = () =>{
    const [book,setBook]=useState({
        title:"",
        description:"",
        price:null,
        cover:""
    });

    const navigate= useNavigate()


    const handleClick= async(e)=>{
       e.preventDefault()
     try{
    await axios.post("http://localhost:3000/add",book)
    navigate("/")

    }catch (err){console(err)}
}


    
    const handleChnage=(e)=>{
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}))

    };
    console.log(book)

    
  return (
    <div className='form'>
       <h1>Add New Book</h1> 
       <input type='text' placeholder='title' onChange={handleChnage} name='title'/>
       <input type='text' placeholder='descrption'onChange={handleChnage} name='description' />
       <input type="number" placeholder='price'onChange={handleChnage}name='price'/>
       <input type="text" placeholder='cover' onChange={handleChnage} name='cover'/>
      <button onClick={handleClick}>Add</button>

    </div>

  )

  }
export default Add