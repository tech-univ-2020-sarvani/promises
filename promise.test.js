const promisify = require('./promise.js');

describe('The promise', () => {
    it('should return an object', () => {
        const result = promisify()
        expect(typeof result).toBe('object');
    });
    it('should check whether promise returns FULFILLED!', async () => {
        const result = await promisify();
        expect(result).toBeUndefined();
    });
    // it('should call console.log', () => {
    //     console.log = jest.fn();
    //     return promisify().then(data => {
    //         expect(console.log).toHaveBeenCalled();
    //     })
    // });
    // it('should check whether promise returns FULFILLED!', (done) => {
    //     const result = promisify();
    //     result.then((bleh) => {
    //         expect(bleh).toEqual('FULFILLED!');
    //         done();
    //     });
    //     // expect(result).resolves.toBe('FULFIsdgLED!');
    // });
});