const express= require('express');
const routes= express.Router({mergeParams: true});

routes.get('/', (req,res)=>{
    res.status(200).json({msg:'Probando ruta get'});
})

routes.post('/post', (req,res)=>{
    const word= req.body.word;
    res.json({palabra: word});
})

module.exports={routes};