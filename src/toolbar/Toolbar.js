import React, { Component } from "react";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <button>This is logo</button>
        <div class="hidden">
          <ul>
            <li>This is menu1</li>
            <li>This is menu2</li>
            <li>This is menu3</li>
            <li>This is menu4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Toolbar;
