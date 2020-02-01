import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";

const ModuleListComponent = ({modules}) =>
        <ul className="nav nav-pills flex-column wbdv-module-list">
            {
                modules.map(module =>
                                <ModuleListItemComponent
                                    key={module._id}
                                    module={module}/>
                )
            }

            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div className="input-group">
                        <input type="text" className="form-control transparent-input"/>
                        <div className="input-group-append">
                            <button className="btn bg-none wbdv-module-item-add-btn"><i
                                className="fas fa-plus "/></button>
                        </div>
                    </div>
                </a>
            </li>
        </ul>

export default ModuleListComponent