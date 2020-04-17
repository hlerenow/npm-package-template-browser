var glob = require('glob');
var path = require('path');
module.exports = {
    resolve: function (dir) {
        return path.join(__dirname, '.', dir);
    },
    getEntry: function (globPath) {
        var entries = {};
        glob.sync(globPath).forEach(function (entry) {
            var tmp = entry.split('/').splice(-4);
            var basename = tmp[tmp.length - 2];
            if (basename === 'src') {
                entries["index"] = entry;
            }
            else {
                entries[basename + "/index"] = entry;
            }
        });
        return entries;
    }
};
