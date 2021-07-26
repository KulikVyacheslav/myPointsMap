import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { MapModuleState, RootState } from '@/types/store';
import { Marker } from '@/types/data';
import {
    ADD_COORDINATES,
    DELETE_COORDINATES,
    SET_ADD_MODE,
    SET_LOADING,
    SET_SELECTED_MARKER_ID,
    TOGGLE_ADD_MODE,
    TOGGLE_LOADING
} from '@/store/modules/mutation-types';

const mutations = <MutationTree<MapModuleState>>{
    [TOGGLE_ADD_MODE]: state => {
        state.isAddMode = !state.isAddMode;
    },
    [SET_ADD_MODE]: (state, payload: boolean) => {
        state.isAddMode = payload;
    },
    [TOGGLE_LOADING]: state => {
        state.isLoading = !state.isLoading;
    },
    [SET_LOADING]: (state, payload: boolean) => {
        state.isLoading = payload;
    },
    [ADD_COORDINATES]: (state, payload: Marker) => {
        state.markers = [...state.markers, payload];
    },
    [DELETE_COORDINATES]: (state, payload: string) => {
        state.markers = state.markers.filter(({ id }) => id !== payload);
    },
    [SET_SELECTED_MARKER_ID]: (state, payload: string | undefined) => {
        state.selectedMarkerId = payload;
    }
};

const actions = <ActionTree<MapModuleState, RootState>>{};

const getters = <GetterTree<MapModuleState, RootState>>{
    addButtonText(state) {
        return state.isAddMode ? 'mdi-check' : 'mdi-plus';
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
        markers: [],
        isAddMode: false,
        isLoading: false,
        selectedMarkerId: undefined
    },
    mutations,
    actions,
    getters
};

export default mapModule;
