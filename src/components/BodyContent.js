import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';


const LandingPageBody = ()=>(
    <div className="body-landing">
      <div className="section-1 yellow">
        <div className="landing-text">
          Market Analyses
        </div>
        <div className="landing-box-img">
          <img className="img-responsive" src="img/market-analyse-landing.png" alt="People discussing market analyses" />
        </div>
      </div>
      <div className="section-2 purple">
        <div className="landing-text">
          Sales/Distribution Strategie
        </div>
        <div className="landing-box-img">
          <img className="img-responsive" src="img/sales.png" alt="Paople analysing statistics" />
        </div>
      </div>
      <div className="section-3 pink">
        <div className="landing-text">
          Marketing
        </div>
        <div className="landing-box-img">
          <img className="img-responsive" src="img/marketing.png" alt="A man shouting into a loudspeaker" />
        </div>
      </div>
      <div className="section-4 beige">
        <div className="landing-text">
          Clients
        </div>
        <div className="landing-box-img">
          <img className="img-responsive" src="img/clients.png" alt="Two persons shaking hands" />
        </div>
      </div>
      <div className="section-5 orange">
        <div className="landing-text">
          Future
        </div>
        <div className="landing-box-img">
          <img className="img-responsive" src="img/future.png" alt="A man climbing upstairs" />
        </div>
      </div>
    </div>
)

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

class BodyContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            landingPage: true,
            gameOver: false
        }
    }

    render(){
        return(
            <React.Fragment>
                { this.state.landingPage === true && this.state.gameOver === false ? <LandingPageBody /> : <GameplayBody />}
            </React.Fragment>
        )
    }
}

export default BodyContent;