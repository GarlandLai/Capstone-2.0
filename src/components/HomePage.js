import React from 'react';
import Learn from './Learn/Learn';
import Relax from './Relax/Relax';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <Relax />
        <br/>
        <Learn />
      </div>
    );
  }
}

export default HomePage;
