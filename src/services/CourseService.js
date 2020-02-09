import {API_URL_COURSES} from "../common/Constants";

export const findCourseById = async (id) =>{
    const response = await fetch(`${API_URL_COURSES}/${id}/`, {
        method: 'GET'
    });

    return await response.json();
};

export const updateCourse = async (courseId, course) => {
    const response = await fetch(`${API_URL_COURSES}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteCourse = async (courseId) => {
    const response = await fetch(`${API_URL_COURSES}/${courseId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const createCourse = async (course) => {
    const response = await fetch(API_URL_COURSES, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findAllCourses = () => {
    return fetch(API_URL_COURSES)
        .then(response => response.json())
};

export default {
    findCourseById,
    updateCourse,
    findAllCourses,
    createCourse,
    deleteCourse
}