const Promise = require('bluebird');

module.exports = function(word, nodehun) {
    return new Promise(function(resolve, reject) {
        nodehun.suggest(word)
            .then(
                suggestions => {
                    if (suggestions === null) {
                        suggestions = []
                    }
                    resolve({
                        word: word,
                        suggestions: suggestions,
                    })
                },
                reason => {
                    reject(reason);
                }
            );
    })
};
