import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

// TODO : use a variable/prop to change color='teal'

const MenuExampleAttached = () => (
  <div>
    <Menu stackable attached="top" inverted color="teal">
      <Link to="/">
        <Menu.Item name="gamepad" onClick={this.handleItemClick}>
          <Icon name="gamepad" />
        </Menu.Item>
      </Link>
      <Link to="/formfield">
        <Menu.Item name="add" onClick={this.handleItemClick}>
          <Icon name="add" />
        </Menu.Item>
      </Link>
      <Link to="/listview">
        <Menu.Item name="edit" onClick={this.handleItemClick}>
          <Icon name="edit" />
        </Menu.Item>
      </Link>

      <Menu.Menu position="right">
        <div className="ui right aligned category search item">
          <div className="ui transparent icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search link icon" />
          </div>
          <div className="results" />
        </div>
      </Menu.Menu>
    </Menu>

  </div>
);

export default MenuExampleAttached;
