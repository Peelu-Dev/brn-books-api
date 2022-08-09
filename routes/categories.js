const express = require('express');
const connection = require('../connection')
const router = express.Router();

// product create endpoint
router.post('/create',(req,res,next)=>{
    let categories = req.body;
    query = "insert into categories (name) value(?)";
    connection.query(query,[categories.name],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Category added successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});

// product get endpoint
router.get('/read',(req,res,next)=>{
    // let product = req.body;
    var query = "select  *from categories";
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
    let categories = req.body;
    query = "update categories set name=? where id=?";
    connection.query(query,[categories.name, id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Category id does not found"})
            }
            return res.status(200).json({message:"Category updated successfully"});
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
    query = "delete from categories where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Category id does not found"})
            }
            return res.status(200).json({message:"Category deleted successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});


module.exports = router;