const itemtBuilder = require('../controllers/controllerProduct');

module.exports = app => {
  app
    .route('/pim')
    .get(itemtBuilder.list_all)
    .post(itemtBuilder.create_one);

  app
    .route('/pim/:itemID')
    .get(itemtBuilder.read_one)
    .put(itemtBuilder.update_one)
    .delete(itemtBuilder.delete_one);
};