import React from "react";
import moduleService from "../../services/ModuleService";
import {deleteModule, updateModule} from "../../actions/ModuleActions";
import {connect} from "react-redux";

class ModuleListItemComponent extends React.Component {
    state = {
        editing: false,
        module: this.props.module
    };

    render() {
        return <li
            className={`nav-item wbdv-module-item ${this.state.editing ? 'wbdv-highlight' : ''}`}>

            {!this.state.editing &&
             <span>
             <span className="nav-link wbdv-module-item-title wbdv-clickable"
                   href="#">{this.state.module.title}</span>
             <span className="btn pt-1 float-right"
                   onClick={() => this.setState({editing: true})}>
             <i className="fas fa-edit"/></span>
             </span>
            }

            {this.state.editing &&
             <span>
                 <div className="container">
                 <div className="form-inline">
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
                         <span className="btn "
                               onClick={() => {
                                   this.props.updateModule(this.state.module._id,
                                                           this.state.module);
                                   this.setState({editing: false});
                               }}>
                                 <i className="fas fa-check"/></span>
                     </div>
                      <div className="col-2">
                           <span className="btn wbdv-module-item-delete-btn"
                                 onClick={() => this.props.deleteModule(
                                     this.state.module._id)}>
                        <i className="fas fa-trash"/></span>
                      </div>
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
        modules: state.modules.modules
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

        }
    }
;

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListItemComponent)