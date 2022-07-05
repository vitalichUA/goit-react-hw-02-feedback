
import React, { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

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

    handleLeaveFeedback = (evt) => { 
    const type = evt.currentTarget.getAttribute('value');
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      }
    });
  }

    render() {
    const {good, neutral, bad} = this.state
    return (
        
    <>
    <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handleLeaveFeedback} />
    </Section>         
    <Section title="Statistics">
        {this.countTotalFeedback() === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()} />}
            </Section>
    </>

    )}
}
