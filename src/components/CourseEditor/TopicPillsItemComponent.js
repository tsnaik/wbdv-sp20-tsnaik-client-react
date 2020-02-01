import React from "react";

const TopicPillsItemComponent = ({topic}) =>
    <li className="nav-item">
        <a className="nav-link wbdv-topic-pill" href="#">{topic.title}</a>
    </li>;

export default TopicPillsItemComponent;
