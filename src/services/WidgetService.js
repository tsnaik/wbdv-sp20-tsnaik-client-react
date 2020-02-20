import {API_URL_TOPICS_NEW, API_URL_WIDGETS} from "../common/Constants";

export const createWidget = async (topicId, widget) => {
    const response = await fetch(`${API_URL_TOPICS_NEW}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    });
    let res = await response.json();
    return res;
};

export const saveAllWidgets = async (topicId, widgets) => {
    const response = await fetch(`${API_URL_TOPICS_NEW}/${topicId}/widgets`, {
        method: "PUT",
        body: JSON.stringify(widgets),
        headers: {
            'content-type': 'application/json'
        }
    });
    let res = await response.json();
    return res;
};

export const findAllWidgetsForTopic = (topicId) => {
    return fetch(`${API_URL_TOPICS_NEW}/${topicId}/widgets`)
        .then(response => response.json());
};

export const findWidget = async (widgetId) => {
    const response = await fetch(`${API_URL_WIDGETS}/${widgetId}/`, {
        method: 'GET'
    });

    return await response.json();
};

export const updateWidget = async (widgetId, widget) => {
    const response = await fetch(`${API_URL_WIDGETS}/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteWidget = async (widgetId) => {
    const response = await fetch(`${API_URL_WIDGETS}/${widgetId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export default {
    deleteWidget,
    createWidget,
    findAllWidgetsForTopic,
    updateWidget,
    findWidget,
    saveAllWidgets
};