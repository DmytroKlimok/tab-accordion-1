import React from "react";
import {PanelType} from "../../index";
import '../accordion.css'
import {Panel} from "../Panel/Panel";

export class Tabs extends React.Component<any, any>{
    private readonly panels: Array<PanelType>;

    constructor(props: any) {
        super(props)
        this.panels = this.props.panels
    }

    render() {
        const panelsJsx = []
        for( const panel of this.props.panels){
            panelsJsx.push(<Panel values={panel}/>)
        }
        return (
            panelsJsx
        )
    }

}