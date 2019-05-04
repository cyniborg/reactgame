import React, {Component} from 'react';

class Hint extends Component{

    render(){
        return(
            <React.Fragment>
                    <div className="hint-container zoomIn">
                        <div className="hint">
                            <div dangerouslySetInnerHTML={{__html: this.props.hint}}></div>
                            <button onClick = {(e)=>{this.props.handleClick(e, true)}} >Close</button>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Hint;