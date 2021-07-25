import { Marker } from '@/types/data';

export interface MapModuleState {
    isAddMode: boolean;
    markers: Marker[];
    isLoading: boolean;
    selectedMarkerId?: string;
}

export type RootState = Record<string, never>;
