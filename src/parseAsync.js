import parse from './parse.js';

module.exports = param => {
    return new Promise((resolve, reject) => {
        parse(param, (err, data) => {
            if(err !== null) {
                return reject(err);
            }
            resolve(data);
        });
    });
};
