import React from 'react';

function Footer() {
  return (
    <div>

    <footer class="page-footer">
      <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h4 class="black-text">Contact Us</h4>
                <strong><p class="black-text text-lighten-4">Epicodus</p></strong>
                <p class="black-text text-lighten-4">400 SW 6th Ave, Suite 800, Portland, OR 97204</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="black-text">Links</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="\">Home</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Resources</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Journals</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Copyright by Garland Lai
            <a class="black-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>


    </div>
  );
}

export default Footer;
