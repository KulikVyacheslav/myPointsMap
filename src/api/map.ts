import {
    addMarkerToLocalStorage,
    deleteMarkerFromLocalStorage,
    getMarkerFromLocalStorage,
    getMarkersFromLocalStorage
} from '@/services/markers';

export const getMarkerByID = (data: API.GetMarkerByIdDto): Promise<API.Marker> => getMarkerFromLocalStorage(data);
export const getAllMarkers = (): Promise<Array<API.Marker>> => getMarkersFromLocalStorage();
export const deleteMarkerByID = (data: API.DeleteMarkerByIdDto): Promise<void> => deleteMarkerFromLocalStorage(data);
export const addMarker = (marker: API.AddMarkerDto): Promise<API.AddMarkerDto> => addMarkerToLocalStorage(marker);
