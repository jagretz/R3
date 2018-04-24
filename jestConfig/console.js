/* eslint-env jest */
/**
 * Point the built-in browser `console` instance methods to jest mock functions.
 */
global.console = {
    log: jest.fn(v => v),
    info: jest.fn(v => v),
    warn: jest.fn(v => v),
    error: jest.fn(v => v)
};
