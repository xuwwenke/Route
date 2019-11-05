import React, { Component } from 'react';


export default class Information extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.location.state);
        this.state={
            data:this.props.location.state
        }
    }
    render() {
        return (
            <div>
                123
                {/* <div dangerouslySetInnerHTML={{__html: this.props.location.state.content}} /> */}
            </div>)
    }
}