import {CREATE_MODULE, DELETE_MODULE, SET_MODULES_FOR_COURSE, UPDATE_MODULE} from "../actions/ModuleActions";

const initialState = {
    modules: []
};

const ModuleReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            };
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            };
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            };
        case UPDATE_MODULE:
            const index = state.modules.findIndex(module => module._id === action.module._id);
            return {
                modules: [
                    ...state.modules.slice(0, index),
                    {
                        ...state.modules[index],
                    },
                    ...state.modules.slice(index + 1)
                ]
            };
        default:
            return state
    }
};

export default ModuleReducer