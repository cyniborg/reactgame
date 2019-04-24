import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';


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
  <div className= {`option-${props.index}`}>
      <div className="option-header">
          <h4>OPTION</h4>
          <p>{props.index}<span>/{props.total}</span></p>
      </div>
      <div className="option-body">
          <div className="option-content">
            {props.optionText}
          </div>
          <div className="submit-button">
            <button>Select</button>
          </div>
      </div>
  </div>
);

Options.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number,
  optionText: PropTypes.string
}

class GameplayBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalQuestions: 0,
            currentQuestionNumber: 0,
            data: {}
        }
    }

    render(){
        return(
            
    <div className="body-gameplay">
        <Question currentQuestionNumber = {this.state.currentQuestionNumber} totalQuestions = {this.state.totalQuestions} currentQuestion = { this.state.data[this.state.currentQuestionNumber].question} />
        <div className="options">
            <div className="options-container">
                <Carousel>
                  <Options />
                </Carousel>
            </div>
        </div>
        <div className="img-gameplay"><img src="" alt="" /></div>
    </div>
        )
    }
}

export default GameplayBody;