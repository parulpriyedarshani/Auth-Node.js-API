const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.send(req.user);
    // or send-
    // res.json({
    //     posts: {
    //         title: 'My first post',
    //         description: 'How to make italian omlette???'
    //     }
    // });
});

module.exports = router;