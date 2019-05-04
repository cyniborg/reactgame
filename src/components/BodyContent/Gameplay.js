import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import colours from '../../resources/colours';
import Hint from './Hint';
import { CSSTransition } from 'react-transition-group';



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
    

    <div className= {`opt-${props.index} flipInY`}>
        <div className="option-header" style = {{backgroundColor: props.colour}}>
            <h4>OPTION</h4>
            <p>{props.index+1}<span>/{props.total}</span></p>
        </div>
            <div className="option-content">
              {props.optionText}
            </div>
            <div className="submit-button">
              <button className="option-select" onClick = {(e)=>{
                  props.handleClick(e, false);
                  props.changeScore(5, false);
                  }}>
                  Select
                  </button>
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
            showHint: false,
            inProp: true
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.currentQuestionNumber > this.state.currentQuestionNumber)
        this.setState(
            {inProp: true}
        )
    }

    handleClick = (event, hint = false)=>{
        event.preventDefault();
        this.setState((prev,next)=>({
            showHint: !prev.showHint,
            currentQuestionNumber: hint && prev.currentQuestionNumber<this.state.totalQuestions-1?prev.currentQuestionNumber + 1:prev.currentQuestionNumber,
            inProp: !prev.inProp
        }));

        if(this.state.currentQuestionNumber === this.state.totalQuestions-1 && hint){
            this.props.handleChange(false, true);
        }
    }

    render(){
        return(
            <React.Fragment>
            { this.state.data===null ? null : 
            <div className="body-gameplay" style = {{backgroundColor:this.props.genreData.colour}}>
                <CSSTransition
                in = {this.state.inProp}
                timeout = {300}
                classNames = "opt-anim"
                unmountOnExit
                >
                <Question currentQuestionNumber = {this.state.currentQuestionNumber+1} totalQuestions = {this.state.totalQuestions} currentQuestion = { this.props.data[this.state.currentQuestionNumber].questionText} />
                </CSSTransition>
                
                <div className="options">
                    <div className="options-container">
                        <Carousel
                        slideWidth = {0.24}
                        cellSpacing = {20}
                        renderBottomCenterControls = {null}
                        heightMode = 'max'
                         >
                        {this.state.data[this.state.currentQuestionNumber].options.map((e,i)=>(
                            <CSSTransition
                            key = {i}
                            in = {this.state.inProp}
                            timeout = {300}
                            classNames = "opt-anim"
                            unmountOnExit
                            >

                            <Options key = {i} index = {i} colour = {i>=colours.options.length?colours.options[i%colours.options.length]:colours.options[i]} total = {this.state.data[this.state.currentQuestionNumber].options.length} optionText = {e} handleClick = {this.handleClick} changeScore = {this.props.changeScore} />
                            
                            </CSSTransition>
                        ))}
                        </Carousel>
                    </div>
                </div>
            
                <div className="img-gameplay"><img className = "img-responsive" src={this.props.genreData.image} alt="image" /></div>
            </div>
            }
            

            {this.state.showHint && <Hint showHint = {this.state.showHint} hint = {this.state.data[this.state.currentQuestionNumber].hint} handleClick = {this.handleClick} />
            }
            
            </React.Fragment>
        )
    }
}

export default GameplayBody;
