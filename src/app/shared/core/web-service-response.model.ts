export class WebServiceResponse<T> {
    httpStatus: number;
    object: T;
}

export class Pagination<T> {
    content: T[];
    totalElements: number;
}