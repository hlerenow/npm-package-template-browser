console.log(process.env);

const a = {
    a: async function() {
        console.log('I\'m a qwe ');
        await (new Promise((resolve, reject) => {
            resolve();
        }));
    },
    b: function() {
        console.log('I\'m b');
    },
    version: process.env._VERSION_
};

export {
    a
};

export default a;
