import React from 'react';
import Meditate from './meditate/Meditate';
import CreateJournal from './journals/CreateJournal'

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <Meditate />
        <CreateJournal />
      </div>
    );
  }
}

export default HomePage;
