import React from "react";
import CourseManagerNavbarComponent from "../components/CourseManager/CourseManagerNavbarComponent";
import CourseTableComponent from "../components/CourseManager/CourseTableComponent";
import CourseGridComponent from "../components/CourseManager/CourseGridComponent";
import {createCourse, deleteCourse, findAllCourses, updateCourse} from "../services/CourseService"
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: true,
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
        document.title = 'Course Manager | Whiteboard';
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
            last_modified: this.formatDate(new Date(Date.now())),
            owned_by: 'me'
        };
        await createCourse(newCourse);
        await this.loadAllCourses();
    };

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return [month, day, year].join('/');
    };

    render() {
        return (
            <div>
                {!this.state.editingCourse &&
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

                    {this.state.layout === 'table' &&
                     <CourseTableComponent courses={this.state.courses}
                                           deleteCourse={this.deleteCourse}
                                           updateCourse={this.update}
                                           formatDate={this.formatDate}
                                           showCourseEditor={this.showCourseEditor}/>}

                          {this.state.layout === 'grid' &&
                           <CourseGridComponent courses={this.state.courses}
                                                deleteCourse={this.deleteCourse}
                                                updateCourse={this.update}
                                                formatDate={this.formatDate}
                                                showCourseEditor={this.showCourseEditor}/>}

                 </div>
                }
                {
                    this.state.editingCourse
                    && <CourseEditorComponent hideCourseEditor={this.hideCourseEditor}/>
                }
            </div>
        )
    }
}

export default CourseManagerContainer