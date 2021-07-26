const toFixedCoordinates = 3;
export const getCoordinatesTitle = ([latitude, longitude]: [number, number]): string =>
    `${latitude.toFixed(toFixedCoordinates)} ${longitude.toFixed(toFixedCoordinates)}`;

export default getCoordinatesTitle;
