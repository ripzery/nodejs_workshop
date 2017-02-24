/**
 * Created by ripzery on 2/24/17.
 */
exports.render = function (req, res) {
    res.send('Hello World');
};

exports.ascend = function (req, res) {
    let title = "Ascend";
    let quote = "Kaizen";
    res.send({
        title,
        quote
    });
};