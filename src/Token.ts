import { tokens } from './tokens';

interface Token {
    readonly address: string
    readonly symbol: string
    readonly chainId: number
    readonly decimals?: number
    readonly stablecoin?: boolean
}

export const getTokenBySymbol = function(symbol: string): Partial<Token>|undefined {
    const _tokensFound = tokens.filter((t: Token) => {
        return t.symbol == symbol
    })

    if (_tokensFound.length == 1) {
        return Token(_tokensFound[0])
    }
}

export function Token(props: Partial<Token>) {
    const _defaults = { decimals: 18, stablecoin: false };
    const _token = tokens.filter((t: Token) => {
                return t.chainId == props.chainId
            }).find((t: Token) => {
                return t.symbol == props.symbol || t.address == props.address
            })

    return {
        ..._defaults,
        ..._token,
    };
}

