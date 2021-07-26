export type Marker = API.Marker;

export type ErrorType = {
    isError: boolean;
    message?: string;
};

export interface ErrorInterface {
    error: ErrorType;
}
