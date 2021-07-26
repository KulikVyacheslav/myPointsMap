declare namespace API {
    interface ID {
        id: string;
    }
    interface Coordinates {
        coordinates: [number, number];
    }
    interface Marker extends ID, Coordinates {}
    type AddMarkerDto = Marker;
    type GetMarkerByIdDto = ID;
    type DeleteMarkerByIdDto = ID;
}
