import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";

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

        {props.widget.type === 'image' &&
         <ImageWidgetComponent
             {...props}/>
        }

    </div>;

export default WidgetListItemComponent
