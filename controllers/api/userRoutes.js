const router = require('express').Router();
const {User} = require('../../models');
const bcrypt = require('bcrypt');


router.post('/login', async (req, res) => {

    try{
        const userData = await User.findOne({
            where:{user_name: req.body.username}
        })

    
        if(!userData){
            res.status(400).json({message: 'Incorrect username or password, please try again'});
            return;
        }
        
        console.log(req.body.password)

        const validPassword = await userData.checkPassword(req.body.password);

        console.log(validPassword);
        if(!validPassword){
            res.status(400).json({message: 'Incorrect username or password, please try again'});
        
            return;
        };
        
            
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
    
            res.json({ user: userData, message: 'You are now logged in!' });
        })
    }
    catch(err){
        res.status(500).json({"message":err});
    }
   

})

router.post("/signup",async (req,res)=>{
    const password = req.body.password;
    try{
            await User.create({
                user_name: req.body.username,
                password:password
            })
            res.status(200).json({"message":"user created","user_name":req.body.username,"password":req.body.password});
        }
        catch(err){
            res.status(500).json({"message":err});
        }
    
})


module.exports = router;