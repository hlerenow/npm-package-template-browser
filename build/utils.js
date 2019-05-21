const glob = require('glob');
const path = require('path');

module.exports = {
    resolve: function(dir) {
        return path.join(__dirname, '.', dir);
    },
    getEntry: function(globPath) {
        const entries = {};
        glob.sync(globPath).forEach(entry => {
            let tmp = entry.split('/').splice(-4);
            let basename = tmp[tmp.length - 2];
            if (basename === 'src') {
                entries[`index`] = entry;
            } else {
                entries[`${basename}/index`] = entry;
            }
        });
        return entries;
    }
};
