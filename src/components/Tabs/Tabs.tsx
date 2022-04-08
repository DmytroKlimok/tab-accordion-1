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
        return this.panels.map(
            (panel, id) => {
                return <Panel values={panel} key={id}/>
            }
        )
    }

}