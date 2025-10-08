"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.getTokenBySymbol = void 0;
const tokens_1 = require("./tokens");
const getTokenBySymbol = function (symbol) {
    const _tokensFound = tokens_1.tokens.filter((t) => {
        return t.symbol == symbol;
    });
    if (_tokensFound.length == 1) {
        return Token(_tokensFound[0]);
    }
};
exports.getTokenBySymbol = getTokenBySymbol;
function Token(props) {
    const _defaults = { decimals: 18, stablecoin: false };
    const _token = tokens_1.tokens.filter((t) => {
        return t.chainId == props.chainId;
    }).find((t) => {
        return t.symbol == props.symbol || t.address == props.address;
    });
    return Object.assign(Object.assign({}, _defaults), _token);
}
exports.Token = Token;
