import React from "react";
import TopicPillsItemComponent from "./TopicPillsItemComponent";
import topicService from "../../services/TopicService";
import widgetService from "../../services/WidgetService";
import {connect} from "react-redux";
import {createTopic, setAllTopics, updateTopicId} from "../../actions/TopicActions";
import {Route, Router} from "react-router";
import {setAllWidgets} from "../../actions/WidgetActions";

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
                            this.props.findAllWidgetsForTopic(props.match.params.topicId);
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

        findAllWidgetsForTopic: (id) =>
            widgetService.findAllWidgetsForTopic(id)
                .then(actual => dispatch(setAllWidgets(actual))),

    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsComponent)