import React from 'react';

class Music extends React.Component {
  render() {
    return (
      <div>
        <h3>Music Stuff</h3>
        <iframe src="https://open.spotify.com/embed/playlist/1YFtup2MvB3cxRaaKHj4qR" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }
}

export default Music;
