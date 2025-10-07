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
    currentPrice?: undefined;
    stablecoin: boolean;
    decimals: number;
} | {
    symbol: string;
    address: string;
    chainId: number;
    mnemonic?: undefined;
    currentPrice?: undefined;
    stablecoin: boolean;
    decimals: number;
} | {
    symbol: string;
    currentPrice: number;
    stablecoin: boolean;
    address: string;
    decimals: number;
    chainId: number;
    mnemonic?: undefined;
} | {
    symbol: string;
    address: string;
    chainId: number;
    decimals: number;
    mnemonic?: undefined;
    currentPrice?: undefined;
    stablecoin: boolean;
} | {
    mnemonic: string;
    symbol: string;
    decimals: number;
    address: string;
    chainId: number;
    currentPrice?: undefined;
    stablecoin: boolean;
} | {
    mnemonic: string;
    symbol: string;
    chainId: number;
    currentPrice: number;
    stablecoin: boolean;
    address: string;
    decimals: number;
} | {
    decimals: number;
    stablecoin: boolean;
    address: string;
    symbol: string;
    chainId: number;
    mnemonic?: undefined;
    currentPrice?: undefined;
};
