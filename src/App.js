import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import React from "react";
//import Button from "component/button/Button";
import Button from "./component/button/Button";
import Form from "./component/form/Form";
import Condition from "./condition.js";
import Welcome from "./component/Props";
import State from "./component/State";
import Submit from "./component/Submit";
import InlineStyle from "./component/Select";
import MyComponent from "./component/SelectAutocomple";
import SelectAuto from "./component/SelectAutocomple";
//import { Button } from "bootstrap";
/* Props
function App() {
  
  return <Welcome name="Vuong" />;
}
*/
//return <Condition isLogin={true   } />; //Condition
function App() {
  return <SelectAuto isMultis={true} />;
}
export default App;
