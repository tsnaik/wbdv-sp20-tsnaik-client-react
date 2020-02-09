export const DELETE_MODULE = "DELETE_MODULE";
export const CREATE_MODULE = "CREATE_MODULE";
export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const UPDATE_MODULE_ID = "UPDATE_MODULE_ID";

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
});

export const setAllModules = (modules) => ({
    type: FIND_MODULE_FOR_COURSE,
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

export const updateModuleId = (newId) => ({
    type: UPDATE_MODULE_ID,
    newIndex: newId
});
