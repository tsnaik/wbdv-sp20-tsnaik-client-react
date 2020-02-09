import React from "react";
import TopicPillsItemComponent from "./TopicPillsItemComponent";
import topicService from "../../services/TopicService";
import {connect} from "react-redux";
import {createTopic, updateTopicId} from "../../actions/TopicActions";

class TopicPillsComponent extends React.Component {
    componentDidMount() {
        this.props.updateCurrentTopicId(null);
    }

    render() {
        return ( (this.props.currentModuleId && this.props.currentLessonId) && <ul className="nav nav-pills">
            {
                this.props.topics &&
                this.props.topics.map(
                    topic =>
                        <TopicPillsItemComponent
                            key={topic._id}
                            topic={topic}/>
                )}
            <li className="nav-item">
                <button className="nav-link btn wbdv-new-page-btn"
                        onClick={() => this.props.createTopic(this.props.currentLessonId)}>
                    <i className="fas fa-plus"/></button>
            </li>
        </ul>)
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