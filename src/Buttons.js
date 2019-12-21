import React from "react";
import "./App.css";

const Buttons = props => {
    const scoreHandler = (team, scoreChange) => {
        if (team == 'home') {
          if (scoreChange == 'touchdown') {
            return props.homeScore + 7;
          } else if (scoreChange == 'field goal') {
            return props.homeScore + 3;
          } else {
            alert = 'Invalid score type. Please enter "touchdown" or "field goal"'
          }
        } else {
          if (scoreChange == 'touchdown') {
            return props.awayScore + 7;
          } else if (scoreChange == 'field goal') {
            return props.awayScore + 3;
          } else {
            alert = 'Invalid score type. Please enter "touchdown" or "field goal"'
          }
        }
      }
    return (
        <section className="buttons">
            <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button className="homeButtons__touchdown" onClick={()=> props.setHomeScore(scoreHandler('home', 'touchdown'))}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={()=> props.setHomeScore(scoreHandler('home', 'field goal'))}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown"  onClick={()=> props.setAwayScore(scoreHandler('away', 'touchdown'))}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal"  onClick={()=> props.setAwayScore(scoreHandler('away', 'field goal'))}>Away Field Goal</button>
            </div>
            <div className="homeButtons">
                <button className="awayButtons__touchdown"  onClick={()=> props.setDownValue( props.downValue == 4 ? props.downValue - 3 : props.downValue + 1)}>Down Change</button>
                <button className="awayButtons__fieldGoal"  onClick={()=> props.setQuarterValue( props.quarterValue == 4 ? props.quarterValue - 3 : props.quarterValue + 1)}>Quarter Change</button>
            </div>
        </section>
        )
}

export default Buttons;