import React from "react";
import ModuleListComponent from "./ModuleListComponent";
// import './CourseEditor.css'

const CourseEditorComponent = ({hideCourseEditor}) =>
    <div>
        <button onClick={hideCourseEditor}>Close</button>
        <h2>Course Editor</h2>
        <div className="row">
            <div className="col-4">
                <h4>Module List</h4>
                <ModuleListComponent modules={[
                    {_id: "123", title: "CSS"},
                    {_id: "234", title: "HTML"},
                    {_id: "345", title: "React JS"},
                ]}/>
            </div>
            <div className="col-8">
                <h4>Lesson Tabs</h4>
                <ul>
                    <li>Lesson 1</li>
                    <li>Lesson 2</li>
                    <li>Lesson 3</li>
                </ul>
            </div>
        </div>
    </div>;

export default CourseEditorComponent