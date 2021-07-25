import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { MapModuleState, RootState } from '@/types/store';
import { Marker } from '@/types/data';

const mutations = <MutationTree<MapModuleState>>{
    toggleAddMode(state) {
        state.isAddMode = !state.isAddMode;
    },
    setAddMode(state, payload: boolean) {
        state.isAddMode = payload;
    },
    toggleLoading(state) {
        state.isLoading = !state.isLoading;
    },
    setLoading(state, payload: boolean) {
        state.isLoading = payload;
    },
    addCoordinate(state, payload: Marker) {
        state.markers = [...state.markers, payload];
    },
    deleteCoordinate(state, payload: string) {
        state.markers = state.markers.filter(({ id }) => id !== payload);
    },
    setSelectedMarkerId(state, payload: string | undefined) {
        state.selectedMarkerId = payload;
    }
};

const actions = <ActionTree<MapModuleState, RootState>>{};

const getters = <GetterTree<MapModuleState, RootState>>{
    addButtonText(state) {
        return state.isAddMode ? 'Отключить' : 'Добавить метку';
    },
    getSelectedMarkerIndex({ markers, selectedMarkerId }) {
        return selectedMarkerId ? markers.findIndex(({ id }) => id === selectedMarkerId) : undefined;
    },
    getSelectedMarkerCoordinates({ markers, selectedMarkerId }) {
        console.log(
            'here',
            selectedMarkerId,
            markers.find(({ id }) => id === selectedMarkerId)
        );
        return selectedMarkerId ? markers.find(({ id }) => id === selectedMarkerId)?.coordinates : undefined;
    }
};

const mapModule: Module<MapModuleState, RootState> = {
    namespaced: true,
    state: {
        markers: [{ coordinates: [56.827064, 60.59442], id: 'asasd' }],
        isAddMode: false,
        isLoading: false,
        selectedMarkerId: undefined
    },
    mutations,
    actions,
    getters
};

export default mapModule;
