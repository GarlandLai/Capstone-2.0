import React from 'react';
import Exercise from './Exercise';
import Nutrition from './Nutrition';

class Learn extends React.Component {
  render() {
    return (
      <div>
        <h1>Learn</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <Exercise />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <Nutrition />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Learn;
