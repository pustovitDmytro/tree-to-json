const parse = require('./parse.js');

module.exports = param => {
    return new Promise((resolve, reject) => {
        parse(param, (err, data) => {
            if(err !== null) {
                return reject(err);
            }
            return resolve(data);
        });
    });
};
