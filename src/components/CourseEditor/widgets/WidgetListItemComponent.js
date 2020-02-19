import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

class WidgetListItemComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.widget.type === 'heading' &&
                 <HeadingWidgetComponent
                     preview={this.props.preview}
                     widget={this.props.widget}/>
                }
                {this.props.widget.type === 'paragraph' &&
                 <ParagraphWidgetComponent
                     preview={this.props.preview}
                     widget={this.props.widget}/>
                }

            </div>
        )
    }
}

export default WidgetListItemComponent
