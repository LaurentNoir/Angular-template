export interface ResponseModel<T>{
    status: boolean;
    message: string;
    result: T
}