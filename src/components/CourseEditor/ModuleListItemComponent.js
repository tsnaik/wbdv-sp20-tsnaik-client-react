import React from "react";
import moduleService from "../../services/ModuleService";
import {deleteModule, updateModule, updateModuleId} from "../../actions/ModuleActions";
import {connect} from "react-redux";
import lessonService from "../../services/LessonService";
import {setAllLessons, updateLessonId} from "../../actions/LessonActions";
import {updateTopicId} from "../../actions/TopicActions";

class ModuleListItemComponent extends React.Component {
    state = {
        editing: false,
        module: this.props.module
    };

    render() {
        return <li
            className={`nav-item wbdv-module-item  
            ${this.props.currentModuleId === this.state.module._id ? 'wbdv-highlight' : ''}`}>

            {!this.state.editing &&
             <span>
                 <div className="container">
                     <div className=" row">
                     <div className="col-8  mt-1 wbdv-clickable"
                          onClick={() => {
                              if (this.state.module._id !== this.props.currentModuleId) {
                                  this.props.history.push(
                                      `/course/${this.props.courseId}/module/${this.state.module._id}`);
                                  this.props.updateCurrentLessonId(null);
                                  this.props.updateCurrentTopicId(null);
                              }
                          }}>
                            <span>{this.state.module.title}</span>
                     </div>
                     <div className="col-4">
                         <span className="btn pt-1 float-right"
                               onClick={() => this.setState({editing: true})}>
                         <i className="fas fa-edit"/></span>
                     </div>
                     </div>
                 </div>
             </span>
            }

            {this.state.editing &&
             <span>
                 <div className="container">
                     <div className=" row">
                     <div className="col-8">
                         <input type='text' className="form-control"
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        this.props.updateModule(this.state.module._id,
                                                                this.state.module);
                                        this.setState({editing: false});
                                    }
                                }}
                                onChange={(e) =>
                                    this.setState(
                                        {
                                            module: {
                                                ...this.state.module,
                                                title: e.target.value,
                                            }
                                        })}
                                value={this.state.module.title}/>
                     </div>
                     <div className="col-2">
                         <span className="btn"
                               onClick={() => {
                                   this.props.updateModule(this.state.module._id,
                                                           this.state.module);
                                   this.setState({editing: false});
                                   console.log("after update", this.props);
                               }}>
                                 <i className="fas fa-check"/></span>
                     </div>
                      <div className="col-2">
                           <span className="btn wbdv-module-item-delete-btn"
                                 onClick={() => {
                                     if (this.props.currentModuleId === this.state.module._id) {
                                         this.props.history.push(
                                             `/course/${this.props.courseId}`);
                                         this.props.updateCurrentModuleId(null);
                                         this.props.updateCurrentLessonId(null);
                                         this.props.updateCurrentTopicId(null);
                                     }
                                     this.props.deleteModule(this.state.module._id);
                                 }}>
                        <i className="fas fa-trash"/></span>
                      </div>
                     </div>
                 </div>

                </span>
            }


        </li>;
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules,
        currentModuleId: state.modules.currentModuleId,
        courseId: state.modules.course._id
    }
};

const dispatchToPropertyMapper = (dispatch) => {
        return {
            updateModule: (moduleId, module) =>
                moduleService.updateModule(moduleId, module)
                    .then(() =>
                              dispatch(updateModule(module))),
            deleteModule: (moduleId) =>
                moduleService.deleteModule(moduleId)
                    .then(status =>
                              dispatch(deleteModule(moduleId))),
            updateCurrentModuleId: (newIndex) =>
                dispatch(updateModuleId(newIndex)),
            findAllLessonsForModule: (id) =>
                lessonService.findAllLessonsForModule(id)
                    .then(actual => dispatch(setAllLessons(actual))),
            updateCurrentLessonId: (newId) =>
                dispatch(updateLessonId(newId)),
            updateCurrentTopicId: (newId) =>
                dispatch(updateTopicId(newId)),

        }
    }
;

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListItemComponent)