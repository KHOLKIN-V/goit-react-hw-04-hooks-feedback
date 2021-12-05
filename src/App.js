import { useState } from 'react';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  const  [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const all = {good, neutral, bad}

  const totalPlus = e => {
    const name = e.target.name;
    console.log(name);

    switch(name) {
      case 'good':
        setGood(i => i + 1);
        break;
      case 'neutral':
        setNeutral(i => i + 1);
        break;
      case 'bad':
        setBad(i => i + 1);
        break;
      
      default:
        return;
    }

  }

  const countTotalFeedback = (good, neutral, bad) => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    if (good + neutral + bad !== 0) {
      return Math.floor((good / (good + neutral + bad)) * 100);
   };
  };

    return (
      <>
      <Container>
        <FeedbackOptions all={all} onLeaveFeedback={totalPlus}/>
      </Container>
      {countTotalFeedback(good, neutral, bad) === 0 ? <Container><Notification message="No feedback given (ಥ﹏ಥ)"/></Container> : 
      <Container>
        <Statistics 
        onGood={good} 
        onNeutral={neutral} 
        onBad={bad} 
        onTotal={countTotalFeedback(good, neutral, bad)} 
        onPositivePercentage={countPositiveFeedbackPercentage(good, neutral, bad)}/>
      </Container> }
      </>
    );
}

