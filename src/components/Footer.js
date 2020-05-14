import React from 'react';

function Footer() {
const footColor = {
  backgroundColor: "#484848"
}

  return (
    <div>
    <footer style={footColor} className="page-footer">
      <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h4 className="black-text">Contact Us</h4>
                <strong><p className="black-text text-lighten-4">Epicodus</p></strong>
                <p className="black-text text-lighten-4">400 SW 6th Ave, Suite 800, Portland, OR 97204</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="black-text">Links</h5>
                <ul>
                  <li><a className="black-text text-lighten-3" href="\">Home</a></li>
                  <li><a className="black-text text-lighten-3" href="\">About Us</a></li>
                  <li><a className="black-text text-lighten-3" href="\">Resources</a></li>
                  <li><a className="black-text text-lighten-3" href="\">Journals</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright by Garland Lai
            <a className="black-text text-lighten-4 right" href="\">More Links</a>
            </div>
          </div>
        </footer>


    </div>
  );
}

export default Footer;
