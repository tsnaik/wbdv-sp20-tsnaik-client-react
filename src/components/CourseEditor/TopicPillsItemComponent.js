import React from "react";
import topicService from "../../services/TopicService";
import {deleteTopic, updateTopic, updateTopicId} from "../../actions/TopicActions";
import {connect} from "react-redux";

class TopicPillsItemComponent extends React.Component {
    state = {
        editing: false,
        topic: this.props.topic
    };
    render() {
        return <span>
        <li className="nav-item">
            {!this.state.editing &&
             <div className='container-fluid'>
                 <div className='row'>
                     <div className='col-9'>
                         <span className={`nav-link wbdv-clickable 
                          ${this.props.currentTopicId === this.state.topic._id ? 'wbdv-highlight'
                                                                               : ''}`}
                               onClick={() => {
                                   this.props.updateCurrentTopicId(this.state.topic._id);
                                   // this.props.findAllWidgetsForLesson(this.state.topic._id);
                               }}>{this.state.topic.title}</span>
                     </div>
                     <div className='col-3'>
                     <span className="btn"
                           onClick={() => this.setState({editing: true})}>
                         <i className="fas fa-edit"/></span>
                     </div>
                 </div>
             </div>
            }
            {this.state.editing &&
             <div className='container-fluid'>
                 <div className='row'>
                     <div className='col-8'>
                         <input type='text' className={`nav-link form-control 
                          ${this.props.currentTopicId === this.state.topic._id ? 'wbdv-highlight'
                                                                               : ''}`}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        this.props.updateTopic(this.state.topic._id,
                                                               this.state.topic);
                                        this.setState({editing: false});
                                    }
                                }}
                                onChange={(e) =>
                                    this.setState(
                                        {
                                            topic: {
                                                ...this.state.topic,
                                                title: e.target.value,
                                            }
                                        })}
                                value={this.state.topic.title}/>
                     </div>
                     <div className='col-2'>
                         <span className="btn"
                               onClick={() => {
                                   this.props.updateTopic(this.state.topic._id,
                                                          this.state.topic);
                                   this.setState({editing: false});
                               }}>
                         <i className="fas fa-check"/></span>
                     </div>
                     <div className='col-2'>
                     <span className="btn"
                           onClick={() => {
                               this.props.updateCurrentTopicId(null);
                               this.props.deleteTopic(this.state.topic._id);
                           }}>
                         <i className="fas fa-trash"/></span>
                     </div>
                 </div>
             </div>
            }
        </li>
        </span>
    }

}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics,
        currentTopicId: state.topics.currentTopicId
    }
};

const dispatchToPropertyMapper = (dispatch) => {
        return {
            updateTopic: (id, obj) =>
                topicService.updateTopic(id, obj)
                    .then(() =>
                              dispatch(updateTopic(obj))),
            deleteTopic: (id) =>
                topicService.deleteTopic(id)
                    .then(status =>
                              dispatch(deleteTopic(id))),
            updateCurrentTopicId: (newId) =>
                dispatch(updateTopicId(newId)),

        }
    }
;

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsItemComponent)
