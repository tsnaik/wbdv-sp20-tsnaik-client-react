import React from "react";

class CourseManagerNavbarComponent extends React.Component {
    state = {
        newCourseTitle: ''
    };

    render() {
        return <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item mr-2">
                    <button className="btn btn-outline-light wbdv-field wbdv-hamburger">
                        <i className="fas fa-bars text-light "/>
                    </button>
                </li>
            </ul>
            <div className=" d-none d-sm-block">
                <span className=" navbar-brand wbdv-label wbdv-course-manager">Course Manager</span>
            </div>
            <div className="collapse navbar-collapse ">
            </div>
            <ul className="nav navbar-nav">

                <div className="form-inline">
                    <li>
                        <input className=" form-control mr-sm-2 wbdv-field wbdv-new-course"
                               type="text"
                               placeholder="New Course Title"
                               onChange={this.updateInput}
                               value={this.state.newCourseTitle}
                               onKeyPress={(event) => {
                                   if (event.key === 'Enter') {
                                       this.props.add(this.state.newCourseTitle);
                                       this.state.newCourseTitle = ''
                                   }
                               }}
                        />
                    </li>
                    <li>
                        <button type="button" onClick={() => {
                            this.props.add(this.state.newCourseTitle)
                            this.state.newCourseTitle = ''
                        }} className="btn wbdv-button wbdv-add-course"><i
                            className="fa fa-plus-circle fa-lg pt-1 text-light"/></button>
                    </li>
                </div>
            </ul>
        </nav>
    }

    updateInput = (e) =>
        this.setState({
                          newCourseTitle: e.target.value
                      })
}

export default CourseManagerNavbarComponent;
