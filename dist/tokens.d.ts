export declare const tokens: ({
    mnemonic: string;
    symbol: string;
    chainId: number;
    address: string;
    decimals?: undefined;
    currentPrice?: undefined;
    stablecoin?: undefined;
    tokenAddress?: undefined;
} | {
    symbol: string;
    address: string;
    chainId: number;
    mnemonic?: undefined;
    decimals?: undefined;
    currentPrice?: undefined;
    stablecoin?: undefined;
    tokenAddress?: undefined;
} | {
    symbol: string;
    address: string;
    chainId: number;
    decimals: number;
    mnemonic?: undefined;
    currentPrice?: undefined;
    stablecoin?: undefined;
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
    stablecoin?: undefined;
    tokenAddress?: undefined;
})[];
