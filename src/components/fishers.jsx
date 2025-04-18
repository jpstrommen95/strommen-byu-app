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
          It is time for our 2nd Ward families to sign up for our meetinghouse cleaning days.
          I&apos;ve prepared a SignUp page for each Saturday for our assignment.
          Please select 1 or 2 days for your family to participate in cleaning the church.
          I feel that using this approach lets you choose your timing according to your schedule
          and lets you know which task you will perform that day.
          Our ward is assigned to clean the church in February, May, August, and November.
          <br />
          <br />
          Thanks,
          <br />
          Brother Randy Strommen
        </p>
        <ul className="fishers-list">
          <li className="fishers-list-item">
            <a href="https://www.signupgenius.com/go/60B0449AFAA29ABFD0-54467937-meetinghouse" target="_blank" rel="noreferrer" className="fishers-link">
              Meetinghouse Cleanup - Feb 1 (Saturday)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fishers;
