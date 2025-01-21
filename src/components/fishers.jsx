import React from 'react';
import SharedHeading from './shared-heading';

function Fishers() {
  return (
    <div className="no-page-content">
      <SharedHeading
        containerClass="shared-heading"
        name="Fishers 2nd Ward Meetinghouse Cleanup"
        typographyClasses={['heading-1', 'black-and-white-black-text']}
      />
      <div className="page-content">
        <p className="paragraph-1">
          It is time for our 2nd Ward families to sign up
          for our meetinghouse cleaning days in February.
          I&apos;ve prepared a SignUp page for each Saturday in February.
          Please select 1 or 2 days for your family to participate in cleaning the church.
          I feel that using this approach lets you choose your timing according
          to your schedule and let&apos;s you know which task you will perform that day.
        </p>
        <ul className="fishers-list">
          <li className="fishers-list-item">
            <a href="https://www.signupgenius.com/go/60B0449AFAA29ABFD0-54467937-meetinghouse" target="_blank" rel="noreferrer" className="fishers-link">
              Meetinghouse Cleanup - Feb 1 (Saturday)
            </a>
          </li>
          <li className="fishers-list-item">
            <a href="https://www.signupgenius.com/go/60B0449AFAA29ABFD0-54467971-meetinghouse" target="_blank" rel="noreferrer" className="fishers-link">
              Meetinghouse Cleanup - Feb 8 (Saturday)
            </a>
          </li>
          <li className="fishers-list-item">
            <a href="https://www.signupgenius.com/go/60B0449AFAA29ABFD0-54467969-meetinghouse" target="_blank" rel="noreferrer" className="fishers-link">
              Meetinghouse Cleanup - Feb 15 (Saturday)
            </a>
          </li>
          <li className="fishers-list-item">
            <a href="https://www.signupgenius.com/go/60B0449AFAA29ABFD0-54467992-meetinghouse" target="_blank" rel="noreferrer" className="fishers-link">
              Meetinghouse Cleanup - Feb 22 (Saturday)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fishers;
