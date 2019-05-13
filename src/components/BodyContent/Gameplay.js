import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import colours from '../../resources/colours';
import Hint from './Hint';
import GameOver from './GameOver';

import { CSSTransition } from 'react-transition-group';



const Question = (props)=>(
    <div className="question">
            <p>Question {props.currentQuestionNumber}/{props.totalQuestions}</p>
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
            <p>OPTION</p>
            <p className= "option-number">{props.index+1}<span>/{props.total}</span></p>
        </div>
            <div className="option-content">
              {props.option.text}
            </div>
            <div className="submit-button">
              <button style = {{backgroundColor: props.btnCol}} className="option-select" onClick = {(e)=>{
                  props.handleClick(e, false);
                  props.changeScore(props.option.score, false);
                  }} >
                  Select
                  </button>
            </div>
    </div>

  );
  
  Options.propTypes = {
    index: PropTypes.number.isRequired,
    total: PropTypes.number,
    option: PropTypes.object,
    colour: PropTypes.string,
  }

class GameplayBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalQuestions: this.props.data.length,
            currentQuestionNumber: 0,
            data: this.props.data,
            showHint: false,
            inProp: true,
            windowWidth: 1199 
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

    
    checkWidth = ()=>{
        this.setState({windowWidth: window.innerWidth});
        this.forceUpdate();
    }
    
    componentDidMount(){
        this.checkWidth();
    }
    
    render(){
        window.onresize = this.checkWidth;
        return(
            <div className="body-gameplay slideInRight" style = {!this.props.gameOver?{backgroundColor:this.props.genreData.colour}:null}>
            { this.state.data===null || this.props.gameOver === true ? null : 
            <React.Fragment>
                <CSSTransition
                in = {this.state.inProp}
                timeout = {300}
                classNames = "zoomIn"
                mountOnEnter
                unmountOnExit
                >
                <Question currentQuestionNumber = {this.state.currentQuestionNumber+1} totalQuestions = {this.state.totalQuestions} currentQuestion = { this.props.data[this.state.currentQuestionNumber].questionText} />
                </CSSTransition>
                
                <div className="options">
                    <div className="options-container">
                        <Carousel
                        slideWidth = {this.state.windowWidth>1199 ? 0.24 : this.state.windowWidth<600 ? 0.95 : 0.45}
                        cellSpacing = {20}
                        renderBottomCenterControls = {null}
                        heightMode = 'max'
                        enableKeyboardControls = {true}
                        renderCenterLeftControls = {null}
                        renderCenterRightControls = {null}
                         >
                        {this.state.data[this.state.currentQuestionNumber].options.map((e,i)=>(
                            <CSSTransition
                            key = {i}
                            in = {this.state.inProp}
                            timeout = {600}
                            classNames = "opt-anim"
                            unmountOnExit
                            >

                            <Options key = {i} index = {i} colour = {i>=colours.options.length?colours.options[i%colours.options.length]:colours.options[i]} total = {this.state.data[this.state.currentQuestionNumber].options.length} option = {e} handleClick = {this.handleClick} changeScore = {this.props.changeScore} btnCol = {this.props.genreData.colour} />
                            
                            </CSSTransition>
                        ))}
                        </Carousel>
                    </div>
                </div>,
            
                <div className="img-gameplay"><img className = "img-responsive" src={this.props.genreData.image} alt={this.props.genreData.name} /></div>
            </React.Fragment>
            }
            

            {this.state.showHint ? <Hint showHint = {this.state.showHint} hint = {this.state.data[this.state.currentQuestionNumber].hint} handleClick = {this.handleClick} /> : null
            }
            {this.props.gameOver && !this.state.showHint ? <GameOver gameOver = {this.props.gameOver} resetGame = {this.props.resetGame} />:null}
            </div>
            
        )
    }
}

export default GameplayBody;
