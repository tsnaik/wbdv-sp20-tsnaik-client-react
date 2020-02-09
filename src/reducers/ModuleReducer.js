import {
    CREATE_MODULE,
    DELETE_MODULE,
    SET_MODULES_FOR_COURSE,
    UPDATE_MODULE
} from "../actions/ModuleActions";
import {LOAD_COURSE} from "../actions/CourseActions";

const initialState = {
    modules: [],
    course: null
};

const ModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COURSE:
            return {
                modules: [...state.modules],
                course: action.course
            };
        case SET_MODULES_FOR_COURSE:
            return {
                modules: action.modules,
                course: state.course
            };
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ],
                course: state.course
            };
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId),
                course: state.course
            };
        case UPDATE_MODULE:
            const index = state.modules.findIndex(module => module._id === action.module._id);
            return {
                modules: [
                    ...state.modules.slice(0, index),
                    action.module,
                    ...state.modules.slice(index + 1)
                ],
                course: state.course
            };
        default:
            return state
    }
};

export default ModuleReducer