/**
 * Created by ripzery on 2/24/17.
 */
exports.login = function(req, res){
    res.render('index', {
        title: 'Logged in as ' + req.body.email,
        isLoggedIn: true
    })
};

exports.logout = function(req, res){
    res.render('index', {
        title: 'See you again later',
        isLoggedIn: false
    })
};