export interface SupplierResponse {
    message: string;
    data: {
        id: string;
        name: string;
        email: string;
        phone: string;
        address: string;
    }[];
}