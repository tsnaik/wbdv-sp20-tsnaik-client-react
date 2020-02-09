import {API_URL_MODULES, API_URL_LESSONS} from "../common/Constants";

export const createLesson = async (moduleId, lesson) => {
    const response = await fetch(`${API_URL_MODULES}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    });
    let res = await response.json();
    console.log(res);
    return res;
};

export const findAllLessonsForModule = (moduleId) => {
    return fetch(`${API_URL_MODULES}/${moduleId}/lessons`)
        .then(response => response.json());
};

export const findLesson = async (lessonId) => {
    const response = await fetch(`${API_URL_LESSONS}/${lessonId}/`, {
        method: 'GET'
    });

    return await response.json();
};

export const updateLesson = async (lessonId, lesson) => {
    const response = await fetch(`${API_URL_LESSONS}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteLesson = async (lessonId) => {
    const response = await fetch(`${API_URL_LESSONS}/${lessonId}`, {
        method: 'DELETE'
    });
    return await response.json()
};
