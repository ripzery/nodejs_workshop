/**
 * Created by ripzery on 2/24/17.
 */
module.exports = function(app){
  const user = require('../controllers/user.controller');
  app.post('/login', user.login);
  app.post('/logout', user.logout);
  app.post('/test', user.test);
};
