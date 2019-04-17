export class MyResponse<T> {
    httpStatus: number;
    object: T;
}

export class Pagination<T> {
    content: T[];
    totalElements: number;
}