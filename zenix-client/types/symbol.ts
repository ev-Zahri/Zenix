interface Symbol {
    code: string;
    baseCurrency: string;
    quoteCurrency: string;
    digits: number;
    contractSize: number;
    spread: number;
    isActive: boolean;
    image?: string;
    category: "FOREX" | "CRYPTO" | "COMMODITY";
    createdAt: string;
    deletedAt: string;
}

export default Symbol;
