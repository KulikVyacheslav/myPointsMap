export type Marker = API.Marker;
export type Coordinates = API.Coordinates;

export type ErrorType = {
    isError: boolean;
    message?: string;
};

export interface ErrorInterface {
    error: ErrorType;
}

export interface MapQueryParameters {
    id?: string;
}
