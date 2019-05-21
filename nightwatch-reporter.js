const HtmlReporter = require('nightwatch-html-reporter');
const path = require('path');
/* Same options as when using the built in nightwatch reporter option */
const reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: path.resolve(__dirname, './testReport/e2e')
});

module.exports = {
    write: function(results, options, done) {
        reporter.fn(results, done);
    }
};
