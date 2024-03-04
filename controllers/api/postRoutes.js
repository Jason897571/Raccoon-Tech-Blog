const router = require('express').Router();
const {User,Post,Comment} = require('../../models');


router.post('/new', async(req,res)=>{
    try{
        const title = req.body.title;
        const content = req.body.content;
    
        await Post.create({
            title: title,
            contents:content,
            user_id:req.session.user_id
    
        })
        res.status(200).json({"message":"post created","title":title,"content":content});
    }
    catch(err){
        res.status(500).json(err);
    }
    

})


router.put('/update',async(req,res)=>{
  
    try{
        const title = req.body.title;
        const content = req.body.content;
    
        await Post.update({
            title: title,
            contents:content,
        },
        {
            where:{post_id:req.body.post_id}
        })
        res.status(200).json({"message":"post udpated","title":title,"content":content});
    }
    catch(err){
        res.status(500).json(err);
    }
    
  
    

})


router.delete('/delete',async(req,res)=>{
    try{
        await Post.destroy({
            where:{
                post_id:req.body.post_id
            }
        })
        res.status(204).json({"message":"post deleted"});
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;