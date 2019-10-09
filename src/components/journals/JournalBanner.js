import React from 'react';

function JournalBanner() {

  const bannerStyles = {
    fontWeight: "bold",
    textShadow: "4px 4px 8px black",
  }
  return (
    <div style={bannerStyles} id='journalBanner'>
      <h1>Reflect to jumpstart your goals</h1>
      <ul>
        <li>Mindfulness to improve self awareness and emotional intelligence</li>
        <li>Boost memory, comprehension, and creativity</li>
        <li>Improve communication and self-confidence</li>
        <li>Release stress and anxiety to improve sleep</li>
      </ul>
    </div>
  );
}

export default JournalBanner;
