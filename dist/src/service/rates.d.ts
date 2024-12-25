import { InsertRates, SelectRates } from '../schema/rates';
export declare function Rate(data: InsertRates): Promise<{
    response: {
        id_user: string;
        id_book: string;
        rate: number;
    }[];
    msg: string;
}>;
export declare function getRates(id: SelectRates['id_book']): Promise<{
    value: string;
}[]>;
