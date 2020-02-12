import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";
import {connect} from "react-redux";
import {createModule, setAllModules, updateModuleId} from "../../actions/ModuleActions";
import moduleService from '../../services/ModuleService'
import {Route, Router} from "react-router";
import lessonService from "../../services/LessonService";
import {setAllLessons} from "../../actions/LessonActions";

class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findAllModulesForCourse(this.props.courseId);
        this.props.updateCurrentModuleId(null);
    }

    render() {
        return (
            <Router history={this.props.history}>
                <Route
                    path="/course/:courseId/module/:moduleId"
                    render={(props) => {
                        this.props.updateCurrentModuleId(props.match.params.moduleId);
                        this.props.findAllLessonsForModule(props.match.params.moduleId);
                    }
                    }/>
                <ul className="nav nav-pills flex-column wbdv-module-list">
                    {

                        this.props.modules &&
                        this.props.modules.map(
                            (module, index) =>
                                <ModuleListItemComponent
                                    history={this.props.history}
                                    match={this.props.match}
                                    key={module._id}
                                    module={module}/>
                        )
                    }

                    <li className="nav-item">
                <span className="nav-link">
                            <button className="btn bg-none wbdv-module-item-add-btn"
                                    onClick={() => this.props.createModule(this.props.courseId)}><i
                                className="fas fa-plus "/></button>
                </span>
                    </li>
                </ul>
            </Router>);
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllModulesForCourse: (courseId) =>
            moduleService.findAllModulesForCourse(courseId)
                .then(actualModules => dispatch(setAllModules(actualModules))),
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: 'New Module'})
                .then(actualModule =>
                          dispatch(createModule(actualModule)))
        },
        updateCurrentModuleId: (newIndex) =>
            dispatch(updateModuleId(newIndex)),
        findAllLessonsForModule: (id) =>
            lessonService.findAllLessonsForModule(id)
                .then(actual => dispatch(setAllLessons(actual))),
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)