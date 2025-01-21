import React from 'react';
import SharedFormShortAnswer from './shared-form-short-answer';
import SharedFormRankingSlider from './shared-form-ranking-slider';
import SharedFormRankingHolder from './shared-form-ranking-holder';

function Relationships() {
  return (
    <div className="relationships-container">
      <p>Hello, let&apos;s talk about relationships.</p>
      <hr />
      <SharedFormRankingHolder />
      <hr />
      <SharedFormRankingSlider label="Looks" range="1-10" />
      <SharedFormRankingSlider label="Street smart" range="1-5" />
      <SharedFormRankingSlider label="Book smart" range="1-5" />
      <SharedFormRankingSlider label="Proactive" range="1-5" />
      <SharedFormRankingSlider label="Outdoorsy" range="1-5" />
      <SharedFormRankingSlider label="Chill" range="1-5" />
      <SharedFormRankingSlider label="Edifying" range="1-5" />
      <SharedFormRankingSlider label="Happy" range="1-10" />
      <SharedFormRankingSlider label="Sports" range="1-5" />
      <SharedFormRankingSlider label="Extreme sports" range="1-5" />
      <SharedFormRankingSlider label="Organized" range="1-5" />
      <SharedFormRankingSlider label="Controlled" range="1-5" />
      <SharedFormRankingSlider label="Cooking" range="1-5" />
      <SharedFormRankingSlider label="Parents" range="1-3" />
      <SharedFormRankingSlider label="Financial" range="1-5" />
      <SharedFormRankingSlider label="Mature" range="1-5" />
      <SharedFormRankingSlider label="Humor" range="1-5" />
      <hr />
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

      <hr />
    </div>
  );
}

export default Relationships;
