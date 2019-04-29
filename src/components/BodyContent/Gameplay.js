import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import colours from '../../resources/colours';
import Hint from './Hint';



const Question = (props)=>(
    <div className="question">
            <h4>Question {props.currentQuestionNumber}/{props.totalQuestions}</h4>
            <p>{props.currentQuestion}</p>
        </div>
);

Question.propTypes = {
    currentQuestion: PropTypes.string.isRequired,
    currentQuestionNumber: PropTypes.number,
    totalQuestions: PropTypes.number
};

const Options = (props) => (
    <div className= {`opt-${props.index}`}>
        <div className="option-header" style = {{backgroundColor: props.colour}}>
            <h4>OPTION</h4>
            <p>{props.index+1}<span>/{props.total}</span></p>
        </div>
            <div className="option-content">
              {props.optionText}
            </div>
            <div className="submit-button">
              <button onClick = {(e)=>{props.handleClick(e, false);}}>Select</button>
            </div>
    </div>
  );
  
  Options.propTypes = {
    index: PropTypes.number.isRequired,
    total: PropTypes.number,
    optionText: PropTypes.string,
    colour: PropTypes.string
  }

class GameplayBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalQuestions: this.props.data.length,
            currentQuestionNumber: 0,
            data: this.props.data,
            showHint: false
        }
    }

    handleClick = (event, hint = false)=>{
        event.preventDefault();
        this.setState((prev,next)=>({
            showHint: !prev.showHint,
            currentQuestionNumber: hint && prev.currentQuestionNumber<this.state.totalQuestions-1?prev.currentQuestionNumber + 1:prev.currentQuestionNumber
        }))
    }

    render(){
        return(
            <React.Fragment>
            { this.state.data===null ? null : 
            <div className="body-gameplay" style = {{backgroundColor:this.props.genreData.colour}}>
                <Question currentQuestionNumber = {this.state.currentQuestionNumber+1} totalQuestions = {this.state.totalQuestions} currentQuestion = { this.props.data[this.state.currentQuestionNumber].questionText} />
                
                <div className="options">
                    <div className="options-container">
                        <Carousel
                        slideWidth = {0.24}
                        cellSpacing = {20}
                        renderBottomCenterControls = {null}
                        heightMode = 'max'
                         >
                        {this.state.data[this.state.currentQuestionNumber].options.map((e,i)=>(
                            <Options key = {i} index = {i} colour = {i>=colours.options.length?colours.options[i%colours.options.length]:colours.options[i]} total = {this.state.data[this.state.currentQuestionNumber].options.length} optionText = {e} handleClick = {this.handleClick} />
                        ))}
                        </Carousel>
                    </div>
                </div>
            
                <div className="img-gameplay"><img className = "img-responsive" src={this.props.genreData.image} alt="image" /></div>
            </div>
            }
            {this.state.showHint && <Hint hint = {this.state.data[this.state.currentQuestionNumber].hint} handleClick = {this.handleClick} />}
            </React.Fragment>
        )
    }
}

export default GameplayBody;

/*<Question currentQuestionNumber = {this.state.currentQuestionNumber} totalQuestions = {this.state.totalQuestions} currentQuestion = { this.state.data[this.state.currentQuestionNumber].question} />
        <div className="options">
            <div className="options-container">
                <Carousel>
                  <Options />
                </Carousel>
            </div>
        </div>*/