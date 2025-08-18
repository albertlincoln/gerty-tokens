
'use strict';

const { Token, getTokenBySymbol, TokenType } = require('./dist/Token');

const tokens = require('./dist/tokens');

module.exports = {
    Token,
    TokenType,
    getTokenBySymbol,
    tokens
}