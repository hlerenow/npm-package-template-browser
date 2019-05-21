const a = {
    a: async function() {
        console.log('I\'m a');
        await (new Promise((resolve, reject) => {
            resolve();
        }));
    },
    b: function() {
        console.log('I\'m b');
        return 1;
    },
    version: process.env._VERSION_
};

export {
    a
};

export default a;
