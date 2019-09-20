import React from 'react';
import Meditation from './Meditation';
import Music from './Music';

class Relax extends React.Component {
  render() {
    return (
      <div>
        <h1>Relax</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <Meditation />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <Music />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Relax;
