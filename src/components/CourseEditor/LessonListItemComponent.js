import React from "react";
import moduleService from "../../services/ModuleService";
import {deleteModule, updateModuleId} from "../../actions/ModuleActions";
import lessonService from "../../services/LessonService";
import {updateLesson} from "../../actions/LessonActions";
import {connect} from "react-redux";

class LessonListItemComponent extends React.Component {
    state = {
        editing: false,
        lesson: this.props.lesson
    };

    render() {
        return <span>
        <li className="nav-item ">
            {!this.state.editing &&
             <div className='container-fluid'>
                 <div className='row'>
                     <div className='col-9'>
                         <span className="nav-link wbdv-clickable">{this.state.lesson.title}</span>
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
                     <div class='col-8'>
                         <input type='text' className="nav-link form-control"
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
                           onClick={() => this.setState({editing: false})}>
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
        currentLessonId: state.modules.currentLessonId
    }
};

const dispatchToPropertyMapper = (dispatch) => {
        return {
            updateLesson: (id, obj) =>
                lessonService.updateLesson(id, obj)
                    .then(() =>
                              dispatch(updateLesson(obj))),
            deleteModule: (moduleId) =>
                moduleService.deleteModule(moduleId)
                    .then(status =>
                              dispatch(deleteModule(moduleId))),
            updateCurrentModuleId: (newIndex) =>
                dispatch(updateModuleId(newIndex))

        }
    }
;

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonListItemComponent)