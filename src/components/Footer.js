import React from 'react';

function Footer() {
  return (
    <div>

    <footer class="page-footer">
      <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="black-text">Footer Content</h5>
                <p class="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="black-text">Links</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Copyright Text
            <a class="black-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>


    </div>
  );
}

export default Footer;