//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32);
  const [awayScore, setAwayScore] = useState(32);
  const [downValue, setDownValue] = useState(0);
  const [quarterValue, setQuarterValue] = useState(0);
  
  const scoreHandler = (team, scoreChange) => {
    if (team == 'home') {
      if (scoreChange == 'touchdown') {
        return homeScore + 7;
      } else if (scoreChange == 'field goal') {
        return homeScore + 3;
      } else {
        alert = 'Invalid score type. Please enter "touchdown" or "field goal"'
      }
    } else {
      if (scoreChange == 'touchdown') {
        return awayScore + 7;
      } else if (scoreChange == 'field goal') {
        return awayScore + 3;
      } else {
        alert = 'Invalid score type. Please enter "touchdown" or "field goal"'
      }
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow downValue={downValue} quarterValue={quarterValue}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=> setHomeScore(scoreHandler('home', 'touchdown'))}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=> setHomeScore(scoreHandler('home', 'field goal'))}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"  onClick={()=> setAwayScore(scoreHandler('away', 'touchdown'))}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"  onClick={()=> setAwayScore(scoreHandler('away', 'field goal'))}>Away Field Goal</button>
        </div>
        <div className="homeButtons">
          <button className="awayButtons__touchdown"  onClick={()=> setDownValue( downValue == 4 ? downValue - 4 : downValue + 1)}>Down Change</button>
          <button className="awayButtons__fieldGoal"  onClick={()=> setQuarterValue( quarterValue == 4 ? quarterValue - 4 : quarterValue + 1)}>Quarter Change</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
