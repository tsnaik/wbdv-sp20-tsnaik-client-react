import {API_URL_COURSES, API_URL_MODULES} from "../common/Constants";

export const createModule = async (courseId, module) => {
    const response = await fetch(`${API_URL_COURSES}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    let res = await response.json();
    console.log(res);
    return res;
};

export const findAllModulesForCourse = (courseId) => {
    console.log(courseId);

    return fetch(`${API_URL_COURSES}/${courseId}/modules`)
        .then(response =>
                  response.json());
};

export const findModule = async (moduleId) => {
    const response = await fetch(`${API_URL_MODULES}/${moduleId}/`, {
        method: 'GET'
    });

    return await response.json();
};

export const updateModule = async (moduleId, module) => {
    const response = await fetch(`${API_URL_MODULES}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteModule = async (moduleId) => {
    const response = await fetch(`${API_URL_MODULES}/${moduleId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export default {
    deleteModule,
    createModule,
    findAllModulesForCourse,
    updateModule,
    findModule
};