import { SUPPORTED_MARKETS } from '@repo/constants/market';

export const checkIfMarketIsSupported = (market: string) => {
    return SUPPORTED_MARKETS.includes(market as any)
}