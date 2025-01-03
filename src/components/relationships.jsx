import React from 'react';
import SharedFormShortAnswer from './shared-form-short-answer';

function Relationships() {
  return (
    <div className="relationships-container">
      <p>Hello, let&apos;s talk about relationships.</p>
      <SharedFormShortAnswer
        label="What is your first name?"
        placeholder="First Name"
        maxCharacters={20}
        autoComplete="given-name"
      />
      <SharedFormShortAnswer
        label="What is your last name?"
        placeholder="Last Name"
        maxCharacters={20}
        autoComplete="family-name"
      />
      <SharedFormShortAnswer
        label="What is your full name?"
        placeholder="Full Name"
        maxCharacters={40}
        autoComplete="name"
      />
      <SharedFormShortAnswer
        label="What city do you live at?"
        placeholder="City"
        maxCharacters={40}
        autoComplete="address-level2"
      />
      <SharedFormShortAnswer
        label="What state do you live in?"
        placeholder="State"
        maxCharacters={40}
        autoComplete="address-level1"
      />
      <SharedFormShortAnswer
        label="What country do you live in?"
        placeholder="Country"
        maxCharacters={40}
        autoComplete="country-name"
      />
      <SharedFormShortAnswer
        label="What is your phone number?"
        placeholder="Phone Number"
        maxCharacters={40}
        autoComplete="tel"
      />
      <SharedFormShortAnswer
        label="What is your best email?"
        placeholder="Email"
        maxCharacters={40}
        autoComplete="email"
      />
      <SharedFormShortAnswer
        label="What is your instagram?"
        placeholder="Instagram"
        maxCharacters={40}
      />
      <SharedFormShortAnswer
        label="What is your occupation?"
        placeholder="Occupation"
        maxCharacters={40}
      />
      <SharedFormShortAnswer
        label="What is the highest level of education you have obtained?"
        placeholder="Education"
        maxCharacters={40}
      />
      <SharedFormShortAnswer
        label="What color is your toothbrush?"
        placeholder="Toothbrush Color"
        maxCharacters={40}
      />
      <SharedFormShortAnswer
        label="How open are you to trying new hobbies/activities with a partner?"
        placeholder="Activity Openness"
        maxCharacters={40}
      />
    </div>
  );
}

export default Relationships;
