import React from 'react';
import Meditation from './Meditation';
import Music from './Music';

class Meditate extends React.Component {
  render() {
    const cardStyle = {
      paddingTop: "50px",
      paddingBottom: "50px",
      backgroundColor: "#A07D98"
    }

    return (
      <div className='container'>
        <h1>Listen to a Meditation of your choosing and click on button to add journal!</h1>
        <div className="row">
          <div className="col-md-6">
            <div style={cardStyle} className="card">
              <Meditation />
            </div>
          </div>
          <div className="col-md-6">
            <div style={cardStyle} className="card">
              <Music />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Meditate;
