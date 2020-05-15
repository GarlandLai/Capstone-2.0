import React from 'react';
import styled from "styled-components";

const FootContainer = styled.footer`
  background-color: #484848;
  font-size: 18px;
`;

const H3 = styled.h3`
  text-decoration: underline;
  color: black;
`;

const Footer = () => {
  return (
    <div>
    <FootContainer className="page-footer">
      <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h3 className="black-text">Contact Us</h3>
                <strong><p className="black-text text-lighten-4">Epicodus</p></strong>
                <p className="black-text text-lighten-4">400 SW 6th Ave, Suite 800, Portland, OR 97204</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <H3>Links</H3>
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
            <strong>© 2019 Copyright by Garland Lai</strong>
            <a className="black-text text-lighten-4 right" href="\">More Links</a>
            </div>
          </div>
        </FootContainer>
    </div>
  );
}

export default Footer;
