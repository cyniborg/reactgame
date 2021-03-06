import React, {Component} from 'react';
import PropTypes from 'prop-types';

const LandingPageSection = (props)=>(
    <div className={`section-${props.count}`} style = {{backgroundColor:props.colour}} onClick = {()=>{
        props.handleChange(false, false, {'id': props.id, 'colour': props.colour, 'image': props.img, 'name':props.name});
        props.changeScore(0, false);
        }}>
        <div className="landing-text">
        <h3>{props.name}</h3>
        </div>
        <div className="landing-box-img">
        <img className="img-responsive" src={props.img} alt={props.name + "image"} />
        </div>
    </div>
);

LandingPageSection.propTypes = {
    count: PropTypes.number.isRequired,
    colour: PropTypes.string,
    handleChange: PropTypes.func,
    img: PropTypes.string,
    name: PropTypes.string.isRequired
}

class LandingPageBody extends Component{ 
    

    render(){
        return(
            <div className="body-landing slideInDown">
                {this.props.genre.length>0 && this.props.genre.map((e,i)=>{
                    return <LandingPageSection key = {e.id} count={i} name = {e.name} colour = {e.genreColour} img = {e.genreImage} id = {e.id} handleChange = {this.props.handleChange} changeScore = {this.props.changeScore} />;
                    })}
            </div> 
        )
    }
}

export default LandingPageBody;