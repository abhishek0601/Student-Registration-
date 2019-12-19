const express=require('express');
const router=express.Router();
const a=express();

a.set('view engine','pug');
a.get('/',function(req,res){
	res.sendFile('index.html',{root:__dirname})
});

router.get('/student',function(req,res){
	res.send({type:'GET'});
});

router.post('/submit',function(req,res){
	res.send({	Name:req.body.name,
				Email:req.body.email,
				Gender:req.body.gender,
				Course:req.body.course
			});



});

router.put('/student/:id',function(req,res){
	res.send({type:'PUT'});
});

router.delete('/student/:id',function(req,res){
	res.send({type:'DELETE'});
});
 module.exports=router;