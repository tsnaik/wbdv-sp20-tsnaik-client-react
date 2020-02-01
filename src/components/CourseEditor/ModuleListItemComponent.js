import React from "react";

const ModuleListItemComponent = ({module}) =>
    <li className="nav-item wbdv-module-item active">
        <a className="nav-link wbdv-module-item-title" href="#">{module.title}</a>
        <span className="btn pt-1 mr-3 float-right wbdv-module-item-delete-btn"><i
    className="fas fa-trash ml-2"/></span>
    </li>;

export default ModuleListItemComponent