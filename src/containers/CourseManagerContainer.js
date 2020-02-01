import React from "react";
import CourseManagerNavbarComponent from "../components/CourseManager/CourseManagerNavbarComponent";
import CourseTableComponent from "../components/CourseManager/CourseTableComponent";
import CourseGridComponent from "../components/CourseManager/CourseGridComponent";
// import CourseEditor from "./CourseEditor/CourseEditor";
import {createCourse, deleteCourse, findAllCourses, updateCourse} from "../services/CourseService"

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: '',
        courses: []
    };

    loadAllCourses = async () => {
        const allCourses = await findAllCourses();
        this.setState({
                          courses: allCourses
                      })
    };
    componentDidMount = async () => {
        await this.loadAllCourses();
    };

    update = async (courseId, course) => {
        await updateCourse(courseId, course);
        await this.loadAllCourses();
    };

    deleteCourse = async (deletedCourse) => {
        await deleteCourse(deletedCourse._id);
        await this.loadAllCourses();
    };

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    };

    showCourseEditor = () =>
        this.setState({
                          editingCourse: true
                      });

    hideCourseEditor = () =>
        this.setState({
                          editingCourse: false
                      });

    addCourse = async (newCourseName) => {
        console.log(newCourseName);
        const newCourse = {
            title: newCourseName,
            last_modified: new Date(Date.now()).toLocaleString(),
            owned_by: 'me'
        };
        await createCourse(newCourse);
        await this.loadAllCourses();
    };

    updateForm = (e) =>
        this.setState({
                          newCourseTitle: e.target.value
                      });

    render() {
        return (
            <div>
                <div>
                    <CourseManagerNavbarComponent add={this.addCourse}/>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <div className="row justify-content-end w-100">
                                {this.state.layout === 'table' &&
                                 <div className="col-1 mx-1">
                                     <button type="button" onClick={this.toggle} className="btn">
                                         <i className="fas fa-th fa-lg float-right wbdv-button wbdv-grid-layout"/>
                                     </button>
                                 </div>}
                                {this.state.layout === 'grid' &&
                                 <div className="col-1 mx-1">
                                     <button type="button" onClick={this.toggle} className="btn">
                                         <i className="fas fa-lg fa-list-ul float-right wbdv-button wbdv-list-layout"/>
                                     </button>
                                 </div>}
                                <div className="col-1 mx-1">
                                    <button type="button" className="btn wbdv-header wbdv-sort">
                                        <i className="fas fa-lg fa-sort-numeric-down float-right"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid ">

                        {this.state.layout === 'table' &&
                         <CourseTableComponent courses={this.state.courses}
                                               deleteCourse={this.deleteCourse}
                                               updateCourse={this.update}/>}
                        {this.state.layout === 'grid' &&
                         <CourseGridComponent courses={this.state.courses}/>}
                    </div>
                    {/*<button onClick={this.toggle}>Toggle</button>*/}
                    {/*<input*/}
                    {/*    onChange={this.updateForm}*/}
                    {/*    value={this.state.newCourseTitle}/>*/}
                    {/*<button onClick={this.addCourse}>Add Course</button>*/}

                </div>

            </div>
        )
    }
}

export default CourseManagerContainer