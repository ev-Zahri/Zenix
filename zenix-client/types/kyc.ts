
interface KYC {
    id: string;
    userId: string;
    name: string;
    noKTP?: string;
    imgKTP?: string;
    domicile?: string;
    adminNote?: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export default KYC;