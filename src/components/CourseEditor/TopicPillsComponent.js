import React from "react";
import TopicPillsItemComponent from "./TopicPillsItemComponent";
import topicService from "../../services/TopicService";
import {connect} from "react-redux";
import {createTopic, setAllTopics, updateTopicId} from "../../actions/TopicActions";
import {Route, Router} from "react-router";
import LessonListItemComponent from "./LessonListItemComponent";

class TopicPillsComponent extends React.Component {
    componentDidMount() {
        this.props.updateCurrentTopicId(null);
    }

    render() {
        return ((this.props.currentModuleId && this.props.currentLessonId) &&
                <Router history={this.props.history}>
                    <Route
                        path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                        render={(props) => {
                            this.props.updateCurrentTopicId(props.match.params.topicId);
                            // this.props.findAllTopicsForLesson(props.match.params.topicId);
                            return (<span></span>);
                        }
                        }/>
                    <ul className="nav nav-pills">
                        {
                            this.props.topics &&
                            this.props.topics.map(
                                topic =>
                                    <TopicPillsItemComponent
                                        history={this.props.history}
                                        match={this.props.match}
                                        key={topic._id}
                                        topic={topic}/>
                            )}
                        <li className="nav-item">
                            <button className="nav-link btn wbdv-new-page-btn"
                                    onClick={() => this.props.createTopic(
                                        this.props.currentLessonId)}>
                                <i className="fas fa-plus"/></button>
                        </li>
                    </ul>
                </Router>)
    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics,
        currentLessonId: state.lessons.currentLessonId,
        currentModuleId: state.modules.currentModuleId
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createTopic: (id) => {
            topicService.createTopic(id, {title: 'New Topic'})
                .then(actual =>
                          dispatch(createTopic(actual)))
        },
        updateCurrentTopicId: (newId) =>
            dispatch(updateTopicId(newId)),

    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsComponent)