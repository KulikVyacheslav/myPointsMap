import { ErrorInterface, Marker } from '@/types/data';

export interface MapModuleState extends ErrorInterface {
    isAddMode: boolean;
    markers: Marker[];
    isLoading: boolean;
    selectedMarkerId?: string;
}

export type RootState = Record<string, never>;
