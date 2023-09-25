  const  express =require("express") ;
 const  mysql =require('mysql') ;
 const  cors =require("cors") 





  const app= express()
  app.use(cors())

const db= mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "ranya",
    database: "book",
    
})
 
app.use(express.json())





  db.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("database connected ");
    }
  });



app.get("/",(req,res)=>{
   res.json("hello backend")
})
app.get("/getAll",(req,res)=>{
    const q="SELECT * FROM listbook"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/add",(req,res)=>{
    const q= "INSERT INTO listbook (`title`,`description`,`price`,`cover`) VALUES (?)"
    const values=[
      req.body.title,
      req.body.description,  
    req.body.price,
    req.body.cover
  ]
    db.query(q,[values],(err,data)=>{
      if(err) return res.json (err)
      return res.json(data)


    })
})

app.delete("/books/:id",(req,res)=>{
  const bookId=req.params.id
  const q="DELETE FROM listbook WHERE id = ?"
  db.query(q,[bookId],(err,data)=>{
    if(err) return res.json(err)
    return res.json("delete has susscessfutly")
  })
})


app.put("/update/:id",(req,res)=>{
  const booId=req.params.id
  const q="UPDATE listbook SET `title`=?, `description`=?, `price`=?, `cover`=? WHERE id = ? "
  const values=[
    req.body.title,
      req.body.description,  
    req.body.price,
    req.body.cover

  ]
  db.query(q,[...values,booId] ,(err,data)=>{
    if(err) return res.send(err)
    return res.json(res.data)
  })
    
})
 
  app.listen(3000, () => {
    console.log("server is running on port" + " " + 3000);
  });
  
  
