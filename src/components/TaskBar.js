import BotButton from "./BotButton"
import React from 'react';

const TaskBar = () => {
  return (
    <div className="taskBar">
      <div className="botBar">
          <BotButton clickLink="https://github.com/Dermar" image="/public/github_logo.png"/>
          <BotButton clickLink="https://www.linkedin.com/in/marian-derias-92a71a259/" image="/public/linkedin_logo.png"/>
          <BotButton clickLink="https://www.facebook.com/marian.derias.96" image="/public/facebook_logo.png"/>
      </div>
      <div><p>Email me: </p><a className="link" href="mailto:marianderias@gmail.com">marianderias@gmail.com</a></div>
      <p>Call: 0430927893</p>
    </div>
  )
}

export default TaskBar;
