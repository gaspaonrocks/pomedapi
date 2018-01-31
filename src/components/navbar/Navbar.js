import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import DropdownMenu from "semantic-ui-react/dist/commonjs/modules/Dropdown/DropdownMenu";

// TODO : use a variable/prop to change color='teal'

const MenuExampleAttached = () => (
  <div>
    <Menu attached="top" inverted color="teal">
      <Dropdown item icon="add" simple>
        <Dropdown.Menu>
          <Dropdown.Item>Ajouter...</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/formfield">Un Membre du Personnel</Link>
          </Dropdown.Item>
          <Dropdown.Item>Une Nouvelle</Dropdown.Item>
          <Dropdown.Item>Un Menu</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item icon="edit" simple>
        <Dropdown.Menu>
          <Dropdown.Item>Lister...</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Un Membre du Personnel</Dropdown.Item>
          <Dropdown.Item>Une Nouvelle</Dropdown.Item>
          <Dropdown.Item>Un Menu</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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

    <Segment attached="bottom" />
  </div>
);

export default MenuExampleAttached;
