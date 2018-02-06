import React from "react";
import { Route } from "react-router-dom";
import HelloAdmin from "../components/helloadmin/HelloAdmin";
import FormField from "../components/formfield/FormField";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={HelloAdmin} />
      <Route path="/formfield" component={FormField} />
    </div>
  );
};

export default Routes;
