import React from "react";
import { Route } from "react-router-dom";
import HelloAdmin from "../components/helloadmin/HelloAdmin";
import FormField from "../components/formfield/FormField";
import ListView from "../components/list/ListView";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={HelloAdmin} />
      <Route path="/formfield" component={FormField} />
      <Route path="/listview" component={ListView} />
    </div>
  );
};

export default Routes;
