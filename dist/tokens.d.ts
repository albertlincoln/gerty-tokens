export declare const tokens: ({
    mnemonic: string;
    symbol: string;
    chainId: number;
    address: string;
    currentPrice?: undefined;
    stablecoin?: undefined;
    decimals?: undefined;
} | {
    symbol: string;
    address: string;
    chainId: number;
    mnemonic?: undefined;
    currentPrice?: undefined;
    stablecoin?: undefined;
    decimals?: undefined;
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
    stablecoin?: undefined;
} | {
    mnemonic: string;
    symbol: string;
    decimals: number;
    address: string;
    chainId: number;
    currentPrice?: undefined;
    stablecoin?: undefined;
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
})[];
