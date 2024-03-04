const router = require('express').Router();
const {User,Post,Comment} = require('../../models');


router.post('/new', async(req,res)=>{
    const title = req.body.title;
    const content = req.body.content;

    await Post.create({
        title: title,
        contents:content,
        creator_id:req.session.user_id

    })
    res.status(200).json({"message":"post created","title":title,"content":content});

})

module.exports = router;