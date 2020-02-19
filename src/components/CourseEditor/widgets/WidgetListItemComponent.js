import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

class WidgetListItemComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.widget.type === 'heading' &&
                 <HeadingWidgetComponent
                     {...this.props}
                 />
                }
                {this.props.widget.type === 'paragraph' &&
                 <ParagraphWidgetComponent
                     {...this.props}/>
                }

            </div>
        )
    }
}

export default WidgetListItemComponent
