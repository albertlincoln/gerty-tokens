export declare const tokens: ({
    mnemonic: string;
    symbol: string;
    chainId: number;
    address: string;
    decimals?: undefined;
    currentPrice?: undefined;
    stablecoin?: undefined;
} | {
    symbol: string;
    address: string;
    chainId: number;
    mnemonic?: undefined;
    decimals?: undefined;
    currentPrice?: undefined;
    stablecoin?: undefined;
} | {
    symbol: string;
    address: string;
    chainId: number;
    decimals: number;
    mnemonic?: undefined;
    currentPrice?: undefined;
    stablecoin?: undefined;
} | {
    symbol: string;
    chainId: number;
    currentPrice: number;
    stablecoin: boolean;
    address: string;
    decimals: number;
    mnemonic?: undefined;
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
} | {
    symbol: string;
    mnemonic: string;
    address: string;
    decimals: number;
    chainId: number;
    currentPrice?: undefined;
    stablecoin?: undefined;
})[];
