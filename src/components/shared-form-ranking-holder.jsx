import React, { useState } from 'react';
import SharedFormRankingSlider from './shared-form-ranking-slider';

function RankingList() {
  // Initial state for the rankings
  // const [rankings, setRankings] = useState([
  const [rankings] = useState([
    {
      id: 1, name: 'Looks', range: '1-10', value: 0,
    },
    {
      id: 2, name: 'Street smart', range: '1-5', value: 0,
    },
    {
      id: 3, name: 'Book smart', range: '1-5', value: 0,
    },
    {
      id: 4, name: 'Proactive', range: '1-5', value: 0,
    },
    {
      id: 5, name: 'Outdoorsy', range: '1-5', value: 0,
    },
    {
      id: 6, name: 'Chill', range: '1-5', value: 0,
    },
    {
      id: 7, name: 'Edifying', range: '1-5', value: 0,
    },
    {
      id: 8, name: 'Happy', range: '1-10', value: 0,
    },
    {
      id: 9, name: 'Sports', range: '1-5', value: 0,
    },
    {
      id: 10, name: 'Extreme sports', range: '1-5', value: 0,
    },
    {
      id: 11, name: 'Organized', range: '1-5', value: 0,
    },
    {
      id: 12, name: 'Controlled', range: '1-5', value: 0,
    },
    {
      id: 13, name: 'Cooking', range: '1-5', value: 0,
    },
    {
      id: 14, name: 'Parents', range: '1-3', value: 0,
    },
    {
      id: 15, name: 'Financial', range: '1-5', value: 0,
    },
    {
      id: 16, name: 'Mature', range: '1-5', value: 0,
    },
    {
      id: 17, name: 'Humor', range: '1-5', value: 0,
    },
  ]);

  // Calculate total
  const total = rankings.reduce((sum, item) => sum + item.value, 0);

  // Handle slider change
  // const handleSliderChange = (id, newValue) => {
  //   setRankings((prevRankings) => prevRankings.map((item) => (
  //     item.id === id
  //       ? { ...item, value: newValue }
  //       : item
  //   )));
  // };

  return (
    <div>
      <h1>Ranking List</h1>
      <ul>
        {rankings.map((item) => (
          <li key={item.id}>
            <SharedFormRankingSlider label={item.name} range={item.range} />
          </li>
        ))}
      </ul>
      <h2>
        Total:
        {total}
      </h2>
    </div>
  );
}

export default RankingList;
