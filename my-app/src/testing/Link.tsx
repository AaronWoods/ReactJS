import React from 'react'

enum STATUS {
    HOVERED='hovered',
    NORMAL='normal'
}

export class Link extends React.Component<any, any>{
    constructor(props:any){
        super(props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class:STATUS.NORMAL
        }
    }

    _onMouseEnter(){
        this.setState({class:STATUS.HOVERED})
    }

    _onMouseLeave(){
        this.setState({class:STATUS.NORMAL})
    }

    render(){
        return (
            <a className={this.state.class} 
                href="#"
                onMouseEnter = {this._onMouseEnter}
                onMouseLeave = {this._onMouseLeave}>
                {this.props.children}
            </a>
        )
    }
}