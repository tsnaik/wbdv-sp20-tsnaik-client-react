export const DELETE_LESSON = "DELETE_LESSON";
export const CREATE_LESSON = "CREATE_LESSON";
export const SET_LESSONS_FOR_MODULE = "SET_LESSONS_FOR_MODULE";
export const UPDATE_LESSON = "UPDATE_LESSON";
export const UPDATE_LESSON_ID = "UPDATE_LESSON_ID";

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
});

export const setAllLessons = (lessons) => ({
    type: SET_LESSONS_FOR_MODULE,
    lessons: lessons
});

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
});

export const updateLesson = (lesson) => ({
    type: UPDATE_LESSON,
    lesson: lesson
});

export const updateLessonId = (newId) => ({
    type: UPDATE_LESSON_ID,
    newIndex: newId
});
