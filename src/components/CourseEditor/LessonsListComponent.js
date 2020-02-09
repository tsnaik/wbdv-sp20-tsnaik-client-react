import React from "react";
import LessonListItemComponent from "./LessonListItemComponent";
import lessonService from "../../services/LessonService";
import {createLesson, updateLessonId} from "../../actions/LessonActions";
import {connect} from "react-redux";

class LessonListComponent extends React.Component {
    componentDidMount() {
        this.props.updateCurrentLessonId(null);
    }

    render() {
        return this.props.currentModuleId && <ul className="nav nav-tabs">
            {
                this.props.lessons &&
                this.props.lessons.map(
                    lesson =>
                        <LessonListItemComponent
                            key={lesson._id}
                            lesson={lesson}/>
                )}
            <li className="nav-item">
                <button className="nav-link btn wbdv-new-page-btn"
                        onClick={() => this.props.createLesson(this.props.currentModuleId)}>
                    <i className="fas fa-plus"/></button>
            </li>
        </ul>
    }

}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons,
        currentModuleId: state.modules.currentModuleId
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createLesson: (id) => {
            lessonService.createLesson(id, {title: 'New Lesson'})
                .then(actual =>
                          dispatch(createLesson(actual)))
        },
        updateCurrentLessonId: (newId) =>
            dispatch(updateLessonId(newId)),

    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonListComponent)