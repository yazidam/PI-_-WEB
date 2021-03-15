import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs"></div>
          <strong>
            <div className="yy">
              Copyright © 2021-2022{' '}
              <a href="https://www.facebook.com/Esprit-TWIN-673767172761916">
                PI WEB 4 TWIN 5
              </a>
              .
            </div>
          </strong>
          All rights reserved.
        </footer>
      </div>
    );
  }
}
