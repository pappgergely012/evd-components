interface IDataFormat {
    type: "uppercaseFirst" | "name" | "priceFormat";
    data: any;
    quantity: number;
}
/** Put the insert function to the String instance */
declare global {
    interface String {
        insert(index: number, char: string): string;
    }
}
/** Checks if the current data is a valid data */
export declare const isExist: (data: any) => boolean;
/** Fromatting string  */
export declare const dataFormat: (type: IDataFormat['type'], data: IDataFormat['data'], quantity?: IDataFormat['quantity']) => any;
export declare const removeAccents: (data: string) => string;
export {};
