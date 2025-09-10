export type TokenType = {
    readonly address: string;
    readonly symbol: string;
    readonly chainId: number;
    readonly decimals?: number;
    readonly stablecoin?: boolean;
    currentPrice?: number;
    price?: Record<string, any>;
};
export declare const getTokenBySymbol: (symbol: string) => Partial<TokenType> | undefined;
export declare function Token(props: Partial<TokenType>): {
    decimals: number;
    stablecoin: boolean;
} | {
    mnemonic: string;
    symbol: string;
    chainId: number;
    address: string;
    decimals: number;
    currentPrice?: undefined;
    stablecoin: boolean;
    tokenAddress?: undefined;
} | {
    symbol: string;
    address: string;
    chainId: number;
    mnemonic?: undefined;
    decimals: number;
    currentPrice?: undefined;
    stablecoin: boolean;
    tokenAddress?: undefined;
} | {
    symbol: string;
    address: string;
    chainId: number;
    decimals: number;
    mnemonic?: undefined;
    currentPrice?: undefined;
    stablecoin: boolean;
    tokenAddress?: undefined;
} | {
    symbol: string;
    chainId: number;
    currentPrice: number;
    stablecoin: boolean;
    address: string;
    decimals: number;
    mnemonic?: undefined;
    tokenAddress?: undefined;
} | {
    mnemonic: string;
    symbol: string;
    chainId: number;
    currentPrice: number;
    stablecoin: boolean;
    address: string;
    decimals: number;
    tokenAddress?: undefined;
} | {
    decimals: number;
    stablecoin: boolean;
    address: string;
    symbol: string;
    mnemonic: string;
    tokenAddress: string;
    chainId: number;
    currentPrice?: undefined;
} | {
    symbol: string;
    mnemonic: string;
    address: string;
    decimals: number;
    chainId: number;
    currentPrice?: undefined;
    stablecoin: boolean;
    tokenAddress?: undefined;
};
