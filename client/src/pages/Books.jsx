import React from 'react'
import {useEffect,useState} from "react"
import axios from "axios";
import { Link } from 'react-router-dom';

function Books() {
    const [books,setBook]=useState([])
    useEffect(()=>{
        const fetchAllBooks= async()=>{
            try{
                const res= await axios.get("http://localhost:3000/getAll")
               
                setBook(res.data)
            }catch (err){
                console.log(err)

            }

        }
        fetchAllBooks()
    },[])

    const handleDelete = async(id)=>{
        try{
            await axios.delete(`http://localhost:3000/books/${id}`)
            window.location.reload()
        }
        catch (err){
            console.error(err)

        }


    }
  return (
    <div>
        <h1>MY Books</h1>
       <div className='books'>
        {books.map((book)=>(
            <div className='book' key={book.id}>
                 {book.cover && <img src={book.cover} alt=''/>}
                
                 <h2>{book.title}</h2>
                 <p>{book.description}</p>
                 <span>{book.price}</span>
                 <p>{book.cover}</p>
                <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
                <button className="update" ><Link to={`/update/${book.id}`}>Update</Link></button>

            </div>

        ))}
        </div> 
        <button ><Link to="/add"> Add Book</Link></button>

    </div>
  )
}

export default Books