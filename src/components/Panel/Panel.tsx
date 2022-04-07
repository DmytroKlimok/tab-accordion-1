import React from "react";
import {PanelType} from "../../index";
import './../accordion.css'

export class Panel extends React.Component<any, any>{
    private readonly title: String
    private readonly text: String

    constructor(props: {values: PanelType}) {
        super(props)
        this.title = this.props.values.title
        this.text = this.props.values.text
        this.state = {isHidden: true}
    }

    clickHandler(){
        console.log(this.state.isHidden)
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return <>
            <button
                className={ this.state.isHidden? "accordion" : "accordion active" }
                onClick={()=>this.clickHandler()}
            >{this.title}</button>
            <div
                className="panel"
                style={{display: this.state.isHidden? "none" : "block"}}
            >
                <p>{this.text}</p>
            </div>
        </>
    }

}