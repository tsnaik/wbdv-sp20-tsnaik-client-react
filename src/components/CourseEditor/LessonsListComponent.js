import React from "react";
import LessonListItemComponent from "./LessonListItemComponent";
import lessonService from "../../services/LessonService";
import {createLesson} from "../../actions/LessonActions";
import {connect} from "react-redux";

class LessonListComponent extends React.Component {
    render() {
        return this.props.currentModuleId && <ul className="nav nav-tabs wbdv-topic-pill-list">
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
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonListComponent)