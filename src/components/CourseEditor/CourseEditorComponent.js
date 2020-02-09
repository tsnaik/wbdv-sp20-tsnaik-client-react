import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import './CourseEditor.css'
import LessonListComponent from "./LessonsListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {combineReducers, createStore} from "redux";
import ModuleReducer from "../../reducers/ModuleReducer";
import {Provider} from "react-redux";

class CourseEditorComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.props.findCourseById(this.props.match.params.courseId)
            .then((res) => {this.setState({
                                              course: res
                                          })});
    }

    rootReducer = combineReducers({
                                      modules: ModuleReducer,
                                      // lessons: lessonReducer
                                  });

    store = createStore(this.rootReducer);

    state = {
        course: {}
    };


    render() {
        return <Provider store={this.store}>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mr-2">
                            <button onClick={() => {
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
                    <span
                        className="navbar-brand wbdv-course-title">{this.state.course.title}</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
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
                            <ModuleListComponent courseId={this.props.match.params.courseId}/>
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
        </Provider>
    }
}
;

export default CourseEditorComponent