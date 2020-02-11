import React from "react";
import lessonService from "../../services/LessonService";
import topicService from "../../services/TopicService";

import {deleteLesson, updateLesson, updateLessonId} from "../../actions/LessonActions";
import {connect} from "react-redux";
import {setAllTopics, updateTopicId} from "../../actions/TopicActions";

class LessonListItemComponent extends React.Component {
    state = {
        editing: false,
        lesson: this.props.lesson
    };

    render() {
        return <span>
        <li className="nav-item">
            {!this.state.editing &&
             <div className='container-fluid'>
                 <div className='row'>
                     <div className='col-9'>
                         <span className={`nav-link wbdv-clickable 
                          ${this.props.currentLessonId === this.state.lesson._id ? 'wbdv-highlight'
                                                                                 : ''}`}
                               onClick={() => {
                                   if (this.state.lesson._id !== this.props.currentLessonId) {
                                       this.props.history.push(
                                           `/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.state.lesson._id}`);
                                       this.props.updateCurrentTopicId(null);
                                   }

                               }}>{this.state.lesson.title}</span>
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
                          ${this.props.currentLessonId === this.state.lesson._id ? 'wbdv-highlight'
                                                                                 : ''}`}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        this.props.updateLesson(this.state.lesson._id,
                                                                this.state.lesson);
                                        this.setState({editing: false});
                                    }
                                }}
                                onChange={(e) =>
                                    this.setState(
                                        {
                                            lesson: {
                                                ...this.state.lesson,
                                                title: e.target.value,
                                            }
                                        })}
                                value={this.state.lesson.title}/>
                     </div>
                     <div className='col-2'>
                         <span className="btn"
                               onClick={() => {
                                   this.props.updateLesson(this.state.lesson._id,
                                                           this.state.lesson);
                                   this.setState({editing: false});
                               }}>
                         <i className="fas fa-check"/></span>
                     </div>
                     <div className='col-2'>
                     <span className="btn"
                           onClick={() => {
                               if (this.props.currentLessonId === this.state.lesson._id) {
                                   this.props.history.push(
                                       `/course/${this.props.courseId}/module/${this.props.moduleId}`);
                                   this.props.updateCurrentLessonId(null);
                                   this.props.updateCurrentTopicId(null);
                               }
                               this.props.deleteLesson(this.state.lesson._id);
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
        lessons: state.lessons.lessons,
        currentLessonId: state.lessons.currentLessonId,
        moduleId: state.modules.currentModuleId,
        courseId: state.modules.course._id
    }
};

const dispatchToPropertyMapper = (dispatch) => {
        return {
            updateLesson: (id, obj) =>
                lessonService.updateLesson(id, obj)
                    .then(() =>
                              dispatch(updateLesson(obj))),
            deleteLesson: (id) =>
                lessonService.deleteLesson(id)
                    .then(status =>
                              dispatch(deleteLesson(id))),
            updateCurrentLessonId: (newId) =>
                dispatch(updateLessonId(newId)),
            findAllTopicsForLesson: (id) =>
                topicService.findAllTopicsForLesson(id)
                    .then(actual => dispatch(setAllTopics(actual))),
            updateCurrentTopicId: (newId) =>
                dispatch(updateTopicId(newId)),

        }
    }
;

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonListItemComponent)