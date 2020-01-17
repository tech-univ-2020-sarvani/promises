const timeout = require('./warm_up');

describe('The function timeout', () => {
    it('should not return anything', () => {
        const result = timeout();
        expect(result).toBeUndefined();
    });
    // it('should call console.log', () => {
    //     console.log = jest.fn();
    //     timeout();
    //     expect(console.log).toHaveBeenCalled();
    // });
});
