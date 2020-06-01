import React from 'react';
import './styles/About.scss';

const About = () => {
  return (
    <>
      <div className='About wrapper'>
        <div className='About-gridDesktop'>
          <div className='About-containerOne'>
            <div className='About-containerOne--title'>
              <h2>What’s different about Manage?</h2>
              <p>
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>
          </div>
          <div className='About-containerTwo'>
            <div className='About-containerTwo--item'>
              <div className='title-and-circle'>
                <div className='circle'>01</div>
                <h3>Track company-wide progress</h3>
              </div>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture again.
              </p>
            </div>
            <div className='About-containerTwo--item'>
              <div className='title-and-circle'>
                <div className='circle'>02</div>
                <h3>Advanced built-in reports</h3>
              </div>
              <p>
                Set internal delivery estimates and track progress toward company
                goals. Our customizable dashboard helps you build out the reports
                you need to keep key stakeholders informed.
              </p>
            </div>
            <div className='About-containerTwo--item'>
              <div className='title-and-circle'>
                <div className='circle'>03</div>
                <h3>Everything you need in one place</h3>
              </div>
              <p>
                Stop jumping from one service to another to communicate, store files,
                track tasks and share documents. Manage offers an all-in-one team
                productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
