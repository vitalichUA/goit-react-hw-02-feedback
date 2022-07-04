import React, { Component } from "react";
import { Button } from "components/Statistics/Statistic.styled";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }



    handleGood = () => {
        this.setState(state => ({
            good: state.good +1
        }))
    }
    handleNeutral = () => {
        this.setState(state => ({
            neutral: state.neutral +1
        }))
    }
    handleBad = () => {
        this.setState(state => ({
            bad: state.bad +1
        }))
    }
    

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad)
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral} = this.state;
        return Math.round((good + neutral) * 100 / this.countTotalFeedback())
    }

    render() {
    const {good, neutral, bad} = this.state
    return (
        
    <div>
    <h2>Please leave feedback</h2>
        <div>
           <Button type="button" onClick={this.handleGood}>Good</Button>      
           <Button type="button" onClick={this.handleNeutral}>Neutral</Button>      
           <Button type="button" onClick={this.handleBad}>Bad</Button>      
        </div>
            <div>
                <h2>Statistics</h2>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                </ul>
                <div>Total {this.countTotalFeedback()}</div>
                <p>Percent {this.countPositiveFeedbackPercentage() }</p>
    </div>
    </div>

    )}
}