import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import './CourseEditor.css'
import LessonListComponent from "./LessonsListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

class CourseEditorComponent extends React.Component {
    state = {
        course: {}
    };

    async componentDidMount() {
        let res = await this.props.findCourseById(this.props.match.params.courseId);
        this.state.course =
            this.setState({
                              course: res
                          });
    }

    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mr-2">
                        <button onClick={() => {
                            console.log(this.props.history);
                            if (this.props.history.action === "PUSH") {
                                this.props.history.goBack();
                            } else {
                                this.props.history.push("/table");
                            }
                        }}
                                className="btn btn-outline-light  ">
                            <i className="fas fa-times text-light wbdv-course-editor wbdv-close "/>
                        </button>
                    </li>
                </ul>
                <span className="navbar-brand wbdv-course-title">{this.state.course.title}</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <LessonListComponent lessons={[
                    {_id: "13", title: "Lesson 1"},
                    {_id: "21", title: "Lesson 2"},
                    {_id: "32", title: "Lesson 3"},
                ]}/>
            </nav>

            <div className="container-fluid d-flex flex-column">
                <div className="row flex-fill">
                    <div className="col-sm-4 col-md-3 mt-3 wbdv-nav-col h-100 ">
                        <ModuleListComponent modules={[
                            {_id: "123", title: "CSS"},
                            {_id: "234", title: "HTML"},
                            {_id: "345", title: "React JS"},
                        ]}/>
                    </div>
                    <div className="col-sm-8 mt-sm-3 col-md-9">
                        <TopicPillsComponent topics={[
                            {_id: "13", title: "Topic 1"},
                            {_id: "21", title: "Topic 2"},
                            {_id: "32", title: "Topic 3"},
                        ]}/>
                        <div className="row mt-2">
                            <div className="col justify-content-end d-flex">
                                <div className="form-inline">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input"
                                               id="customSwitch1"/>
                                        <label className="custom-control-label"
                                               htmlFor="customSwitch1">Preview</label>
                                    </div>
                                    <span className="ml-2">
                            <button className="btn btn-success" type="button">Save</button>
                        </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <WidgetListComponent
                                widgets={[
                                    {_id: "13", title: "Widget 1"},
                                ]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
;

export default CourseEditorComponent