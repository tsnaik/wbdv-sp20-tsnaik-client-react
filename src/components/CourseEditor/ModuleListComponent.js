import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";
import {connect} from "react-redux";
import {createModule, setAllModules, updateModuleId} from "../../actions/ModuleActions";
import moduleService from '../../services/ModuleService'

class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findAllModulesForCourse(this.props.courseId);
    }

    render() {
        return <ul className="nav nav-pills flex-column wbdv-module-list">
            {

                this.props.modules &&
                this.props.modules.map(
                    (module, index) =>
                        <ModuleListItemComponent
                            key={module._id}
                            module={module}/>
                )
            }

            <li className="nav-item">
                <span className="nav-link">
                            <button className="btn bg-none wbdv-module-item-add-btn"
                            onClick={() =>this.props.createModule(this.props.courseId)}><i
                                className="fas fa-plus "/></button>
                </span>
            </li>
        </ul>
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
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)