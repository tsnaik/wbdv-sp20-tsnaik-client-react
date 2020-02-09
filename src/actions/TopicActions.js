export const DELETE_TOPIC = "DELETE_TOPIC";
export const CREATE_TOPIC = "CREATE_TOPIC";
export const FIND_TOPIC_FOR_LESSON = "FIND_TOPIC_FOR_LESSON";
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const UPDATE_TOPIC_ID = "UPDATE_TOPIC_ID";

export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
});

export const setAllTopics = (topics) => ({
    type: FIND_TOPIC_FOR_LESSON,
    topics: topics
});

export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
});

export const updateTopic = (topic) => ({
    type: UPDATE_TOPIC,
    topic: topic
});

export const updateTopicId = (newId) => ({
    type: UPDATE_TOPIC_ID,
    newIndex: newId
});
