import React from "react";
import LessonListItemComponent from "./LessonListItemComponent";

const LessonListComponent = ({lessons}) =>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
            {
                lessons.map(lesson =>
                                <LessonListItemComponent
                                    key={lesson._id}
                                    lesson={lesson}/>
                )}
        </ul>
        <div className="my-2 my-lg-0">
            <button className="btn btn-outline-light text-light wbdv-new-page-btn">
                <i className="fas fa-plus wbdv-new-page-btn"/></button>
        </div>
    </div>;

export default LessonListComponent