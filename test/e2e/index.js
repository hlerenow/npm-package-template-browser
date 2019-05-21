module.exports = {
    'Demo test Google': function(browser) {
        browser
            .url('https://www.baidu.com/')
            .waitForElementVisible('body', 2 * 1000)
            .pause(1000)
            .end();
    }
};
