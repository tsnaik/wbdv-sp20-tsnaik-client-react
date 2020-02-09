import {
    CREATE_TOPIC,
    DELETE_TOPIC,
    SET_TOPICS_FOR_LESSON,
    UPDATE_TOPIC, UPDATE_TOPIC_ID
} from "../actions/TopicActions";

const initialState = {
    topics: [],
    course: null,
    currentTopicId: null
};

const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOPICS_FOR_LESSON:
            console.log('setting', action);
            return {
                topics: action.topics,
                lesson: state.lesson,
                currentTopicId: state.currentTopicId
            };
        case CREATE_TOPIC:
            console.log('creating:' , action.newTopic);
            console.log('existing', state.topics);
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ],
                lesson: state.lesson,
                currentTopicId: state.currentTopicId
            };
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicId),
                lesson: state.lesson,
                currentTopicId: state.currentTopicId
            };
        case UPDATE_TOPIC:
            const index = state.topics.findIndex(topic => topic._id === action.topic._id);
            return {
                topics: [
                    ...state.topics.slice(0, index),
                    action.topic,
                    ...state.topics.slice(index + 1)
                ],
                lesson: state.lesson,
                currentTopicId: state.currentTopicId
            };
        case UPDATE_TOPIC_ID:
            console.log('action',action);
            return {
                topics: state.topics,
                lesson: state.lesson,
                currentTopicId: action.newIndex
            };
        default:
            return state
    }
};

export default TopicReducer