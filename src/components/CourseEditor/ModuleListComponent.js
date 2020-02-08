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
                <span className="nav-link" href="#">
                            <button className="btn bg-none wbdv-module-item-add-btn"><i
                                className="fas fa-plus "/></button>
                </span>
            </li>
        </ul>

export default ModuleListComponent