import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import "./App.css";

import Homepage from "./pages/hompage/Homepage";
import Navbar from "./components/navbar/Navbar";

Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
