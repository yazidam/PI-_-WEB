import React, { Component } from 'react';

export default class aa extends Component {
  render() {
    return (
      <div>
        <div class="formBlock">
          <form id="form">
            <input
              type="text"
              name="start"
              class="input"
              id="start"
              placeholder="Choose starting point"
            />
            <input
              type="text"
              name="end"
              class="input"
              id="destination"
              placeholder="Choose starting point"
            />
            <button style="display: none" type="submit">
              Get Directions
            </button>
          </form>
        </div>
      </div>
    );
  }
}
