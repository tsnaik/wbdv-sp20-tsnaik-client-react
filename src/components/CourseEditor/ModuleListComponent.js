import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";

const ModuleListComponent = ({modules}) =>
    <ul>
        {
            modules.map(module =>
                            <ModuleListItemComponent
                                key={module._id}
                                module={module}/>
            )
        }
    </ul>;

export default ModuleListComponent