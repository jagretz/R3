const rxPipeableOperators = require("./rewireConfig/rxPipeableOperators");

/* A note on configuration:
 * When configuring mulitple override files, use the built-in `compose` function.
 * @see https://github.com/timarney/react-app-rewired#2-composeafter-v134
 */

module.exports = function override(config, env) {
    config = rxPipeableOperators(config, env);
    return config;
};
