import {API_URL} from "../common/constants";

export const findCourseById = async (id) => fetch(`${API_URL}${id}/`, {
    method: 'GET'
}).then((response) => response.json());

export const updateCourse = async (courseId, course) => {
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const createCourse = async (course) =>
{
    console.log('course to create', course)
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findAllCourses = () => {
    return fetch(API_URL)
        .then(response => response.json())
};