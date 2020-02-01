import React from "react";

const LessonListItemComponent = ({lesson}) =>
    <li className="nav-item ">
        <a className="nav-link" href="#">{lesson.title}</a>
    </li>

export default LessonListItemComponent