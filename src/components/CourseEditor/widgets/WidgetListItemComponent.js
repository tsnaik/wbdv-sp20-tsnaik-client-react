import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

const WidgetListItemComponent = (props) =>
    <div>
        {props.widget.type === 'heading' &&
         <HeadingWidgetComponent
             {...props}
         />
        }
        {props.widget.type === 'paragraph' &&
         <ParagraphWidgetComponent
             {...props}/>
        }

    </div>;

export default WidgetListItemComponent
