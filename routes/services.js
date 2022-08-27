const express = require('express');
const connection = require('../connection')
const router = express.Router();

// product create endpoint
router.post('/create',(req,res,next)=>{
    let services = req.body;
    query = "insert into services (description,title,image) value(?,?,?)";
    connection.query(query,[services.description,services.title,services.image],(err,results)=>{
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
    var query = "select  *from services";
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
    let services = req.body;
    query = "update services set description=?,title=?,image=? where id=?";
    connection.query(query,[services.description,services.title,services.image, id],(err,results)=>{
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
    query = "delete from services where id=?";
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