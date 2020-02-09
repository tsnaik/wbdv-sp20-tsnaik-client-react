import React from "react";
import moduleService from "../../services/ModuleService";
import {deleteModule} from "../../actions/ModuleActions";
import {connect} from "react-redux";

class ModuleListItemComponent extends React.Component {
    state = {
        editing: false,
    };

    render() {
        return <li
            className={`nav-item wbdv-module-item ${this.state.editing ? 'wbdv-highlight' : ''}`}>
            <span className="nav-link wbdv-module-item-title wbdv-clickable"
                  href="#">{this.props.module.title}</span>

            {!this.state.editing &&
             <span>
             <span className="btn pt-1 float-right"
                   onClick={() => this.setState({editing: true})}>
             <i className="fas fa-edit"/></span>
             </span>
            }
            {this.state.editing &&
             <span>
             <span className="btn pt-1 float-right wbdv-module-item-delete-btn"
                   onClick={() => this.setState({editing: false})}>
             <i className="fas fa-check"/></span>

             <span className="btn pt-1 float-right wbdv-module-item-delete-btn"
             onClick={() => this.props.deleteModule(this.props.module._id)}>
                <i className="fas fa-trash"/></span>
                </span>
            }


        </li>;
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
};

const dispatchToPropertyMapper = (dispatch) => {
        return {
            deleteModule: (moduleId) =>
                moduleService.deleteModule(moduleId)
                    .then(status =>
                              dispatch(deleteModule(moduleId))),

        }
    }
;

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListItemComponent)