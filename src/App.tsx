import React from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import "./App.css";
import Home from "./pages/home/Home";

Amplify.configure(awsconfig);

function App() {
  return <Home />;
}

export default App;
