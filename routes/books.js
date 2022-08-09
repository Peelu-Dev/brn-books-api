const express = require('express');
const connection = require('../connection')
const router = express.Router();

// product create endpoint
router.post('/create',(req,res,next)=>{
    let book = req.body;
    query = "insert into book (name,description,title,url) value(?,?,?,?)";
    connection.query(query,[book.name,book.description,book.title,book.url],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Book added successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});


// product get endpoint
router.get('/read',(req,res,next)=>{
    // let product = req.body;
    var query = "select  *from book";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
});


// product update endpoint
router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let book = req.body;
    query = "update book set name=?,description=?,title=?,url=? where id=?";
    connection.query(query,[book.name,book.description,book.title,book.url, id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Book id does not found"})
            }
            return res.status(200).json({message:"Book updated successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});


// product delete endpoint
router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    // let product = req.body;
    query = "delete from book where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Book id does not found"})
            }
            return res.status(200).json({message:"Book deleted successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});


module.exports = router;