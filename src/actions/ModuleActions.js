export const DELETE_MODULE = "DELETE_MODULE";
export const CREATE_MODULE = "CREATE_MODULE";
export const SET_MODULES_FOR_COURSE = "SET_MODULES_FOR_COURSE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const UPDATE_MODULE_INDEX = "UPDATE_MODULE_INDEX";

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
});

export const setAllModules = (modules) => ({
    type: SET_MODULES_FOR_COURSE,
    modules: modules
});

export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
});

export const updateModule = (module) => ({
    type: UPDATE_MODULE,
    module: module
});

export const updateModuleIndex = (newIndex) => ({
    type: UPDATE_MODULE_INDEX,
    newIndex: newIndex
});
