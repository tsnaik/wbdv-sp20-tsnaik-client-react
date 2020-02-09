import {
    CREATE_MODULE,
    DELETE_MODULE,
    FIND_MODULE_FOR_COURSE,
    UPDATE_MODULE, UPDATE_MODULE_ID
} from "../actions/ModuleActions";
import {LOAD_COURSE} from "../actions/CourseActions";

const initialState = {
    modules: [],
    course: null,
    currentModuleId: null
};

const ModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COURSE:
            console.log('loading course', action.course);
            return {
                modules: [...state.modules],
                course: action.course,
                currentModuleId: state.currentModuleId
            };
        case FIND_MODULE_FOR_COURSE:
            return {
                modules: action.modules,
                course: state.course,
                currentModuleId: state.currentModuleId
            };
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ],
                course: state.course,
                currentModuleId: state.currentModuleId
            };
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId),
                course: state.course,
                currentModuleId: state.currentModuleId
            };
        case UPDATE_MODULE:
            const index = state.modules.findIndex(module => module._id === action.module._id);
            return {
                modules: [
                    ...state.modules.slice(0, index),
                    action.module,
                    ...state.modules.slice(index + 1)
                ],
                course: state.course,
                currentModuleId: state.currentModuleId
            };
        case UPDATE_MODULE_ID:
            return {
                modules: state.modules,
                course: state.course,
                currentModuleId: action.newIndex
            };
        default:
            return state
    }
};

export default ModuleReducer