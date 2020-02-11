import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import './CourseEditor.css'
import LessonListComponent from "./LessonsListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {connect} from "react-redux";
import courseService from "../../services/CourseService";
import {loadCourse} from "../../actions/CourseActions";
import {Router} from "react-router";

class CourseEditorComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.props.loadCourse(this.props.match.params.courseId);
    }

    render() {
        return (
            <Router history={this.props.history}>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mr-2">
                                <button onClick={() => {
                                    this.props.history.push("/table");
                                }}
                                        className="btn btn-outline-light  ">
                                    <i className="fas fa-times text-light wbdv-course-editor wbdv-close "/>
                                </button>
                            </li>
                        </ul>
                        <span
                            className="navbar-brand wbdv-course-title">{this.props.course
                                                                        && this.props.course.title}</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                    </nav>

                    <div className="container-fluid d-flex flex-column">
                        <div className="row flex-fill">
                            <div className="col-sm-4 col-md-3 mt-3 wbdv-nav-col h-100 ">
                                <ModuleListComponent
                                    history={this.props.history}
                                    match={this.props.match}
                                    courseId={this.props.match.params.courseId}/>
                            </div>
                            <div className="col-sm-8 mt-sm-3 col-md-9">
                                <LessonListComponent history={this.props.history}
                                                     match={this.props.match}
                                />

                                <TopicPillsComponent history={this.props.history}
                                                     match={this.props.match}/>

                                <WidgetListComponent
                                    history={this.props.history}
                                    match={this.props.match}
                                    widgets={[
                                        {_id: "13", title: "Widget 1"},
                                    ]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>)
    }
}

const stateToPropertyMapper = (state) => {
    return {
        course: state.modules.course
    }
};

const dispatchToPropertyMapper = (dispatch) => {
        return {
            loadCourse: (courseId) =>
                courseService.findCourseById(courseId)
                    .then((course) =>
                              dispatch(loadCourse(course))),

        }
    }
;

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(CourseEditorComponent)