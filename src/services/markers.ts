import { backendDelayMock, localStorageName } from '@/constants/global';

const getAllMarkers = () => (JSON.parse(localStorage.getItem(localStorageName) as string) as Array<API.Marker>) || [];

export const addMarkerToLocalStorage = (marker: API.AddMarkerDto): Promise<API.AddMarkerDto> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const allMarkers = getAllMarkers();

            if (!allMarkers.some(({ id }) => id === marker.id)) {
                localStorage.setItem(localStorageName, JSON.stringify([...allMarkers, marker]));
                resolve(marker);
            } else {
                reject(new Error('Такой маркер уже существует'));
            }
        }, backendDelayMock);
    });

export const deleteMarkerFromLocalStorage = ({ id }: API.DeleteMarkerByIdDto): Promise<void> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const allMarkers = getAllMarkers();

            if (allMarkers.some(({ id: localId }) => localId === id)) {
                localStorage.setItem(
                    localStorageName,
                    JSON.stringify(allMarkers.filter(({ id: localId }) => localId !== id))
                );
                resolve();
            } else {
                reject(new Error('Нет такого маркера'));
            }
        }, backendDelayMock);
    });

export const getMarkerFromLocalStorage = ({ id }: API.GetMarkerByIdDto): Promise<API.Marker> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const allMarkers = getAllMarkers();
            const marker = allMarkers.find(({ id: localId }) => localId === id);

            if (marker) {
                resolve(marker);
            } else {
                reject(new Error('Нет такого маркера'));
            }
        }, backendDelayMock);
    });

export const getMarkersFromLocalStorage = (): Promise<Array<API.Marker>> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const allMarkers = getAllMarkers();

            if (Array.isArray(allMarkers)) {
                resolve(allMarkers);
            } else {
                reject(new Error('Непредвиденная ошибка'));
            }
        }, backendDelayMock);
    });
