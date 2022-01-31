const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const updateRoutes = require('./updateRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/update', updateRoutes);

module.exports = router;
