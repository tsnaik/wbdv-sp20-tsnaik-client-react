import {API_URL_LESSONS, API_URL_TOPICS} from "../common/constants";

export const createTopic = async (lessonId, topic) => {
    const response = await fetch(`${API_URL_LESSONS}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    let res = await response.json();
    console.log(res);
    return res;
};

export const findAllTopicsForLesson = (lessonId) => {
    return fetch(`${API_URL_LESSONS}/${lessonId}/topics`)
        .then(response => response.json());
};

export const findTopic = async (topicId) => {
    const response = await fetch(`${API_URL_TOPICS}/${topicId}/`, {
        method: 'GET'
    });

    return await response.json();
};

export const updateTopic = async (topicId, topic) => {
    const response = await fetch(`${API_URL_TOPICS}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteTopic = async (topicId) => {
    const response = await fetch(`${API_URL_TOPICS}/${topicId}`, {
        method: 'DELETE'
    });
    return await response.json()
};
