import React, {Component} from 'react'

class Hint extends Component{
    constructor(props){
        super(props);
        this.state = {
            showHint: false,
        }
    }

    componentDidMount(){
        this.setState({
            showHint: true
        })
    }

    componentWillUnmount(){
        this.setState({
            showHint: false
        })
    }

    // handleHint = (event)=> {
    //     event.preventDefault();
    //     this.props.handleClick();
    //     this.setState((prev, next)=> ({
    //         showHint: !prev.showHint
    //     }));
    // }

    render(){
        return(
            <React.Fragment>
                {this.state.showHint && 
                <div className="hint-container">
                    <div className="hint">
                        <div dangerouslySetInnerHTML={{__html: this.props.hint}}></div>
                        <button onClick = {(e)=>{this.props.handleClick(e, true)}} >Close</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}

export default Hint;