const express = require('express');
const router = express.Router();

//test route
router.get('/', (req, res) => {
    res.send("hello");
});

//sign up route
router.post('/signup', (req, res) => {
    const {name, email, password} = req.body;
    if(!email || !password || !name) {
        res.json({error: "please add all the fields"})
    }
    res.status(422).json({message: "successfuly posted"});

    console.log(req.body);
});

module.exports = router