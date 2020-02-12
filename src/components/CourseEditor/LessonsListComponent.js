import React from "react";
import LessonListItemComponent from "./LessonListItemComponent";
import lessonService from "../../services/LessonService";
import {createLesson, updateLessonId} from "../../actions/LessonActions";
import {connect} from "react-redux";
import {Route, Router} from "react-router";
import topicService from "../../services/TopicService";
import {setAllTopics} from "../../actions/TopicActions";

class LessonListComponent extends React.Component {
    componentDidMount() {
        this.props.updateCurrentLessonId(null);
    }

    render() {
        return this.props.currentModuleId &&
               <Router history={this.props.history}>
                   <Route
                       path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                       render={(props) => {
                           this.props.updateCurrentLessonId(props.match.params.lessonId);
                           this.props.findAllTopicsForLesson(props.match.params.lessonId);
                       }
                       }/>
                   <ul className="nav nav-tabs">
                       {
                           this.props.lessons &&
                           this.props.lessons.map(
                               lesson =>
                                   <LessonListItemComponent
                                       history={this.props.history}
                                       match={this.props.match}
                                       key={lesson._id}
                                       lesson={lesson}/>
                           )}
                       <li className="nav-item">
                           <button className="nav-link btn wbdv-new-page-btn"
                                   onClick={() => this.props.createLesson(
                                       this.props.currentModuleId)}>
                               <i className="fas fa-plus"/></button>
                       </li>
                   </ul>
               </Router>
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
        findAllTopicsForLesson: (id) =>
            topicService.findAllTopicsForLesson(id)
                .then(actual => dispatch(setAllTopics(actual))),

    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonListComponent)