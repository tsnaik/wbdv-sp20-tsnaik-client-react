import {
    CREATE_LESSON,
    DELETE_LESSON,
    SET_LESSONS_FOR_MODULE,
    UPDATE_LESSON, UPDATE_LESSON_ID
} from "../actions/LessonActions";

const initialState = {
    lessons: [],
    course: null,
    currentLessonId: 0
};

const LessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons,
                module: state.module,
                currentLessonId: state.currentLessonId
            };
        case CREATE_LESSON:
            console.log('creating:' , action.newLesson);
            console.log('existing', state.lessons);
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ],
                module: state.module,
                currentLessonId: state.currentLessonId
            };
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.moduleId),
                module: state.module,
                currentLessonId: state.currentLessonId
            };
        case UPDATE_LESSON:
            const index = state.lessons.findIndex(lesson => lesson._id === action.lesson._id);
            return {
                lessons: [
                    ...state.lessons.slice(0, index),
                    action.lesson,
                    ...state.lessons.slice(index + 1)
                ],
                module: state.module,
                currentLessonId: state.currentLessonId
            };
        case UPDATE_LESSON_ID:
            return {
                lessons: state.lessons,
                module: state.module,
                currentLessonId: action.newIndex
            };
        default:
            return state
    }
};

export default LessonReducer