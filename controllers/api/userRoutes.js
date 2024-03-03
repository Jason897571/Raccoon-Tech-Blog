const router = require('express').Router();
const {User} = require('../../models');


router.post('/login', async (req, res) => {

    console.log(req.body);

    try{
        const userData = await User.findOne({
            where:{user_name: req.body.username}
        })

        console.log(userData);
    
        if(!userData){
            res.status(400).json({message: 'Incorrect username or password, please try again'});
            return;
        }
    
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


module.exports = router;