import React from "react";
import TopicPillsItemComponent from "./TopicPillsItemComponent";

const TopicPillsComponent = ({topics}) =>
    <ul className="nav nav-tabs wbdv-topic-pill-list">
        {
            topics.map(topic =>
                           <TopicPillsItemComponent
                               key={topic._id}
                               topic={topic}/>)
        }
        <li className="nav-item">
            <a className="nav-link wbdv-topic-add-btn" href="#"><i
                className="fas fa-plus-circle"></i></a>
        </li>
    </ul>;

export default TopicPillsComponent;