import React from "react";

import { Route } from "react-router-dom";

import FormField from "../components/formfield/FormField";

const Routes = () => {
  return (
    <div>
      <Route path="/formfield" component={FormField} />
    </div>
  );
};

export default Routes;
