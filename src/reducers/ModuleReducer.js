import {CREATE_MODULE, DELETE_MODULE, SET_MODULES_FOR_COURSE} from "../actions/ModuleActions";

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
        default:
            return state
    }
};

export default ModuleReducer