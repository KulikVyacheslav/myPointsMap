import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { MapModuleState, RootState } from '@/types/store';
import { ErrorType, Marker } from '@/types/data';
import {
    ADD_COORDINATES,
    DELETE_COORDINATES,
    SET_ADD_MODE,
    SET_COORDINATES,
    SET_ERROR,
    SET_LOADING,
    SET_SELECTED_MARKER_ID,
    TOGGLE_ADD_MODE,
    TOGGLE_LOADING
} from '@/store/modules/mutation-types';
import {
    ASYNC_ADD_COORDINATES,
    ASYNC_DELETE_COORDINATES,
    ASYNC_GET_ALL_COORDINATES,
    ASYNC_GET_COORDINATES_BY_ID,
    ASYNC_SET_SELECTED_MARKER_ID
} from '@/store/modules/action-types';
import API from '@/api';
import router from '@/router';

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
    [SET_COORDINATES]: (state, payload: Array<Marker>) => {
        state.markers = payload;
    },
    [DELETE_COORDINATES]: (state, payload: string) => {
        state.markers = state.markers.filter(({ id }) => id !== payload);
    },
    [SET_SELECTED_MARKER_ID]: (state, payload: string | undefined) => {
        state.selectedMarkerId = payload;
    },
    [SET_ERROR]: (state, payload: ErrorType) => {
        state.error = payload;
    }
};

const actions = <ActionTree<MapModuleState, RootState>>{
    [ASYNC_ADD_COORDINATES]: async ({ commit }, payload: Marker) => {
        try {
            commit(SET_LOADING, true);
            const addedMarker = await API.map.addMarker(payload);
            commit(ADD_COORDINATES, addedMarker);
        } catch (error) {
            const errorMessage = error?.message;
            commit(SET_ERROR, { isError: true, message: errorMessage });
        } finally {
            commit(SET_LOADING, false);
        }
    },
    [ASYNC_GET_ALL_COORDINATES]: async ({ commit }, id?: string) => {
        try {
            commit(SET_LOADING, true);
            const allMarkers = await API.map.getAllMarkers();
            commit(SET_COORDINATES, allMarkers);
            if (id) {
                commit(SET_SELECTED_MARKER_ID, id);
            }
        } catch (error) {
            const errorMessage = error?.message;
            commit(SET_ERROR, { isError: true, message: errorMessage });
        } finally {
            commit(SET_LOADING, false);
        }
    },
    [ASYNC_DELETE_COORDINATES]: async ({ commit }, id: string) => {
        try {
            commit(SET_LOADING, true);
            await API.map.deleteMarkerByID({ id });
            commit(DELETE_COORDINATES, id);
        } catch (error) {
            const errorMessage = error?.message;
            commit(SET_ERROR, { isError: true, message: errorMessage });
        } finally {
            commit(SET_LOADING, false);
        }
    },
    [ASYNC_GET_COORDINATES_BY_ID]: async (_, id: string) =>
        new Promise((resolve, reject) => {
            API.map
                .getMarkerByID({ id })
                .then(marker => resolve(marker))
                .catch(error => reject(error));
        }),
    [ASYNC_SET_SELECTED_MARKER_ID]: ({ commit }, id) => {
        commit(SET_SELECTED_MARKER_ID, id);
        router.replace({ query: { id } }).catch(() => {});
    }
};

const getters = <GetterTree<MapModuleState, RootState>>{
    addButtonText(state) {
        return state.isAddMode ? 'mdi-check' : 'mdi-plus';
    },
    getSelectedMarkerIndex({ markers, selectedMarkerId }) {
        return selectedMarkerId ? markers.findIndex(({ id }) => id === selectedMarkerId) : undefined;
    },
    getSelectedMarkerCoordinates({ markers, selectedMarkerId }) {
        return selectedMarkerId ? markers.find(({ id }) => id === selectedMarkerId)?.coordinates : undefined;
    }
};

const mapModule: Module<MapModuleState, RootState> = {
    namespaced: true,
    state: {
        markers: [],
        isAddMode: false,
        isLoading: false,
        selectedMarkerId: undefined,
        error: {
            isError: false,
            message: undefined
        }
    },
    mutations,
    actions,
    getters
};

export default mapModule;
