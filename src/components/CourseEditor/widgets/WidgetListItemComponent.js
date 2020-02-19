import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

class WidgetListItemComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.widget.type === 'heading' &&
                 <HeadingWidgetComponent
                     widget={this.props.widget}/>
                }
                {this.props.widget.type === 'paragraph' &&
                 <ParagraphWidgetComponent
                     widget={this.props.widget}/>
                }

            </div>
        )
    }
}

export default WidgetListItemComponent
