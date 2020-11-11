const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
    router.use(function(_, res) {
        res.sendFile(path.join(_dirname, '../client/build/index.html'));
    })
}

module.exports = router;