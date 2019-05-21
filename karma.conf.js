const webpack = require('./build/webpack.test');
const path = require('path');

module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            { pattern: 'test/unit/**/*.test.js' }
        ],
        webpack: webpack,
        preprocessors: {
            'test/unit/**/*.test.js': ['webpack']
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
        reporters: ['html', 'coverage-istanbul'],
        // any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
        coverageIstanbulReporter: {
            // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
            reports: ['html', 'lcovonly', 'text-summary'],
            // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
            dir: path.join(__dirname, './testReport/unit/coverage'),

            // Combines coverage information from multiple browsers into one report rather than outputting a report
            // for each browser.
            combineBrowserReports: true,

            // if using webpack and pre-loaders, work around webpack breaking the source path
            fixWebpackSourcePaths: true,

            // Omit files with no statements, no functions and no branches from the report
            skipFilesWithNoCoverage: true

        },
        htmlReporter: {
            outputDir: './testReport/unit', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'index', // report summary filename; browser info by default
            // experimental
            preserveDescribeNesting: false, // folded suites stay folded
            foldAll: false // reports start folded (only with preserveDescribeNesting)
        }
    });
};
