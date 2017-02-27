/**
 * Created by ripzery on 2/24/17.
 */
exports.login = function(req, res){
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.sanitizeBody('email').normalizeEmail();
    const errors = req.validationErrors();
    if(errors){
        res.render('index', {
            title: 'There have been validation errors : ' + JSON.stringify(errors),
            isLoggedIn: false
        });
        return;
    }

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

exports.test = function(req, res){
    req.checkBody('name', "Go home and read the docs!").notEmpty().contains("Euro");
    const errors = req.validationErrors();

    if(errors){
        res.send(errors);
        return;
    }

    res.send(req.body);
};